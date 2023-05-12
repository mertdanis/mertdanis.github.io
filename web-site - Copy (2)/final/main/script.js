const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const searchbtn = document.querySelector(`#searchBtn`);
const lglabel = document.querySelector(`.lpreference`);

const dropdown = document.querySelector("#dropdown1");
const dropdownMenu = document.querySelector(".dropdown_Menu");
const dropdowntext = document.querySelectorAll(`.dropdowntext`);

const menu = document.querySelector(`.menu`);
const textArea = document.querySelector(`.text_area`);

let searchBtn = document.querySelector(`#searchBtn`);
let dropdownMore = document.querySelector(`#dropdownmore`);

let footer = document.querySelector("#footercontainer");
let menuUL = document.querySelector(".menu");
let footerImp = document.querySelector(".footer-imp");
let header = document.querySelector(".header");
let more = document.querySelector("#dropdownmore");

let bg = false;
let themeSwitch = document.querySelector(".light");

themeSwitch.addEventListener("click", () => {
  bg = !bg;

  if (bg == false) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
});

searchbtn.addEventListener(`click`, function () {
  textArea.classList.toggle(`show`);
});

more.addEventListener("click", () => {
  dropdownMenu.classList.toggle(`active`);
});

window.onscroll = function () {
  if (window.pageYOffset >= header.offsetTop + 200) {
    menu.classList.add(`sticky`);
    dropdownMore.classList.add(`none`);
    searchBtn.classList.add(`none`);
  } else {
    menu.classList.remove(`sticky`);
    dropdownMore.classList.remove(`none`);
    searchBtn.classList.remove(`none`);
    dropdownMenu.classList.remove(`active`);
  }
};

lglabel.addEventListener(`click`, function (e) {
  let langhideDiv = document.querySelector(`.langhide`);
  langhideDiv.classList.toggle(`show`);
});

const handleFade = function (e) {
  if (e.target.classList.contains(`dropdowntext`)) {
    const link = e.target;
    const closestLink = link.closest(`.menu`).querySelectorAll(`.dropdowntext`);

    closestLink.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
menu.addEventListener(`mouseover`, handleFade.bind(0.5));
menu.addEventListener(`mouseout`, handleFade.bind(1));
