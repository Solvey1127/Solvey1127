文档.addEventListener('DOMContentLoaded', 函数 () {
  // 直接显示所有卡片，不做动画，避免透明
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'none';
  });

  // 导航高亮
  const current = location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav a');

  链接.forEach(链接 => {
    const href = 链接.getAttribute('href');
    if (href === 当前) {
      链接.classList.添加('active');
    }
  });
});
