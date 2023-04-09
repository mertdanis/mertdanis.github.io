let slider = document.querySelector(`.slider-blue`);

let priceText = document.querySelectorAll(`.price`);

let priceOption = true; // true --> monthly ## false ==> annually
let check;

slider.addEventListener(`click`, () => {
  priceOption = !priceOption;
  priceText.forEach((price) => {
    let priceFix = price.textContent.replace(`$`, ``);

    if (priceOption == true) {
      let monthlyPrice = (priceFix / 10 - 0.01).toFixed(2);
      price.textContent = `$${monthlyPrice}`;
    } else if (priceOption == false) {
      let yearlyPrice = (priceFix * 10 + 0.09).toFixed(2);
      price.textContent = `$${yearlyPrice}`;
    }
  });
});
