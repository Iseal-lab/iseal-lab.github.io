document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const dropdowns = document.querySelectorAll('.has-dropdown');

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    function openMenu() {
      dropdown.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
    }

    function closeMenu() {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }

    closeMenu();

    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      const isOpen = dropdown.classList.contains('open');

      document.querySelectorAll('.has-dropdown.open').forEach(function (openDropdown) {
        if (openDropdown !== dropdown) {
          const openToggle = openDropdown.querySelector('.dropdown-toggle');
          const openMenu = openDropdown.querySelector('.dropdown-menu');
          openDropdown.classList.remove('open');
          if (openToggle) openToggle.setAttribute('aria-expanded', 'false');
          if (openMenu) openMenu.hidden = true;
        }
      });

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    dropdown.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.has-dropdown.open').forEach(function (dropdown) {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');
      dropdown.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      if (menu) menu.hidden = true;
    });
  });
});
