document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const dropdowns = document.querySelectorAll('.has-dropdown');

  function closeAll() {
    dropdowns.forEach(function (item) {
      item.classList.remove('open');
      const button = item.querySelector('.dropdown-toggle');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach(function (item) {
    const button = item.querySelector('.dropdown-toggle');
    if (!button) return;

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      const isOpen = item.classList.contains('open');
      closeAll();
      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function () {
    closeAll();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeAll();
  });
});
