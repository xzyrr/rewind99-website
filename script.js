const playerCounter = document.getElementById('players');

setInterval(() => {

  const randomPlayers = Math.floor(Math.random() * (100 - 60) + 60);

  playerCounter.innerText = randomPlayers;

}, 7000);


const title = document.querySelector('.hero-content h1');

setInterval(() => {

  title.style.opacity = Math.random() > 0.1 ? 1 : 0.7;

}, 100);
