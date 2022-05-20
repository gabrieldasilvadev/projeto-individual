const $emailLogin = document.querySelector('#input_login_email');
const $senhaLogin = document.querySelector('#input_login_senha');
const $btnLogin = document.querySelector('#btn_login');

function login() {
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: $emailLogin.value,
      senha: $senhaLogin.value,
    }),
  })
    .then(() => {
      window.location.href = 'http://localhost:3000/pages/register-login.html';
    })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

$btnLogin.addEventListener('click', login);
