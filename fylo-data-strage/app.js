let inputRange = document.querySelector(`.container-right-input`);

inputRange.addEventListener(`mousemove`, (e) => {
  let gbLeft = document.querySelector(`.container-right-left`);
  let gbUsed = document.querySelector(`#usedGB`);
  let currentGB = e.target.value;

  gbUsed.textContent = currentGB;

  gbLeft.textContent = `${1000 - currentGB} GB LEFT`;
});
