const $emailLogin = document.querySelector('#input_login_email');
const $senhaLogin = document.querySelector('#input_login_senha');
const $btnLogin = document.querySelector('#btn_login');

function login() {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // validar email com regex
  if (emailRegex.test($emailLogin.value) === false) {
    alert('Email invalido');
    return;
  }

  if (passwordRegex.test($senhaLogin.value) === false) {
    alert(
      'Sua senha deve conter 1 caracter maisculo e 1 caracter minusculo, 1 caracter especial e 1 numero'
    );
    return;
  }

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

  fetch('/login', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

$btnLogin.addEventListener('click', login);
