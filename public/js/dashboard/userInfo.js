const $userName = document.getElementById('user_name');
const $userEmail = document.getElementById('user_email');
const $userUniverse = document.getElementById('user_universe');
const $userLevel = document.getElementById('user_level');
const $userTeam = document.getElementById('user_team');
const $teamFunction = document.getElementById('function_team');
const $userImg = document.querySelector('.user-image');

async function insertUserInfo() {
  const response = await fetch('/dashboard-get');
  const user = await response.json();
  const nameUser = user.nomeUsuario;
  const emailUser = user.dataUser[0].email;
  const universeUser = user.dataUser[0].universo;
  const levelUser = user.dataUser[0].nivel;
  const teamUser = user.dataUser[0].time;
  $userName.innerText = nameUser;
  $userEmail.innerText = emailUser;
  $userUniverse.innerText = universeUser;
  $userLevel.innerText = levelUser;
  $userTeam.innerText = teamUser;

  $userTeam.innerHTML === 'tyler'
    ? ($teamFunction.innerText = 'Vocalista')
    : ($teamFunction.innerText = 'Baterista');
}
async function getImage() {
  const response = await fetch('/getImage');
  const data = await response.json();
  $userImg.setAttribute('src', data);
}

getImage();
insertUserInfo();
