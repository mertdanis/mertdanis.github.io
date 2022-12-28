let nextBtn = document.querySelector(`.section__right-bNext`);
let backBtn = document.querySelector(`.section__right-bBack`);
let sectionRight = document.querySelector(`.section__right`);
let stepNumbers = document.querySelectorAll(`.section__left--step---number`);
let step1Btn = document.querySelector(`#step1Btn`);
let currentStep = 1;
let stepSection = document.querySelector(`.section__left--step---number`);
let steps = document.querySelector(`.step_${currentStep}`);
let checkBox = document.querySelector(`#checkbox`);
///////////////////////////////////////////////////////////////
/// contents

let step_2_Content = ` <div class="step_2">
<h3 class="section__right--title">Select your plan</h3>
<p class="section__right--desc">
  You have the option of monthly or yearly billing.
</p>

<div class="section__right--options">
  <div class="section__right--option" id="option1">
    <img
      src="/multi-step-form/imgs/assets/images/icon-arcade.svg"
      alt=""
      class="section__right--option-img"
    />
    <div class="section__right--option--content">
      <p class="section__right--option-title">Arcade</p>
      <p class="section__right--option-price">$9/mo</p>
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
    </div>
  </div>
</div>
<div class="section__right-month-year-option">
  <p id="monthly" class="section__right--activated">Monthly</p>
  <label class="switch">
    <input type="checkbox">
    <span class="slider round" id="checkbox"></span>
  </label>
  <p id="yearly">Yearly</p>
</div>

</div

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

///////////////////////////////////////////////////////////////
/// functions

let btnsHandler = function () {
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

      let options = document.querySelectorAll(`.section__right--option`);

      options.addEventListener(`click`, (e) => {
        console.log(e.target);
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
    }
  });

  backBtn.addEventListener(`click`, () => {
    if (currentStep > 1) {
      currentStep--;

      console.log(currentStep);

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
