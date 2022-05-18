const $form = document.querySelector('#form_register');
const $name = document.querySelector('#input_name');
const $email = document.querySelector('#input_email');
const $password = document.querySelector('#input_password');
const $confirmPassword = document.querySelector('#input_confirm_password');
const $btnRegister = document.querySelector('#btn_register');
const $selectTeam = document.querySelector('#select_team');
const $selectUniverse = document.querySelector('#select_universe');
const $selectLevel = document.querySelector('#select_level');

function register() {
  const nome = $name.value.toLowerCase();
  const email = $email.value.toLowerCase();
  const senha = $password.value;
  const confirmPassword = $confirmPassword.value;
  const time = $selectTeam.value;
  const universo = $selectUniverse.value;
  const nivel = $selectLevel.value;

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function reloadPage() {
    window.location.href = 'http://localhost:3000/pages/register-login.html';
  }

  if (
    nome === '' ||
    email === '' ||
    senha === '' ||
    confirmPassword === '' ||
    time === '' ||
    universo === '' ||
    nivel === ''
  ) {
    alert('Preencha todos os campos');
    return;
  }

  if (emailRegex.test(email) === false) {
    alert('Email invalido');
    return;
  }

  if (passwordRegex.test(senha) === false) {
    alert(
      'Sua senha deve conter 1 caracter maisculo e 1 caracter minusculo, 1 caracter especial e 1 numero'
    );
    return;
  }

  if (senha !== confirmPassword) {
    alert('As senhas não conferem');
    return;
  }

  return fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      email,
      time,
      nivel,
      universo,
      senha,
    }),
  })
    .then(() => {
      alert('Usuario cadastrado com sucesso');
      reloadPage();
    })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

$btnRegister.addEventListener('click', register);
