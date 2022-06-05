const $postInput = document.getElementById('post-comment-input');
const $btnEnviar = document.getElementById('btn-enviar');

async function post() {
  const post = $postInput.value;

  if (post === '') {
    console.log('O campo esta vazio!');
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
      window.location.href = '/chat';
      return;
    }
    if (response.status === 500) {
      window.location.href = '/chat';
      return;
    }
  } catch (error) {
    if (error) alert(error);
    console.log(error);
    return;
  }
}
function showMessage(text, isMine = false) {
  document.getElementById('l-forum-chat').innerHTML += `
      <div class="message-row ${isMine ? 'mine' : 'theirs'}">
      ${
        isMine === true
          ? `<div class="bubble" >Você: ${text}</div> <br/> <br/>`
          : `<div class="bubble" >Outros: ${text}</div> <br/> <br/>`
      }
      </div>
    `;
}

const ws = new WebSocket('ws://localhost:8080');
ws.addEventListener('message', (ev) => {
  ev.data.text().then(showMessage);
});
document.querySelector('form').onsubmit = (ev) => {
  ev.preventDefault();
  const input = document.querySelector('input');
  ws.send(input.value);
  showMessage(input.value, true);
  input.value = '';
};
$btnEnviar.addEventListener('click', post);
