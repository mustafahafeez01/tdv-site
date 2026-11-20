// Click-to-play: load YouTube only after a reader activates the poster.
(function () {
  var playerApi;

  function loadPlayerApi() {
    if (window.YT && typeof window.YT.Player === 'function') {
      return Promise.resolve(window.YT);
    }
    if (!playerApi) {
      playerApi = new Promise(function (resolve, reject) {
        var previousReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () {
          resolve(window.YT);
          if (typeof previousReady === 'function') previousReady();
        };
        var script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    return playerApi;
  }

  function trackCompletion(frame, params) {
    loadPlayerApi().then(function (yt) {
      var complete = false;
      new yt.Player(frame, {
        events: {
          onStateChange: function (event) {
            if (event.data !== yt.PlayerState.ENDED || complete || typeof window.gtag !== 'function') return;
            complete = true;
            window.gtag('event', 'blog_video_complete', params);
          }
        }
      });
    }).catch(function () {
      // A blocked analytics dependency must not interfere with playback.
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-yt-id]');
    if (!button) return;
    var id = button.getAttribute('data-yt-id');
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;

    // The site's consent manager exposes gtag only while analytics consent is active.
    var consented = typeof window.gtag === 'function';
    var completion = consented && button.hasAttribute('data-yt-track-completion');
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
    if (completion) frame.src += '&enablejsapi=1&origin=' + encodeURIComponent(location.origin);
    frame.title = button.getAttribute('data-yt-title') || 'YouTube video';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.setAttribute('style', 'position:absolute;inset:0;width:100%;height:100%;border:0');
    button.replaceWith(frame);

    var params = { video_id: id, page_path: location.pathname };
    if (consented) window.gtag('event', 'video_play', params);
    if (completion) trackCompletion(frame, params);
  });
}());
