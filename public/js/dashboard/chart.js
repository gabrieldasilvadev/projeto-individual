async function getUserData() {
  const response = await fetch('/api/users');
  const user = await response.json();

  let twentyOnePilots = 0;
  let regionalAtTheBest = 0;
  let vessel = 0;
  let blurryface = 0;
  let trench = 0;
  let scaledAndIcy = 0;

  let teamTyler = 0;
  let teamJosh = 0;

  function countTeams() {
    for (let i = 0; i < user.length; i++) {
      if (user[i].time === 'tyler') {
        teamTyler++;
      } else if (user[i].time === 'josh') {
        teamJosh++;
      }
    }
  }
  countTeams();
  const arrayTeamsCounted = [teamTyler, teamJosh];

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

  const labelsUniverse = [
    'Twenty one Pilots',
    'Regional At The Best',
    'Vessel',
    'Blurryface',
    'Trench',
    'Scaled And Icy',
  ];

  const labelsTeam = ['Tyler', 'Josh'];

  const dataTeam = {
    labels: labelsTeam,
    datasets: [
      {
        label: 'Time',
        data: arrayTeamsCounted,
        backgroundColor: ['#df2a2a', '#FFFF00'],
      },
    ],
  };

  const configTeam = {
    type: 'bar',
    data: dataTeam,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'white',
          },
          position: 'right',
        },
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    },
  };

  const dataUniverse = {
    labels: labelsUniverse,
    datasets: [
      {
        label: 'Universes1',
        data: arrayUniversesCounted,
        borderColor: 'none',
        border: 'none',
        backgroundColor: [
          '#9CC83F',
          '#FC4206',
          '#D4DBD9',
          '#df2a2a',
          '#FFFF00',
          '#81C1CB',
        ],
      },
    ],
  };

  const configUniverse = {
    type: 'pie',
    data: dataUniverse,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'white',
          },
          position: 'left',
          title: {
            display: true,
            text: 'Universos',
            color: 'white',
            font: {
              size: '24',
            },
          },
        },
      },
    },
  };

  const ctxTeam = document.getElementById('teamChart').getContext('2d');
  const ctxUniverse = document.getElementById('universeChart').getContext('2d');
  const universeChat = new Chart(ctxUniverse, configUniverse);
  const teamChat = new Chart(ctxTeam, configTeam);
}
getUserData();
