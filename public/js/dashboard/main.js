async function getUserData() {
  const response = await fetch('/api/users');
  const user = await response.json();

  let twentyOnePilots = 0;
  let regionalAtTheBest = 0;
  let vessel = 0;
  let blurryface = 0;
  let trench = 0;
  let scaledAndIcy = 0;

  function countUniverses() {
    user.map((user) => {
       user.universo === 'twentyOnePilots'
        ? twentyOnePilots++
        : user.universo === 'regionalAtTheBest'
        ? regionalAtTheBest++
        : user.universo === 'vessel'
        ? vessel++
        : user.universo === 'blurryface'
        ? blurryface++
        : user.universo === 'trench'
        ? trench++
        : user.universo === 'scaledAndIcy'
        ? scaledAndIcy++
        : null;
    });
  }
  countUniverses();
  const arrayUniversesCounted = [
    twentyOnePilots,
    regionalAtTheBest,
    vessel,
    blurryface,
    trench,
    scaledAndIcy,
  ];
  console.log(arrayUniversesCounted);
}
getUserData();
