const computerScore = document.querySelector(`.computer__score`);
const userScore = document.querySelector(`.user__score`);

const userBtns = document.querySelectorAll(`.user-btn`);

const winImage = document.querySelector(`.win-img`);
const loseImage = document.querySelector(`.lose-img`);
const heroTitle = document.querySelector(`.hero__title`);

const audio = new Audio(`./audio/Bazinga_Sound_Effect_128kbps.mp3`);
const winAudio = new Audio(`./audio/Winning_Sound_Effect_128kbps.mp3`);

const resetBtn = document.querySelector(`.reset__btn`);

let yourScore = 0;
let sheldonScore = 0;

// GENERATE COMPUTER CHOICE
function getComputerChoice() {
  const choiceArray = [`r`, `p`, `s`, `l`, `spock`];
  const random = Math.floor(Math.random() * choiceArray.length);
  let computerChoice = choiceArray[random];
  console.log(computerChoice);
  return computerChoice;
}

function win() {
  yourScore++;
  userScore.textContent = yourScore;
  userScore.style.color = 'Green';
  computerScore.style.color = 'Red';
  winImage.style.display = 'Block';
  loseImage.style.display = 'none';
  heroTitle.textContent = `YOU WON`;
  heroTitle.style.color = 'Green';
  winAudio.play(`./audio/Winning_Sound_Effect_128kbps.mp3`);
}
function lose() {
  sheldonScore++;
  computerScore.textContent = sheldonScore;
  computerScore.style.color = 'Green';
  userScore.style.color = 'Red';
  loseImage.style.display = 'Block';
  winImage.style.display = 'None';
  heroTitle.textContent = `SHELDON WON`;
  heroTitle.style.color = 'Red';
  audio.play(`./audio/Bazinga_Sound_Effect_128kbps.mp3`);
}
function tie() {
  heroTitle.textContent = `It's a TIE. Try Again`;
  heroTitle.style.color = 'Gold';
  winImage.style.display = 'None';
  loseImage.style.display = 'none';
  console.log(`TIE`);
}

// GAME FUNCTION
function game(userChoice, computerChoice) {
  switch (userChoice + computerChoice) {
    // WIN
    case `sp`:
    case `pr`:
    case `rl`:
    case `lspock`:
    case `spocks`:
    case `sl`:
    case `lp`:
    case `pspock`:
    case `spockr`:
    case `rs`:
      console.log(`WIN`);
      win();
      break;
    // LOSE
    case `ps`:
    case `rp`:
    case `lr`:
    case `spockl`:
    case `sspock`:
    case `ls`:
    case `pl`:
    case `spockp`:
    case `rspock`:
    case `sr`:
      console.log(`LOSE`);
      lose();
      break;
    // TIE
    case `pp`:
    case `rr`:
    case `ll`:
    case `spockspock`:
    case `ss`:
      console.log(`TIE`);
      tie();
      break;
  }
}

// CLICK USER INTERACTION
userBtns.forEach((btn) => {
  btn.addEventListener(`click`, function () {
    // HUMAN CHOICE
    let userChoice = btn.id;
    console.log(userChoice);
    // COMPUTER CHOICE
    // getComputerChoice();
    game(userChoice, getComputerChoice());
  });
});
