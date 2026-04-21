document.addEventListener('DOMContentLoaded', function () {
  // 只保留自动更新页脚年份的功能，其他杂七杂八的菜单控制全删掉
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
