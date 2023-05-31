let ratings = document.querySelectorAll(`.container-rating-list-item`);

let submitBtn = document.querySelector(".container-btn");

let submitContent = `  <div class="submitContent">

          
<img class="submitContent-img" src="./imgs/illustration-thank-you.svg" alt="">
<p class="submitContent-score">You selected 4 out of 5</p>
<h4 class="submitContent-title">Thank you!</h4>
<p class="submitContent-text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
</p>
</div>`;

let content = document.querySelector(`.content`);
let container = document.querySelector(".container");

let ratingFunction = () => {
  let click = 0;
  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      click = click + 1;
      ratings.forEach((val) => {
        val.classList.remove("active");
      });
      rating.classList.add("active");

      let selectedScore = rating.textContent;

      if (click == 1) {
        submitBtn.addEventListener("click", () => {
          content.style.display = "none";
          container.insertAdjacentHTML("afterBegin", submitContent);
          let contentScore = document.querySelector(`.submitContent-score`);

          contentScore.textContent = `You selected ${selectedScore} out of 5`;
        });
      }
    });
  });
};

ratingFunction();
