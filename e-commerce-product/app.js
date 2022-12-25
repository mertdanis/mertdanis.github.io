// order of number //

let plusBtn = document.querySelector(`.section2__buy-plus`);
let minusBtn = document.querySelector(`.section2__buy-minus`);
let orderNumber = document.querySelector(`.section2__buy-total`);

let addtoCart = document.querySelector(`.section2__buy--addtocart`);

let headercardBtn = document.querySelector(`.header__cart-btn`);
let headercardNumber = document.querySelector(`.header__cart-btn--number`);
let headercardBtn_Container = document.querySelector(`.header__cart-container`);
let headercarBtn_Abs = document.querySelector(`.header__cart-btn--abs`);

let abs_sec_1 = document.querySelector(`.header__cart-btn--abs---flex`);
let abs_sec_2 = document.querySelector(`.header__cart-btn--abs---center`);
let headerabsEmpty = document.querySelector(`.header__cart-btn--abs--empty`);
let price = document.querySelector(`.price`);
let totalPrice = document.querySelector(`.header__cart-btn--abs---totalprice`);
let cartPrice = document.querySelector(`.header__cart-btn--abs---price`);
let number_Order = document.querySelector(
  `.header__cart-btn--abs---ordernumber`
);

// images

let img1 = document.querySelector(`.thumbnail1`);
let img2 = document.querySelector(`.thumbnail2`);
let img3 = document.querySelector(`.thumbnail3`);
let img4 = document.querySelector(`.thumbnail4`);

let mainImage = document.querySelector(`.section1__main-img`);
let popup = document.querySelector(`.popup`);
let closeBtn = document.querySelector(`.popup__close`);

let orderName = document.querySelector(`.header__cart-btn--abs---ordername`);
let section2title = document.querySelector(`.section2__content-title`);

let delBtn = document.querySelector(`.header__cart-btn--abs---delbtn`);

plusBtn.addEventListener(`click`, () => {
  if (orderNumber.textContent < 9) {
    orderNumber.textContent++;
  }
});

minusBtn.addEventListener(`click`, () => {
  if (orderNumber.textContent > 0) {
    orderNumber.textContent--;
  }
});

addtoCart.addEventListener(`click`, () => {
  headercardBtn_Container.addEventListener(`mouseenter`, () => {
    headercarBtn_Abs.classList.add(`header__cart-btn--abs---active`);
  });

  headercardBtn_Container.addEventListener(`mouseleave`, () => {
    headercarBtn_Abs.classList.remove(`header__cart-btn--abs---active`);
  });

  if (orderNumber.textContent > 0 && orderNumber.textContent < 10) {
    headercardNumber.classList.add(`header__cart-btn--number---show`);
    headercardNumber.textContent = orderNumber.textContent;
  } else if (orderNumber.textContent == 0) {
    headercardNumber.textContent = orderNumber.textContent;
  }
});

let priceCalc = function () {
  cartPrice.textContent = price.textContent;
  number_Order.textContent = orderNumber.textContent;

  let cartPriceReplace = cartPrice.textContent.replace("$", "");
  console.log(cartPriceReplace * 2);
  totalPrice.textContent = `$` + cartPriceReplace * number_Order.textContent;

  orderName.textContent = section2title.textContent;
};

let cartBtn_Func = function () {
  if (orderNumber.textContent < 1) {
    headerabsEmpty.textContent = `Your cart is empty.`;
    abs_sec_1.style.opacity = 0;
    abs_sec_2.style.opacity = 0;
  } else if (orderNumber.textContent >= 1) {
    headerabsEmpty.textContent = ``;
    abs_sec_1.style.opacity = 1;
    abs_sec_2.style.opacity = 1;
    setInterval(priceCalc, 1000);
  }
};

setInterval(cartBtn_Func, 1000);

let mainimageHandler = function (mainImg) {
  mainImg.addEventListener(`click`, () => {
    popup.classList.add(`popup--active`);
    closeBtn.addEventListener(`click`, () => {
      popup.classList.remove(`popup--active`);
    });
  });
};

mainimageHandler(mainImage);

let thumbnailHandler = function (img, fileName) {
  img.addEventListener(`mouseenter`, () => {
    mainImage.setAttribute(`src`, fileName);
    img.classList.add(`thumbnail--active`);
    if (!img.classList.contains(`thumbnail1`)) {
      img1.classList.remove(`thumbnail--active`);
    }
  });

  img.addEventListener(`mouseleave`, () => {
    img.classList.remove(`thumbnail--active`);
    if (!img.classList.contains(`thumbnail1`)) {
      img1.classList.remove(`thumbnail--active`);
    }
  });
};

thumbnailHandler(img1, `images/image-product-1.jpg`);
thumbnailHandler(img2, `images/image-product-2.jpg`);
thumbnailHandler(img3, `images/image-product-3.jpg`);
thumbnailHandler(img4, `images/image-product-4.jpg`);
