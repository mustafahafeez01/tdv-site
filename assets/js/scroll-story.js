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
    var lastY = window.scrollY;
    var goingBack = false;
    var turnRun = 0;

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

      // Direction of travel, with hysteresis. The aircraft turns to face the
      // way the reader is going, so a bare sign flip on every frame turned
      // trackpad noise into a spinning glyph: 2px is the noise floor, and the
      // heading only commits once 32px have accumulated against it.
      //
      // The lit tarmac reverses with the aircraft: it marks what has already
      // been covered, so on the way back up it belongs on the other side of
      // the wing. This pairing was removed once for restaging the runway
      // during a short re-read - the hysteresis above is what makes it
      // tolerable, since nothing under 32px of sustained travel moves it.
      var y = window.scrollY;
      var delta = y - lastY;
      if (Math.abs(delta) > 2) {
        var wantBack = delta < 0;
        if (wantBack !== goingBack) {
          turnRun += Math.abs(delta);
          if (turnRun > 32) {
            goingBack = wantBack;
            turnRun = 0;
          }
        } else {
          turnRun = 0;
        }
        lastY = y;
      }

      // Now write.
      track.style.setProperty('--story-fill', fill.toFixed(4));
      track.style.setProperty('--story-progress', progress.toFixed(4));
      track.classList.toggle('is-underway', fill > 0);
      if (plane) plane.classList.toggle('is-reverse', goingBack);
      track.classList.toggle('is-reverse', goingBack);

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

    // Warm every handset on the first scroll, so a panel never fades in around
    // an image that has not arrived. A slow reader is the case that exposes it:
    // the reveal is timed to the aircraft, and lazy loading starts a fetch only
    // once the image is nearly in view, so the panel can finish its fade with
    // the handset still blank.
    //
    // Deliberately a separate Image() rather than touching the markup. The six
    // handsets keep their real src and loading="lazy", so the browser's own
    // heuristic still runs and this can only ever start a fetch EARLIER, never
    // later - which is exactly how the data-src version of this regressed, by
    // withholding the URL until script ran and losing to Chrome's own timing on
    // a slow connection. Warming into the HTTP cache has no such downside: if
    // the fetch has not finished by the time the lazy image enters view, the
    // browser simply carries on with the request already in flight.
    var warmed = false;
    function warmHandsets() {
      if (warmed) return;
      warmed = true;
      var shots = track.querySelectorAll('img.story-phone');
      for (var i = 0; i < shots.length; i++) {
        var src = shots[i].currentSrc || shots[i].getAttribute('src');
        if (!src) continue;
        var pre = new Image();
        pre.decoding = 'async';
        pre.src = src;
      }
    }

    function onScroll() {
      warmHandsets();
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
