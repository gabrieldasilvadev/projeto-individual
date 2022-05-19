const $menuNav = document.querySelector('.menu-nav');
const $userMenu = document.querySelector('.user-menu');

document.addEventListener('click', (e) => {
  if (!$menuNav.contains(e.target) && !$userMenu.contains(e.target)) {
    $menuNav.classList.remove('menu-nav--active');
  }
});

function toggleMenu() {
  $menuNav.classList.toggle('menu-nav--active');
}

$userMenu.addEventListener('click', toggleMenu);
