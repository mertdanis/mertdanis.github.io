let player1 = document.querySelector(`.player1id`);
let player2 = document.querySelector(`.player2id`);

let score1 = document.querySelector(`#currentscore1`);
let score2 = document.querySelector(`#currentscore2`);

let startn1 = document.querySelector(`.startN1`);
let startn2 = document.querySelector(`.startN2`);

let totalsc1 = document.querySelector(`.totalv`);
let totalsc2 = document.querySelector(`.totalv2`);

// buttons

let reset = document.querySelector("#reset");
let roll = document.querySelector(`#roll`);
let hold = document.querySelector(`#hold`);
let rulesbtn = document.querySelector(`#rulesbtn`);
let rulesdivcl = document.querySelector(`#rulesdivcl`);

let turnPlus = document.querySelector(`#turnplus`);

let section = document.querySelector(`.section`);
let rulesDiv = document.querySelector(`.rules`);

let currentplayer = [score1, score2];

let total1 = [];
let total2 = [];

// player names

// let prompt1 = prompt(`player 1 adini gir`)
// let prompt2 = prompt(`player 2 adini gir`)

// let selectName = function(p1, p2) {

//   p1.textContent = prompt1
//   p2.textContent = prompt2

//   if (!prompt1 ) {
//     player1.textContent = `player 1`
//   } if (!prompt2) {
//     player2.textContent = `player 2`
//   }
// }

// selectName(player1, player2)

let randomFunc = function () {
  return (random = Math.trunc(Math.random() * 6) + 1);
};

let playerSwitch = function (add, remove) {
  add.classList.add(`active`);
  remove.classList.remove(`active`);
};

let calcTime = function () {
  if (Number(startn1.textContent) + Number(startn2.textContent) >= 5) {
    resetGame();
    startn1.textContent = 0;
    startn2.textContent = 0;
    turnPlus.textContent = 1;
  } else if (Number(startn1.textContent) + Number(startn2.textContent) == 0) {
  }
};

setInterval(calcTime, 2000);

let resetGame = function () {
  totalsc2.textContent = ``;
  totalsc1.textContent = ``;
  score1.textContent = ``;
  score2.textContent = ``;
  total1.length = 0;
  total2.length = 0;

  playerSwitch(player1, player2);
};

reset.addEventListener("click", function () {
  startn1.textContent = 0;
  startn2.textContent = 0;
  turnPlus.textContent = 1;
  resetGame();
});

let activePlayer = function (p1, p2) {
  roll.addEventListener(`click`, function () {
    // player 1 active  //

    if (p1.classList.contains(`active`)) {
      randomFunc();
      let result1 = (score1.textContent = randomFunc());
      total1.push(result1);

      let sum = 0;
      for (let i = 0; i < total1.length; i++) {
        sum = sum + total1[i];
      }
      totalsc1.textContent = sum;
      let totalNumber1 = Number(totalsc1.textContent);
    }

    if (score1.textContent == 1) {
      totalsc1.textContent = 0;
      total1.length = 0;

      playerSwitch(player2, player1);

      if (score2.textContent > 1) {
        turnPlus.textContent++;

        playerSwitch(player1, player2);

        startn2.textContent++;
        resetGame();
      }
    }

    {
    }

    if (score2.textContent == 1) {
      playerSwitch(player1, player2);

      total2.length = 0;
      total1.length = 0;
      totalsc2.textContent = 0;

      if (totalsc1.textContent < totalsc2.textContent) {
        totalsc1.textContent = ``;
        startn2.textContent++;
        turnPlus.textContent++;
      } else if (totalsc2.textContent < totalsc1.textContent) {
        totalsc2.textContent = ``;
        startn1.textContent++;
        turnPlus.textContent++;
      }
    }

    // player 2 active  //
    else if (p2.classList.contains(`active`)) {
      score2.textContent = randomFunc();
      randomFunc();
      let result2 = (score2.textContent = randomFunc());
      total2.push(result2);

      let sum = 0;
      for (let i = 0; i < total2.length; i++) {
        sum = sum + total2[i];
      }
      totalsc2.textContent = sum;

      if (score1.textContent == 1 && score2.textContent == 1) {
        turnPlus.textContent++;

        resetGame();
      }

      if (score2.textContent == 1 && score1.textContent != 1) {
        score2.textContent = 1;

        playerSwitch(player1, player2);

        total2.length = 0;
        total1.length = 0;

        startn1.textContent++;
        turnPlus.textContent++;

        resetGame();

        sum = ``;
      }
    }
  });

  // hold button

  hold.addEventListener(`click`, function () {
    if (p1.classList.contains(`active`)) {
      if (score1.textContent == ``) {
        p2.classList.remove(`active`);
      }

      playerSwitch(player2, player1);
    } else if (p2.classList.contains(`active`)) {
      playerSwitch(player1, player2);

      if (totalsc1.textContent > totalsc2.textContent) {
        startn1.textContent++;
        turnPlus.textContent++;

        resetGame();
      } else if (totalsc2.textContent > totalsc1.textContent) {
        startn2.textContent++;
        turnPlus.textContent++;

        resetGame();
      } else if (
        totalsc2.textContent == totalsc1.textContent &&
        score1.textContent != 0 &&
        score2.textContent != 0
      ) {
        turnPlus.textContent++;
      }
    }
  });
};

rulesbtn.addEventListener(`click`, function () {
  rulesDiv.classList.add(`show`);
  section.classList.add(`opactiy01`);
  roll.classList.add(`hidden`);
  hold.classList.add(`hidden`);
  reset.classList.add(`hidden`);
  rulesbtn.classList.add(`hidden`);
});

rulesdivcl.addEventListener(`click`, function () {
  rulesDiv.classList.remove(`show`);
  section.classList.remove(`opactiy01`);

  roll.classList.remove(`hidden`);
  hold.classList.remove(`hidden`);
  reset.classList.remove(`hidden`);
  rulesbtn.classList.remove(`hidden`);
});

activePlayer(player1, player2);
