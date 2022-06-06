const $tyler = document.getElementById('tyler_circle');
const $josh = document.getElementById('josh_circle');
const $name = document.getElementById('info_name');
const $role = document.getElementById('info_role');
const $age = document.getElementById('info_age');
const $mbti = document.getElementById('info_mbti');
const $spouse = document.getElementById('info_spouse');
const $children = document.getElementById('info_children');
const $infoMember = document.getElementById('info_member');
const $infoImage = document.getElementById('info_image');

$tyler.addEventListener('click', () => {
  $name.innerHTML = 'Tyler';
  $role.innerHTML = 'Vocalista';
  $age.innerHTML = '33';
  $mbti.innerHTML = 'INFP';
  $spouse.innerHTML = 'Jenna Joseph';
  $children.innerHTML = '2';
  $infoMember.innerHTML =
    'Tyler Robert Joseph é um cantor, compositor, multi-instrumentista, produtor de discos e rapper norte-americano. Tyler é o vocalista do duo musical Twenty One Pilots.';
  $infoImage.setAttribute('src', '../../assets/img/members/mask-tyler.png');
});
$josh.addEventListener('click', () => {
  $name.innerHTML = 'Josh Dun';
  $role.innerHTML = 'Baterista';
  $age.innerHTML = '33';
  $mbti.innerHTML = 'ISFP';
  $spouse.innerHTML = 'Debby Ryan';
  $children.innerHTML = '0';
  $infoMember.innerHTML =
    'Joshua William "Josh" Dun é um músico americano. Ele é o baterista e percussionista do duo musical Twenty One Pilots.';
  $infoImage.setAttribute('src', '../../assets/img/members/mask-josh.png');
});
