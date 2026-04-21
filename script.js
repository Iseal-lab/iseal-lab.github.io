document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const year = document.getElementById('year');

  // 1. 手机端汉堡菜单
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // 2. 修复 Members 下拉菜单 (点击切换)
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isVisible = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    // 点击页面其他地方关闭下拉菜单
    document.addEventListener('click', function () {
      dropdownMenu.style.display = 'none';
    });
  }

  // 3. 自动更新年份
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
