const $emailLogin = document.querySelector('#input_login_email');
const $senhaLogin = document.querySelector('#input_login_senha');
const $btnLogin = document.querySelector('#btn_login');

function login() {
  fetch('http://localhost:3000/login', {
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
      alert('Usuario logado com sucesso!');
      window.location.href = 'http://localhost:3000/';
    })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

$btnLogin.addEventListener('click', login);
