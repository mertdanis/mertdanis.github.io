let inputArea = document.querySelector(`#inputArea`);
let addBtn = document.querySelector(`.add_btn`);
let decideNow = document.querySelector(`.kararbtn`);
let infoBtn = document.querySelector(`.info_btn`);
let cark = document.querySelector(`.cark`);
let optiondiv = document.querySelector(`.optiondiv `);
let optiondivall = document.querySelectorAll(`.optiondiv`);
let carkP = document.querySelector(`.cark-p`);
let data = [];
let optionEl = [];

let addOptionHandler = function () {
  let addOption = function () {
    if (inputArea.value != ``) {
      let createDiv = document.createElement(`div`);
      let createp = document.createElement(`p`);
      let delBtn = document.createElement(`p`);
      createDiv.classList.add(`div-flex`);
      createp.classList.add(`optiondiv--value`);
      delBtn.classList.add(`delBtn`);
      createp.textContent = inputArea.value;
      delBtn.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
      createp.appendChild(delBtn);
      createDiv.appendChild(createp);
      optiondiv.appendChild(createDiv);
      let optionvalue = inputArea.value;
      data.push(optionvalue);
      optionEl.push(createp);

      inputArea.value = "";

      delBtn.addEventListener(`click`, (e) => {
        let del = e.target.closest(`.optiondiv--value`);
        createDiv.removeChild(del);
        let delIndex = optionEl.indexOf(del);
        data.splice(delIndex, 1);
        optionEl.splice(delIndex, 1);
      });
    }
  };

  inputArea.addEventListener(`keydown`, (e) => {
    if (e.keyCode === 13) {
      addOption();
    }
  });

  addBtn.addEventListener(`click`, function () {
    if (inputArea.value == ``) {
      document.getElementById("inputArea").placeholder = "Not a valid option";
    } else if (inputArea.value != ``) {
      document.getElementById("inputArea").placeholder = "Input an option...";
    }

    addOption();
  });
};

let randomnumberGenerator = function () {
  return (randomN = Math.trunc(Math.random() * data.length));
};

let whellHandler = function () {
  randomnumberGenerator();
  carkP.textContent = data[randomN];
  data.splice(randomN, 1);

  optionEl[randomN].classList.add(`winner`);
  optionEl.splice(randomN, 1);

  loopFunc();
};

let decisionBtnFunc = function () {
  decideNow.addEventListener(`click`, function () {
    if (data.length > 0) {
      whellHandler();
    }
  });
};

let infoBtnFunc = function () {
  infoBtn.addEventListener(`mouseenter`, () => {
    let minOption = document.querySelector(`.min-option`);
    minOption.classList.add(`min-option--show`);
  });

  infoBtn.addEventListener(`mouseleave`, () => {
    let minOption = document.querySelector(`.min-option`);
    minOption.classList.remove(`min-option--show`);
  });
};

let loopFunc = function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  cark.style.backgroundColor = "#" + randomColor;
};

infoBtnFunc();
decisionBtnFunc();
addOptionHandler();
