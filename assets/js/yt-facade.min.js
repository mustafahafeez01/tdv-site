// Click-to-play YouTube embed. Nothing loads from YouTube until the reader presses play;
// then the privacy-enhanced youtube-nocookie.com player replaces the preview image.
document.addEventListener('click', function (e) {
  var btn = e.target.closest('[data-yt-id]');
  if (!btn) return;
  var id = btn.getAttribute('data-yt-id');
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
  var frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
  frame.title = btn.getAttribute('data-yt-title') || 'YouTube video';
  frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.setAttribute('style', 'position:absolute;inset:0;width:100%;height:100%;border:0');
  btn.replaceWith(frame);
  // Count plays only when the visitor has accepted analytics (gtag exists only after consent).
  if (typeof window.gtag === 'function') window.gtag('event', 'video_play', { video_id: id, page_path: location.pathname });
});
