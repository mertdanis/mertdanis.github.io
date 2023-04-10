let hamburger = document.querySelector(`.header-hamburger`);

let hamburgerMenu = document.querySelector(`.header-mobile-menu-container`);

let isOpen = false;

hamburger.addEventListener(`click`, () => {
  isOpen = !isOpen;

  if (isOpen) {
    hamburgerMenu.style.marginLeft = `0%`;
    document.getElementById(`hamburgerIcon`).src =
      "/blogr-landing-page/imgs/icon-close.svg";
  } else {
    hamburgerMenu.style.marginLeft = `-100%`;
    document.getElementById(`hamburgerIcon`).src =
      "/blogr-landing-page/imgs/icon-hamburger.svg";
  }
});
