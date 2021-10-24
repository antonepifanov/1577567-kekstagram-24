import {isEscapeKey} from './utils/is-escape-key.js';
import {isEnterKey} from './utils/is-enter-key.js';
import {bigPicture, renderBigPicture} from './render-big-picture.js';
import {userPhotos} from './pictures.js';

const picturesContainer = document.querySelector('.pictures');
const pictures = document.querySelectorAll('.picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

// Функция обработчика события нажатия на ESCAPE
const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

// Функция для показа окна
const openModal = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
  pictures.forEach((picture, index) => {
    if (picture === evt.target.closest('.picture')) {
      renderBigPicture(userPhotos[index]);
    }
  });

  document.addEventListener('keydown', onModalEscKeydown);
};

// Функция для скрытия окна
const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};

// Функция обработчика события клика на картинку
const onPictureClick = (evt) => {
  openModal(evt);
};

// Функция обработчика события нажатия ENTER на картинку
const onPictureEnterKeydown = (evt) => {
  if (isEnterKey(evt)) {
    openModal(evt);
  }
};

// Обработчик события клика на картинку                           ОТКРЫВАЕТ МОДАЛЬНОЕ ОКНО
picturesContainer.addEventListener('click', onPictureClick);

// Обработчик события нажатия нажатия ENTER на картинку           ОТКРЫВАЕТ МОДАЛЬНОЕ ОКНО
picturesContainer.addEventListener('keydown', onPictureEnterKeydown);

// Обработчик события клика на КРЕСТИК                            ЗАКРЫВАЕТ МОДАЛЬНОЕ ОКНО
closeButton.addEventListener('click', () => {
  closeModal();
});
