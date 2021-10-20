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
picturesContainer.addEventListener('click', onPictureClick);    // обработчик на клик по миниатюре

closeButton.addEventListener('click', () => {                   // обработчик на клик по кнопке ЗАКРЫТЬ
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {                 // обработчик на закрытие по клавише ESCAPE
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});
