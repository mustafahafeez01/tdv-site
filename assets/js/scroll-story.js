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

    // Reveal each stop as it enters, once.
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      });
      // Threshold 0 on purpose. A stop is a tall element - a board panel plus a
      // handset - so any fraction-of-the-element threshold fires late on mobile,
      // leaving copy sitting half-faded in the middle of the screen.
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });

    stops.forEach(function (stop) {
      var rect = stop.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        stop.classList.add('is-visible');
      } else {
        reveal.observe(stop);
      }
    });

    var lastY = window.scrollY;
    var goingBack = false;
    var turnRun = 0;
    var timer = document.querySelector('.story-timer');
    var timerValue = timer && timer.querySelector('.story-timer-value');
    var shownSeconds = -1;
    var holdingFinish = false;
    var retireTimer = null;
    var ticking = false;

    function update() {
      ticking = false;

      // Read everything first. Writing a style and then reading a rect in the
      // same frame forces a synchronous layout, which is what makes a
      // scroll handler feel heavy even when the frame budget looks fine.
      var rect = track.getBoundingClientRect();
      var laneRect = lane ? lane.getBoundingClientRect() : rect;

      // The lit tarmac ends level with the wing, on the same side of it either
      // way. The glyph's wings span 0.333 to 0.625 of its box, so 0.62 puts the
      // edge tangent to the wing: the aircraft always sits on lit tarmac with
      // the dark starting at its leading edge, and the edge never cuts across
      // the span. Flipping this value with direction left the tail stranded on
      // dark tarmac going down.
      var wingEdge = 0.62;
      var marker = window.innerHeight / 2;
      var planeH = 0;
      if (plane) {
        var pr = plane.getBoundingClientRect();
        if (pr.height) {
          planeH = pr.height;
          marker = pr.top + planeH * wingEdge;
        }
      }

      var tops = stops.map(function (stop) {
        var dot = stop.querySelector('.story-dot');
        return (dot || stop).getBoundingClientRect().top;
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

      // Direction of travel. The aircraft turns to face the way the reader
      // is going, so scrolling back up reads as flying back up the runway.
      // Direction of travel, with hysteresis. The lit column swaps sides the
      // instant this flips, so a 2px threshold turned every trackpad wobble
      // into a full repaint on the wrong side of the wing.
      var y = window.scrollY;
      var delta = y - lastY;
      if (Math.abs(delta) > 2) {
        var wantBack = delta < 0;
        if (wantBack !== goingBack) {
          turnRun += Math.abs(delta);
          if (turnRun > 32) {
            goingBack = wantBack;
            turnRun = 0;
            if (plane) plane.classList.toggle('is-reverse', goingBack);
            track.classList.toggle('is-reverse', goingBack);
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

      var pr2 = plane ? plane.getBoundingClientRect() : null;
      stops.forEach(function (stop, i) {
        stop.classList.toggle('is-passed', tops[i] <= marker);
        if (!pr2) return;
        var sign = stop.querySelector('.story-sign');
        if (!sign) return;
        var sr = sign.getBoundingClientRect();
        stop.classList.toggle('is-under-plane',
          sr.bottom > pr2.top && sr.top < pr2.bottom);
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
