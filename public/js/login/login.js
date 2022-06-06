const $emailLogin = document.querySelector('#input_login_email');
const $senhaLogin = document.querySelector('#input_login_senha');
const $btnLogin = document.querySelector('#btn_login');

async function login() {
  const email = $emailLogin.value;
  const senha = $senhaLogin.value;

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // validar email com regex
  if (emailRegex.test($emailLogin.value) === false) {
    Swal.fire({
      title: 'Erro ao realizar o login',
      text: 'Email invalido!',
      icon: 'warning',
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }

  if (passwordRegex.test($senhaLogin.value) === false) {
    Swal.fire({
      title: 'Erro ao realizar o login',
      text: 'Sua senha deve conter 1 carácter maiúsculo e 1 carácter minusculo, 1 carácter especial e 1 numero',
      icon: 'warning',
      showConfirmButton: false,
      timer: 2000,
    });

    return;
  }

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    });

    if (response.status === 200) {
      Swal.fire({
        title: 'Login realizado com sucesso',
        text: 'Você será redirecionado para o Chat!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
      setInterval(() => {
        window.location.href = '/chat';
      }, 2000);

      return;
    }

    if (response.status === 500) {
      Swal.fire({
        title: 'Erro ao realizar o login',
        text: 'Email ou senha incorretos',
        icon: 'warning',
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

$btnLogin.addEventListener('click', login);
