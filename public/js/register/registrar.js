const $form = document.querySelector('#form_register');
const $name = document.querySelector('#input_name');
const $email = document.querySelector('#input_email');
const $password = document.querySelector('#input_password');
const $confirmPassword = document.querySelector('#input_confirm_password');
const $btnRegister = document.querySelector('#btn_register');

function register() {
  const name = $name.value;
  const email = $email.value;
  const password = $password.value;
  const confirmPassword = $confirmPassword.value;

  if (
    name === '' ||
    email === '' ||
    password === '' ||
    confirmPassword === ''
  ) {
    alert('Preencha todos os campos');
    return;
  }

  if (password !== confirmPassword) {
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
      nome: 'gabriel',
      sobrenome: 'silva',
      email: 'aaaaaaaa4443@gmail.com',
      sexo: 'M',
      cep: '08140060',
      numero: '23',
      complemento: '3',
      senha: 'gabriel123',
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();
});

$btnRegister.addEventListener('click', register);
