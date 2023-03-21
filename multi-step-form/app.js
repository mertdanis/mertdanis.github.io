let nextBtn = document.querySelector(`.section__right-bNext`);
let backBtn = document.querySelector(`.section__right-bBack`);
let sectionRight = document.querySelector(`.section__right`);
let stepNumbers = document.querySelectorAll(`.section__left--step---number`);
let step1Btn = document.querySelector(`#step1Btn`);
let currentStep = 1;
let stepSection = document.querySelector(`.section__left--step---number`);
let steps = document.querySelector(`.step_${currentStep}`);

let fullName = document.querySelector(`#form__name`);
let email = document.querySelector(`#form__email`);
let tel = document.querySelector(`#form__tel`);

///////////////////////////////////////////////////////////////
/// contents

let step_2_Content = `   <div class="step_2">
<h3 class="section__right--title">Select your plan</h3>
<p class="section__right--desc">
  You have the option of monthly or yearly billing.
</p>

<div class="section__right--options">
  <div class="section__right--option">
    <img
      src="/multi-step-form/imgs/assets/images/icon-arcade.svg"
      alt=""
      class="section__right--option-img"
    />
    <div class="section__right--option--content">
      <p class="section__right--option-title">Arcade</p>
      <p class="section__right--option-price">$9/mo</p>
      <p class="section__right--option-discount">2 months free</p>
    </div>
  </div>
  <div class="section__right--option option2">
    <img
      src="/multi-step-form/imgs/assets/images/icon-advanced.svg"
      alt=""
      class="section__right--option-img"
    />
    <div class="section__right--option--content">
      <p class="section__right--option-title">Advanced</p>
      <p class="section__right--option-price">$12/mo</p>
      <p class="section__right--option-discount">2 months free</p>
    </div>
  </div>
  <div class="section__right--option option3">
    <img
      src="/multi-step-form/imgs/assets/images/icon-pro.svg"
      alt=""
      class="section__right--option-img"
    />
    <div class="section__right--option--content">
      <p class="section__right--option-title">Pro</p>
      <p class="section__right--option-price">$15/mo</p>
      <p class="section__right--option-discount">2 months free</p>
    </div>
  </div>
</div>
<div class="section__right-month-year-option">
  <p id="monthly" class="section__right--activated">Monthly</p>
  <label class="switch">
    <input type="checkbox">
    <span class="slider round" id="checkBox"></span>
  </label>
  <p id="yearly">Yearly</p>
</div>

</div>

`;

let step_3_Content = `<div class="step_3">
<h3 class="section__right--title">Pick add-ons</h3>
<p class="section__right--desc">
  Add-ons help enhance your gaming experience.
</p>

<div class="section__right-pick--options">
  <div class="section__right-pick--option id="option2">
    <input
      type="checkbox"
      name="online"
      id="online"
      class="section__right-pick--option---checkbox"
    />
    <div class="section__right-pick--option-content">
      <p class="section__right-pick--option---title">Online service</p>
      <p class="section__right-pick--option---desc">
        Access to multiplayer games
      </p>
    </div>
    <p class="section__right-pick--option---price">+$1/mo</p>
  </div>
  <div class="section__right-pick--option option2">
    <input
      type="checkbox"
      name="online"
      id="online"
      class="section__right-pick--option---checkbox"
    />
    <div class="section__right-pick--option-content">
      <p class="section__right-pick--option---title">Larger storage</p>
      <p class="section__right-pick--option---desc">
        Extra 1TB of cloud save
      </p>
    </div>
    <p class="section__right-pick--option---price">+$2/mo</p>
  </div>
  <div class="section__right-pick--option id="option3">
    <input
      type="checkbox"
      name="online"
      id="online"
      class="section__right-pick--option---checkbox"
    />
    <div class="section__right-pick--option-content">
      <p class="section__right-pick--option---title">Customizable profile</p>
      <p class="section__right-pick--option---desc">
        Custom theme on your profile
      </p>
    </div>
    <p class="section__right-pick--option---price">+$2/mo</p>
  </div>
</div>

</div>

`;

let step_4_Content = `<div class="step_4">
<h3 class="section__right--title">Finishing up</h3>
<p class="section__right--desc">
  Double-check everything looks OK before confirming.
</p>

<div class="section__right-summary">
  <div class="section__right-summary--sec1">
    <p class="section__right-summary--title">
      Arcade
      <span class="section__right-summary--title-option">(Monthly)</span>
    </p>
    <p class="section__right-summary--change">Change</p>
    <p class="section__right-summary--price">$9/mo</p>
  </div>
  <div class="section__right-summary--sec2">
    <div class="section__right-summary--onlineservice">
      <p>Online service</p>
      <p>+$1/mo</p>
    </div>
    <div class="section__right-summary--larger storage">
      <p>Larger stroge</p>
      <p>+$2/mo</p>
    </div>
  </div>
  <div class="section__right-summary--sec3">
    <p>Total (per month)</p>
    <p class="section__right-summary--sec3---price">+$12/mo</p>
  </div>

</div>
</div>

`;

let step_5_Content = `    <div class="step5">
<img src="/multi-step-form/imgs/assets/images/icon-thank-you.svg" alt="" class="step5__img">
<h3 class="step5__title">Thank you!</h3>
<p class="step5__desc">
  Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
</p>
</div>`;

///////////////////////////////////////////////////////////////
/// functions

let inputChecker = function () {
  let emails = [`outlook.com`, `gmail.com`, `hotmail.com`];

  fullName.addEventListener(`mouseleave`, () => {
    if (fullName.value.length > 3) {
      fullName.classList.add(`section__right--form---input--valid`);
    } else {
      fullName.classList.remove(`section__right--form---input--valid`);
      fullName.classList.add(`section__right--form---input--unvalid`);
    }
  });

  email.addEventListener(`mouseleave`, () => {
    if (email.value.includes(`@`) && email.value[0] != `@`) {
      email.classList.add(`section__right--form---input--valid`);
    } else {
      email.classList.remove(`section__right--form---input--valid`);
      email.classList.add(`section__right--form---input--unvalid`);
    }
  });

  tel.addEventListener(`mouseleave`, () => {
    if (tel.value.length == 10) {
      tel.classList.add(`section__right--form---input--valid`);
    } else {
      tel.classList.remove(`section__right--form---input--valid`);
      tel.classList.add(`section__right--form---input--unvalid`);
    }
  });
};

let btnsHandler = function () {
  {
    nextBtn.addEventListener(`click`, () => {
      if (currentStep == 1) {
        currentStep++;

        let deactiveStep = document.querySelector(
          `#section__left-number--${currentStep - 1}`
        );

        deactiveStep.classList.remove(`section__left--step---number_active`);

        let activeStep = document.querySelector(
          `#section__left-number--${currentStep}`
        );

        activeStep.classList.add(`section__left--step---number_active`);

        sectionRight.insertAdjacentHTML("afterbegin", step_2_Content);
        document
          .querySelector(`.step_${currentStep - 1}`)
          .classList.add(`hidden`);

        let checkBox = document.querySelector(`#checkBox`);
        let discount = document.querySelector(
          `.section__right--option-discount`
        );
        checkBox.addEventListener(`click`, () => {
          let step2Prices = document.querySelectorAll(
            `.section__right--option-price`
          );

          step2Prices.forEach(function (price) {
            let priceText = price.textContent;
            let priceCalc = priceText.replace(/\D/g, "");
            console.log(priceCalc);

            let yearlyPrice = priceCalc * 10;
            let monthlyPrice = priceCalc / 10;

            console.log(yearlyPrice);
            console.log(monthlyPrice);

            if (monthly.classList.contains(`section__right--activated`)) {
              yearly.classList.add(`section__right--activated`);
              monthly.classList.remove(`section__right--activated`);
              price.textContent = `$${yearlyPrice}/yr`;
            } else {
              monthly.classList.add(`section__right--activated`);
              yearly.classList.remove(`section__right--activated`);
              price.textContent = `$${monthlyPrice}/mo`;
            }
          });
        });

        let monthly = document.querySelector(`#monthly`);
        let yearly = document.querySelector(`#yearly`);

        let options = document.querySelectorAll(`.section__right--option`);

        options.forEach(function (currentVal) {
          currentVal.addEventListener(`click`, () => {
            currentVal.classList.toggle(`section__right--option--check`);
          });
        });
      } else if (currentStep == 2) {
        currentStep++;

        deactiveStep = document.querySelector(
          `#section__left-number--${currentStep - 1}`
        );
        deactiveStep.classList.remove(`section__left--step---number_active`);
        activeStep = document.querySelector(
          `#section__left-number--${currentStep}`
        );
        activeStep.classList.add(`section__left--step---number_active`);

        sectionRight.insertAdjacentHTML("afterbegin", step_3_Content);
        document
          .querySelector(`.step_${currentStep - 1}`)
          .classList.add(`hidden`);
      } else if (currentStep == 3) {
        currentStep++;
        document.querySelector(`.step_${currentStep}`);
        deactiveStep = document.querySelector(
          `#section__left-number--${currentStep - 1}`
        );

        deactiveStep.classList.remove(`section__left--step---number_active`);

        activeStep = document.querySelector(
          `#section__left-number--${currentStep}`
        );

        activeStep.classList.add(`section__left--step---number_active`);

        sectionRight.insertAdjacentHTML("afterbegin", step_4_Content);
        document
          .querySelector(`.step_${currentStep - 1}`)
          .classList.add(`hidden`);
      } else if (currentStep == 4) {
        currentStep++;
        sectionRight.insertAdjacentHTML("afterbegin", step_5_Content);
        document
          .querySelector(`.step_${currentStep - 1}`)
          .classList.add(`hidden`);
        sectionRight.classList.add(`section__right--step5`);
        backBtn.style.display = `none`;
        nextBtn.style.display = `none`;
      }
    });
  }

  backBtn.addEventListener(`click`, () => {
    if (currentStep > 1) {
      currentStep--;

      let deactiveStep = document.querySelector(
        `#section__left-number--${currentStep + 1}`
      );

      deactiveStep.classList.remove(`section__left--step---number_active`);

      let activeStep = document.querySelector(
        `#section__left-number--${currentStep}`
      );

      activeStep.classList.add(`section__left--step---number_active`);
      document
        .querySelector(`.step_${currentStep + 1}`)
        .classList.add(`hidden`);
      document.querySelector(`.step_${currentStep}`).classList.remove(`hidden`);
    }
  });
};

btnsHandler();
setInterval(inputChecker, 1000);
