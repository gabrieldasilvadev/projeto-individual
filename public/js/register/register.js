const $form = document.querySelector('#form_register');
const $name = document.querySelector('#input_name');
const $email = document.querySelector('#input_email');
const $password = document.querySelector('#input_password');
const $confirmPassword = document.querySelector('#input_confirm_password');
const $btnRegister = document.querySelector('#btn_register');
const $selectTeam = document.querySelector('#select_team');
const $selectUniverse = document.querySelector('#select_universe');
const $selectLevel = document.querySelector('#select_level');

async function register() {
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
    window.location.href = '/';
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
    Swal.fire({
      title: 'Preencha todos os campos',
      icon: 'warning',
      showConfirmButton: false,
      timer: 1300,
    });
    return;
  }

  if (emailRegex.test(email) === false) {
    Swal.fire({
      title: 'Email invalido',
      text: 'Por favor, digite um email valido',
      icon: 'warning',
      confirmButtonText: 'Ok',
    });
    return;
  }

  if (passwordRegex.test(senha) === false) {
    Swal.fire({
      title: 'Senha invalida',
      text: 'Sua senha deve conter 1 carácter maiúsculo e 1 carácter minusculo, 1 carácter especial e 1 numero',
      icon: 'warning',
      showConfirmButton: false,
      timer: 1300,
    });
    return;
  }

  if (senha !== confirmPassword) {
    Swal.fire({
      title: 'Senhas não conferem',
      text: 'Por favor, digite a mesma senha nos dois campos',
      icon: 'warning',
      showConfirmButton: false,
      timer: 1300,
    });
    return;
  }

  try {
    const response = await fetch('/api/register', {
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
    });
    if (response.status === 200) {
      Swal.fire({
        title: 'Cadastro realizado com sucesso',
        text: 'Você será redirecionado para a pagina de login',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(reloadPage, 2000);
      return;
    }
    if (response.status === 500) {
      Swal.fire({
        title: 'Erro ao cadastrar',
        text: 'Este email já está cadastrado',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  } catch (error) {
    if (error) {
      console.log(error);
      return;
    }
  }
}

$btnRegister.addEventListener('click', register);
