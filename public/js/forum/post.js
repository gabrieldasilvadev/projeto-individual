const $postInput = document.getElementById('post-comment-input');
const $btnEnviar = document.getElementById('btn-enviar');

async function post() {
  const post = $postInput.value;

  if (post === '') {
    alert('O campo esta vazio!');
    return;
  }

  try {
    const response = await fetch('/api/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post,
      }),
    });
    $postInput.value = '';
    if (response.ok === 200) {
      alert('Post enviado!');
      window.location.href = '/forum';
      return;
    }
    if (response.status === 500) {
      alert('Erro ao realizar o post!');
      window.location.href = '/forum';
      return;
    }
  } catch (error) {
    if (error) alert(error);
    console.log(error);
    return;
  }
}

$btnEnviar.addEventListener('click', post);
