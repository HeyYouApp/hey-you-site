// Product image gallery: clicking a thumbnail swaps the large image.
// Each .gallery__thumb carries data-src, data-w, data-h and data-alt.
(function () {
  var main = document.getElementById('gallery-main');
  var thumbs = document.querySelectorAll('.gallery__thumb');
  if (!main) return;
  thumbs.forEach(function (thumb, i) {
    thumb.setAttribute('aria-label', 'Show image ' + (i + 1) + ' of ' + thumbs.length);
    thumb.addEventListener('click', function () {
      main.src = thumb.dataset.src;
      main.width = thumb.dataset.w;
      main.height = thumb.dataset.h;
      main.alt = thumb.dataset.alt;
      thumbs.forEach(function (t) {
        t.setAttribute('aria-pressed', t === thumb ? 'true' : 'false');
      });
    });
  });

  // Arriving from a link like /store/postcards/#long-time shows that design first.
  var key = location.hash.slice(1);
  if (key) {
    thumbs.forEach(function (thumb) {
      if (thumb.dataset.design === key) thumb.click();
    });
  }
})();
