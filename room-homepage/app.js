let arrowLeft = document.querySelector(".section2-arrow-left");
let arrowRight = document.querySelector(".section2-arrow-right");

let contentTitle = document.querySelector(".section2-title");
let contentText = document.querySelector(".section2-text");
let contentImg = document.querySelector(".section1");

let hamburgerIcon = document.querySelector(".section1-hamburger");
let closeIcon = document.querySelector(".section1-hamburger-menu-close");

let mobileHeader = document.querySelector(".section1-hamburger-menu");

hamburgerIcon.addEventListener("click", () => {
  mobileHeader.style.marginTop = "0%";
  mobileHeader.style.marginLeft = "0%";
});

closeIcon.addEventListener("click", () => {
  mobileHeader.style.marginLeft = "-100%";
});

let contentObj = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "imgs/desktop-image-hero-1.jpg",
  },

  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. ",
    img: "imgs/desktop-image-hero-2.jpg",
  },

  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "imgs/desktop-image-hero-3.jpg",
  },
];

let mainFunction = () => {
  let curIndex = 0;

  arrowLeft.addEventListener("click", () => {
    if (curIndex == 0) {
      curIndex = contentObj.length - 1;
    } else {
      curIndex--;
    }
    contentTitle.textContent = contentObj[curIndex].title;
    contentText.textContent = contentObj[curIndex].text;
    contentImg.style.backgroundImage = `url(${contentObj[curIndex].img})`;
  });

  arrowRight.addEventListener("click", () => {
    if (curIndex <= contentObj.length - 2) {
      curIndex++;
    } else {
      curIndex = 0;
    }

    contentTitle.textContent = contentObj[curIndex].title;
    contentText.textContent = contentObj[curIndex].text;
    contentImg.style.backgroundImage = `url(${contentObj[curIndex].img})`;
  });
};

mainFunction();
