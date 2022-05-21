const $emailLogin = document.querySelector('#input_login_email');
const $senhaLogin = document.querySelector('#input_login_senha');
const $btnLogin = document.querySelector('#btn_login');
const $teste = document.querySelector('#teste');

async function login() {
  const email = $emailLogin.value;
  const senha = $senhaLogin.value;

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
      email,
      senha,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
        return;
      }
      console.log(data);
    });
}

$btnLogin.addEventListener('click', login);
