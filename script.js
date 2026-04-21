document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');
  const dropdowns = document.querySelectorAll('.has-dropdown');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  dropdowns.forEach(function (dropdown) {
    const button = dropdown.querySelector('.dropdown-toggle');
    if (!button) return;

    button.addEventListener('click', function (event) {
      if (window.innerWidth > 920) return;
      event.preventDefault();
      const isOpen = dropdown.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });

  document.addEventListener('click', function (event) {
    if (window.innerWidth > 920) return;
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
        const button = dropdown.querySelector('.dropdown-toggle');
        if (button) button.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 920) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove('open');
        const button = dropdown.querySelector('.dropdown-toggle');
        if (button) button.setAttribute('aria-expanded', 'false');
      });
      if (nav) nav.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
