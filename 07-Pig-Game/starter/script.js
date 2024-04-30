'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnRules = document.querySelector('.btn--rules');
const btnCloseModal = document.querySelector('.close--modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openRules = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeRules = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeRules();
  }
});

// Menampilkan peraturan permainan
btnRules.addEventListener('click', openRules);

btnCloseModal.addEventListener('click', closeRules);
overlay.addEventListener('click', closeRules);

let scores, currentScore, activePlayer, playing;
// Starting point
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll dadu
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Mendapatkan nilai dadu
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // 2. Memunculkan gambar dadu
    diceEl.classList.remove('hidden');
    // Memunculkan gambar sesuai dengan nilai dadu
    diceEl.src = `dice-${dice}.png`;

    // 3. Jika dadu = 1
    if (dice !== 1) {
      // menambahkan dadu ke current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Ganti pemain
      switchPlayer();
      // current0El.textContent = 0;
    }
  }
});

// Hold current score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Tambah current score ke active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
