let contentDice = document.querySelector(`.content-dice`);

let contentTitle = document.querySelector(`.content-title`);
let contentAdvice = document.querySelector(`.content-advice`);

let getAdvice = async () => {
  const data = await fetch("https://api.adviceslip.com/advice");

  const res = await data.json();

  let adviceAPI = res.slip;

  contentAdvice.textContent = `“${adviceAPI.advice}”`;
  contentTitle.textContent = `advice #${adviceAPI.id}`;
};

window.onload = () => {
  getAdvice();
};

contentDice.addEventListener(`click`, getAdvice);
