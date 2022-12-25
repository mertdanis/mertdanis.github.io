let inputArea = document.querySelector(`#inputArea`);
let addBtn = document.querySelector(`.add_btn`);
let decideNow = document.querySelector(`.kararbtn`);
let infoBtn = document.querySelector(`.info_btn`);
let cark = document.querySelector(`.cark`);
let optiondiv = document.querySelector(`.optiondiv `);

let optiondivall = document.querySelectorAll(`.optiondiv`);

let carkP = document.querySelector(`.cark-p`);

let data = [];
let validrandomNumbers = [];

let addOptionHandler = function () {
  let addOption = function () {
    if (inputArea.value != ``) {
      let createp = document.createElement(`p`);
      createp.classList.add(`optiondiv--value`);
      createp.textContent = inputArea.value;
      optiondiv.appendChild(createp);
      let optionvalue = inputArea.value;
      data.push(optionvalue);
      inputArea.value = "";
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
  validrandomNumbers.push(randomnumberGenerator());
  carkP.textContent = data[randomN];
  data.splice(randomN, 1);

  let optionNode = document.querySelectorAll(`.optiondiv--value`);
  // let optionCheck = optionNode.item(randomN);
  let optionNodeArray = Array.prototype.slice.call(optionNode);
  console.log(optionNodeArray);
  console.log(optionNodeArray.splice(randomN, 1));
  let check = optionNodeArray.splice(randomN, 1);

  console.log(check);

  check.classList.add(`winner`);

  // console.log(slice);

  // console.log(optionNodeArray);

  loopFunc();
};

let decisionBtnFunc = function () {
  let click = 0;
  decideNow.addEventListener(`click`, function () {
    if (data.length > 1) {
      whellHandler();
      console.log(randomN);
    } else if ((data.length = 1)) {
      click++;
      carkP.textContent = data[0];

      if (click < 1) {
        loopFunc();
      }
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
