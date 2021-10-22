import {isEscapeKey} from './utils/is-escape-key.js';
import {isEnterKey} from './utils/is-enter-key.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const closeByEscape = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeByClick = () => {
  closeButton.addEventListener('click', () => {
    closeModal();
  });
};
closeByClick();

const closeByEnter = () => {
  closeButton.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      closeModal();
    }
  });
};
closeByEnter();


const onPictureClick = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
  closeByEscape();
};
picturesContainer.addEventListener('click', onPictureClick);

const onPictureEnter = (evt) => {
  if (isEnterKey(evt)) {
    if (evt.target.closest('.picture')) {
      evt.preventDefault();
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    }
  }
};
picturesContainer.addEventListener('keydown', onPictureEnter);

