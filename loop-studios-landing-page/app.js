let hamburgerIcon = document.querySelector(`.section01-header-hamburger`);
let closeBtn = document.querySelector(`.closeBtn`);
let hamburgerMenu = document.querySelector(`.hamburger-menu`);

hamburgerIcon.addEventListener(`click`, () => {
  hamburgerMenu.style.display = `block`;
});

closeBtn.addEventListener(`click`, () => {
  hamburgerMenu.style.display = `none`;
});
