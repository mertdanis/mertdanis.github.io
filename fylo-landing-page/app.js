let email = document.querySelector(`.section5__form`);
let emailBtn = document.querySelector(`.section5__submit`);

let errorP = document.querySelector(`.section5__error`);

let checkvalidEmail = function () {
  if (!email.value.includes(`@`)) {
    errorP.classList.add(`section5__error-active`);
    errorP.textContent = `Please enter a valid email address`;
    console.log(`not valid`);
  } else if (
    (email.value.includes(`@`) &&
      email.value[0] != `@` &&
      email.value.includes(`gmail.com`)) ||
    email.value.includes(`hotmail.com`) ||
    email.value.includes(`outlook.com`)
  )
    errorP.textContent = `valid`;
  errorP.classList.add(`valid`);
  console.log(`valid`);
};

emailBtn.addEventListener(`click`, setInterval(checkvalidEmail, 1000));
