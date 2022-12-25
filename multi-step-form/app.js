let nextBtn = document.querySelector(`.section__right-btn`);

let sectionRight = document.querySelector(`.section__right`);

let step1 = document.querySelector(`.step1`);

let stepNumbers = document.querySelectorAll(`.section__left--step---number`);

let step2Content = `<div class="step2">
<h3 class="section__right--title">Select your plan</h3>
<p class="section__right--desc">
  You have the option of monthly or yearly billing.
</p>

<div class="section__right--options">
  <div class="section__right--option option1">
    <img
      src="/imgs/assets/images/icon-arcade.svg"
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
      src="/imgs/assets/images/icon-advanced.svg"
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
      src="/imgs/assets/images/icon-pro.svg"
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
  <p class="section__right-month">Monthly</p>
  <p class="section__right-month">Yearly</p>
</div>
<button class="section__right-btn">Next Step</button>
</div>

`;

let step3Content = `<div class="step3">
<h3 class="section__right--title">Pick add-ons</h3>
<p class="section__right--desc">
  Add-ons help enhance your gaming experience.
</p>

<div class="section__right-pick--options">
  <div class="section__right-pick--option option1">
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
  <div class="section__right-pick--option option3">
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
<button class="section__right-btn">Next Step</button>
</div>

`;

let step4Content = `<div class="step4">
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
  <button class="section__right-btn">Confirm</button>
</div>
</div>

`;

let currentStep = 1;
console.log(currentStep);

let stepSection = document.querySelector(`.section__left--step---number`);
nextBtn.addEventListener(`click`, () => {
  let step2 = document.querySelector(`.step2`);
  let step3 = document.querySelector(`.step3`);
  let step4 = document.querySelector(`.step4`);

  if (currentStep == 1) {
    currentStep++;

    let activeStep = document.querySelector(
      `#section__left-number--${currentStep}`
    );
    activeStep.classList.add(`section__left--step---number_active`);

    step1.classList.add(`hidden`);

    sectionRight.insertAdjacentHTML("afterbegin", step2Content);
  } else if (currentStep == 2) {
    step2.classList.add(`hidden`);
    currentStep++;
    activeStep = document.querySelector(
      `#section__left-number--${currentStep}`
    );
    activeStep.classList.add(`section__left--step---number_active`);

    sectionRight.insertAdjacentHTML("afterbegin", step3Content);
  } else if (currentStep == 3) {
    step3.classList.add(`hidden`);
    currentStep++;
    activeStep = document.querySelector(
      `#section__left-number--${currentStep}`
    );
    activeStep.classList.add(`section__left--step---number_active`);
    sectionRight.insertAdjacentHTML("afterbegin", step4Content);
  }
});

// ==> cozumler

// next stepe bastigimda step number aktifligi diger stepe gecsin ve
// section right html degissin
// bilgileri bir datada topla...
