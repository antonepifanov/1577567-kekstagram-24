const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const pictures = document.querySelectorAll('.picture');

const getBigImage = () => {
  pictures.forEach((picture) => {
    picture.addEventListener('click', (evt) => {
      evt.preventDefault();
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    });
  });
};
getBigImage();
closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

/*
   const initCart = () => {
   const buyButtons = document.querySelectorAll(".buy");
   const cart = document.querySelector(".cart");
   const cartClose = cart.querySelector(".close-button");
   const cartContinue = cart.querySelector(".continue-button");
   if (!buyButtons) {
    return;
  };
  for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.add("cart-show");
    });
  };
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.remove("cart-show");
  });
  cartContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.remove("cart-show");
  });
};
initCart();
const initForm = () => {
  const formLink = document.querySelector(".about-button");
  const feedback = document.querySelector(".feedback");
  const formClose = feedback.querySelector(".close-button");
  const feedbackForm = feedback.querySelector(".feedback-form");
  const formName = feedback.querySelector("#form_name");
  const formMail = feedback.querySelector("#form_email");
  const formLetter = feedback.querySelector("#form_letter");
  if (!formLink) {
    return;
  };
  formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("feedback-show");
    formName.focus();
  });
  formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("feedback-show");
    feedback.classList.remove("feedback-error");
  });
  feedbackForm.addEventListener("submit", function (evt) {
    if (!formName.value || !formMail.value || !formLetter.value) {
      evt.preventDefault();
      feedback.classList.remove("feedback-error");
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add("feedback-error");
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedback.classList.contains("feedback-show")) {
        evt.preventDefault();
        feedback.classList.remove("feedback-show");
        feedback.classList.remove("feedback-error");
      }
    }
  });
};*/
