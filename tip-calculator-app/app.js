let billInput = document.querySelector(`.bill-input`);
let nopInput = document.querySelector(`.nop-input`);
let selectedTipInput = document.querySelectorAll(`.tip-option-component`);

let tipamountText = document.querySelector(`.tip-amount-number`);
let totalamountText = document.querySelector(`.total-amount-number`);

let resetButton = document.querySelector(`.container-right-button`);

let customTipOption = document.querySelector(`.tip-option-component-custom`);

resetButton.addEventListener(`click`, () => {
  tipamountText.textContent = `$0.00`;
  totalamountText.textContent = `$0.00`;
  billInput.value = ``;
  nopInput.value = ``;
  resetButton.classList.remove(`valid`);
  customTipOption.value = ``;
  selectedTipInput.forEach((btn) => {
    btn.classList.remove(`valid`);
  });
});

let tipRate;

let handleTipClick = (event) => {
  selectedTipInput.forEach((btn) => {
    btn.classList.remove(`valid`);
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add(`valid`);
      tipRate = btn.textContent.replace(/%/g, "");
      calcTip();
    }
  });
};

let calcTip = () => {
  if (
    customTipOption.classList.contains(`valid`) &&
    customTipOption.value != 0
  ) {
    tipRate = customTipOption.value;
  }
  let tip = ((billInput.value / 100) * tipRate) / nopInput.value;
  let tipFix = tip.toFixed(2);

  let totalAmount =
    (Number(tip * nopInput.value) + Number(billInput.value)) / nopInput.value;
  let totalAmountFix = totalAmount.toFixed(2);
  if (tipFix > 0 && totalAmountFix > 0) {
    tipamountText.textContent = `$${tipFix}`;
    totalamountText.textContent = `$${totalAmountFix}`;
    resetButton.classList.add(`valid`);
  }

  console.log(tipRate);
};

billInput.addEventListener(`input`, calcTip);
nopInput.addEventListener(`input`, calcTip);
customTipOption.addEventListener(`input`, calcTip);
selectedTipInput.forEach((btn) => {
  btn.addEventListener(`click`, handleTipClick);
});
