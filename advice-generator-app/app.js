let contentDice = document.querySelector(`.content-dice`);

let contentTitle = document.querySelector(`.content-title`);
let contentAdvice = document.querySelector(`.content-advice`);

let getAdvice = () => {
  fetch(`https://api.adviceslip.com/advice
  `)
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      let adviceAPI = adviceData.slip;

      contentAdvice.textContent = `“${adviceAPI.advice}”`;
      contentTitle.textContent = `advice #${adviceAPI.id}`;
    });
};

window.onload = () => {
  getAdvice();
};

contentDice.addEventListener(`click`, getAdvice);
