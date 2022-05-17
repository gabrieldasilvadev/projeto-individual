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

  if (
    name === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === ''
  ) {
    alert('Preencha todos os campos');
    return;
  }

  if (emailRegex.test(email) === false) {
    alert('Email invalido');
    return;
  }

  if (passwordRegex.test(senha) === false) {
    alert('Senha invalida');
    return;
  }
    alert('As senhas não conferem');
    return;
  }

  console.log(name, email, password, confirmPassword);

  return fetch('http://localhost:3000/users', {
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
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();
});

$btnRegister.addEventListener('click', register);
