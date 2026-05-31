function toggleFaq(item) {
  item.classList.toggle('open');
}

(function () {
  var btn  = document.getElementById('hamburger');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.textContent = open ? '✕' : '☰';
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  menu.querySelectorAll('.mobile-menu-item').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.textContent = '☰';
    });
  });
})();
