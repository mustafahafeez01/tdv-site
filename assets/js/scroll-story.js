/**
 * Homepage scroll story.
 *
 * The plane's travel is handled entirely by `position: sticky` in CSS, so this
 * file never positions anything. Its only jobs are to set the rail's progress
 * as a unitless 0-1 custom property (consumed by a compositor-only scaleY) and
 * to toggle state classes as the plane passes each stop.
 *
 * Under prefers-reduced-motion it applies the resolved end state and returns
 * before any listener is attached, so there is no scroll work at all.
 */
(function () {
  function init() {
    var track = document.querySelector('.story-track');
    if (!track) return;

    var plane = track.querySelector('.story-plane');
    var lane = track.querySelector('.story-plane-lane');
    var cleared = track.parentNode.querySelector('.story-cleared');
    var stops = Array.prototype.slice.call(track.querySelectorAll('.story-stop'));
    if (!stops.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.classList.add('is-underway', 'is-landed');
      track.style.setProperty('--story-fill', '1');
      track.style.setProperty('--story-progress', '1');
      stops.forEach(function (s) { s.classList.add('is-visible', 'is-passed'); });
      if (plane) plane.classList.add('is-landed');
      var t = document.querySelector('.story-timer');
      if (t) {
        t.classList.add('is-on');
        var v = t.querySelector('.story-timer-value');
        if (v) v.textContent = '10:00';
      }
      return;
    }

    // The six handsets ship as loading="lazy", which keeps them off the
    // critical path for readers who never scroll this far. The cost is that
    // the browser only begins fetching once an image is nearly on screen, so
    // a fast flick outruns the loader and the panels arrive blank. Warming
    // them all at the first sign the reader is heading this way gives the
    // fetch a long head start. Flipping loading to eager is spec'd to start
    // the load.
    //
    // 300px, not a viewport-relative margin. The track begins around 1327px
    // down on a 390x844 handset, so the gap below the fold is roughly 480px:
    // anything wider than that fires while the page is still at rest, which
    // pulls all six into the initial load and shows up in Lighthouse as
    // transfer the visitor never asked for. 300px clears the fold but needs a
    // real scroll to trigger, and a scroll is the only thing that leads here.
    var phones = Array.prototype.slice.call(track.querySelectorAll('img.story-phone'));
    if (phones.length) {
      var warm = new IntersectionObserver(function (entries) {
        if (!entries.some(function (e) { return e.isIntersecting; })) return;
        phones.forEach(function (img) {
          if (img.loading === 'lazy') img.loading = 'eager';
        });
        warm.disconnect();
      }, { rootMargin: '300px 0px 300px 0px', threshold: 0 });
      warm.observe(track);
    }

    // Reveal each stop as the aircraft draws level with it, once. The plane
    // is sticky at 38dvh (.story-plane in input.css), so the trigger line
    // sits 62% up from the bottom of the viewport: 62 = 100 - 38, and if the
    // sticky offset ever moves this margin moves with it. The old -8% margin
    // finished the reveal half a screen ahead of the aircraft, which made
    // the plane read as trailing the reader rather than leading them.
    // Still one-shot on purpose - a reveal scrubbed against scroll keeps
    // readers rocking back and forth trying to line the copy up with the
    // graphic; revealed once, a panel settles and stays.
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      });
      // Threshold 0 on purpose. A stop is a tall element - a board panel plus a
      // handset - so any fraction-of-the-element threshold fires late on mobile,
      // leaving copy sitting half-faded in the middle of the screen.
    }, { rootMargin: '0px 0px -62% 0px', threshold: 0 });

    stops.forEach(function (stop) {
      var rect = stop.getBoundingClientRect();
      // Arriving mid-story - an anchor, a restored scroll position - anything
      // already behind the aircraft's line shows at once. Everything below it
      // waits for the plane.
      if (rect.top < window.innerHeight * 0.38 && rect.bottom > 0) {
        stop.classList.add('is-visible');
      } else {
        reveal.observe(stop);
      }
    });

    // Resolved once. These elements never change, and querying them from the
    // frame handler cost a tree walk per stop on every frame.
    var dots = stops.map(function (stop) {
      return stop.querySelector('.story-dot') || stop;
    });
    var signs = stops.map(function (stop) {
      return stop.querySelector('.story-sign');
    });

    var timer = document.querySelector('.story-timer');
    var timerValue = timer && timer.querySelector('.story-timer-value');
    var shownSeconds = -1;
    var holdingFinish = false;
    var retireTimer = null;
    var ticking = false;

    function update() {
      ticking = false;

      // Read everything first, then write everything. Interleaving the two -
      // toggling a class, then measuring the next rect - forces a synchronous
      // layout per element, which is what makes a scroll handler feel heavy
      // even when the frame budget looks fine.
      var rect = track.getBoundingClientRect();
      var laneRect = lane ? lane.getBoundingClientRect() : rect;

      // The lit tarmac ends level with the wing, on the same side of it either
      // way. The glyph's wings span 0.333 to 0.625 of its box, so 0.62 puts the
      // edge tangent to the wing: the aircraft always sits on lit tarmac with
      // the dark starting at its leading edge, and the edge never cuts across
      // the span.
      var wingEdge = 0.62;
      var marker = window.innerHeight / 2;
      var planeH = 0;
      var planeRect = null;
      if (plane) {
        planeRect = plane.getBoundingClientRect();
        if (planeRect.height) {
          planeH = planeRect.height;
          marker = planeRect.top + planeH * wingEdge;
        }
      }

      var tops = dots.map(function (dot) {
        return dot.getBoundingClientRect().top;
      });
      var signRects = signs.map(function (sign) {
        return sign ? sign.getBoundingClientRect() : null;
      });

      // Two different quantities, and conflating them is what put the clock at
      // 9:55 and dragged the lit edge off the wing.
      //
      // fill: where the lit tarmac ends, as a fraction of the runway. Follows
      // the wing exactly, because that is the whole point of it.
      var fill = Math.max(0, Math.min(1, (marker - rect.top) / rect.height));
      //
      // progress: how far through the story the reader is, 0 to 1. The marker
      // rides a sticky element inside a lane that stops short of the far
      // threshold, so its travel is the lane's height less the aircraft's.
      var travel = laneRect.height - planeH;
      var progress = travel > 0
        ? (marker - (laneRect.top + planeH * wingEdge)) / travel
        : fill;
      progress = Math.max(0, Math.min(1, progress));

      // The aircraft no longer turns to face an upward scroll. Scrolling back
      // a few lines to re-read is reading, not a change of journey, and
      // answering it with a 180 flip plus the lit edge swapped to the far
      // side of the wing punished the one behaviour a story should invite.
      // No accumulation threshold saves it either: any threshold small enough
      // to catch a real return trip still fires on a two-panel re-read.
      // Rolling back now rewinds the scene the way footage rewinds - the same
      // picture, run backwards, never mirrored.

      // Now write.
      track.style.setProperty('--story-fill', fill.toFixed(4));
      track.style.setProperty('--story-progress', progress.toFixed(4));
      track.classList.toggle('is-underway', fill > 0);

      // Ten minutes, counted off across the length of the runway. Written only
      // when the displayed value actually changes, not on every frame.
      // Read the clock against the stops, not against raw scroll distance.
      // Mapped to the lane, the approach and the run-out ate into the ten
      // minutes - the last stop reached 8:37 - and the error differed per
      // breakpoint because the spacing does. Stops are two minutes apart.
      if (timerValue) {
        var step = 600 / (stops.length - 1);
        var seconds;
        if (marker <= tops[0]) {
          seconds = 0;
        } else if (marker >= tops[tops.length - 1]) {
          seconds = 600;
        } else {
          seconds = 600;
          for (var k = 1; k < tops.length; k++) {
            if (marker < tops[k]) {
              var span = tops[k] - tops[k - 1];
              seconds = (k - 1) * step + (span > 0 ? (marker - tops[k - 1]) / span : 0) * step;
              break;
            }
          }
        }
        var total = Math.round(seconds);
        if (total !== shownSeconds) {
          shownSeconds = total;
          var mins = Math.floor(total / 60);
          var secs = total % 60;
          timerValue.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
        }
        // The clock is sticky to the section, so without an upper bound it
        // settles over the closing line once the runway has ended. It retires
        // when the runway leaves the reading line - the sign-off takes over.
        // The clock has to be seen to finish. It counts while the aircraft
        // rolls, snaps to the full ten minutes on arrival, holds there long
        // enough to read, then winds down. Scrolling back up restarts it.
        var onScreen = rect.top < window.innerHeight && progress > 0;
        var arrived = progress >= 0.999;

        if (arrived) {
          if (timerValue) timerValue.textContent = '10:00';
          if (!holdingFinish) {
            holdingFinish = true;
            timer.classList.add('is-on');
            clearTimeout(retireTimer);
            retireTimer = setTimeout(function () {
              timer.classList.remove('is-on');
            }, 1100);
          }
        } else {
          if (holdingFinish) {
            holdingFinish = false;
            clearTimeout(retireTimer);
          }
          timer.classList.toggle('is-on', onScreen);
        }
      }

      stops.forEach(function (stop, i) {
        var passed = tops[i] <= marker;
        stop.classList.toggle('is-passed', passed);
        // Backstop for the reveal. The observer is one-shot, and a
        // same-document jump can carry a stop from below its line to above it
        // without ever intersecting, which would leave a blank panel above
        // the aircraft for good. Anything the aircraft has passed is by
        // definition revealed.
        if (passed) stop.classList.add('is-visible');
        var sr = signRects[i];
        if (!planeRect || !sr) return;
        stop.classList.toggle('is-under-plane',
          sr.bottom > planeRect.top && sr.top < planeRect.bottom);
      });

      var landed = progress >= 0.999;
      if (plane) plane.classList.toggle('is-landed', landed);
      track.classList.toggle('is-landed', landed);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
