const header = document.getElementById('header');

window.onscroll = () => {
  window.pageYOffset > 100
    ? (header.style.backgroundColor = 'var(--ui-black-02)') &&
      (header.style.transition = 'all 0.4s ease-in-out') &&
      (header.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)')
    : (header.style.backgroundColor = 'transparent') &&
      (header.style.boxShadow = 'none');
};

const $btnAuth = document.getElementById('header_btn_auth');
const $headerNavItem = document.getElementById('header_nav_item');
async function userLogged() {
  const response = await fetch('/dashboard-get');
  const data = await response.json();
  if (data.nomeUsuario) {
    $headerNavItem.style.display = 'block';
    $btnAuth.style.display = 'none';
  }
}

userLogged();
