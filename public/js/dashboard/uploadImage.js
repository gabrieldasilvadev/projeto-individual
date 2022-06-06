const $userImage = document.querySelector('.user-image');
const $emailUser = document.getElementById('user_email');

$userImage.addEventListener('click', () => {
  Swal.fire({
    title: 'Insira seu nome de usuário do GitHub',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'Vamos lá',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `avatar do(a) ${result.value.login}`,
        imageUrl: result.value.avatar_url,
      });
      $userImage.setAttribute('src', result.value.avatar_url);

      fetch(`/upload-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: result.value.avatar_url,
          email: $emailUser.innerHTML,
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
    }
  });
});
