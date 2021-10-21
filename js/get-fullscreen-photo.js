import {isEscapeKey} from './utils/is-escape-key.js';
import {isEnterKey} from './utils/is-enter-key.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

const onPictureClick = (evt) => {
  if (evt.target.matches('.picture__img')) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
};

const onPictureEnter = (evt) => {
  if (isEnterKey(evt)) {
    if (evt.target.matches('.picture')) {
      evt.preventDefault();
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
    }
  }
};

const closeByEscape = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};

const closeByClick = () => {
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });
};
closeByClick();

const closeByEnter = () => {
  closeButton.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      bigPicture.classList.add('hidden');
    }
  });
};
closeByEnter();
const openByEnter = () => {
  picturesContainer.addEventListener('keydown', onPictureEnter);
};
openByEnter();

const openModal = () => {
  picturesContainer.addEventListener('click', onPictureClick);
  closeByEscape();
};

const openByClick = () => {
  openModal();
};
openByClick();

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};
