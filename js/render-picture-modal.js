import {isEscapeKey} from './utils/is-escape-key.js';
import {isEnterKey} from './utils/is-enter-key.js';
import {renderBigPicture} from './render-big-picture.js';
import {userPhotos} from './render-pictures.js';
import {createCommentsBlock} from './create-comments-block.js';

const bigPicture = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
const pictures = document.querySelectorAll('.picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
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
  }
  pictures.forEach((picture, index) => {
    if (picture === evt.target.closest('.picture')) {
      renderBigPicture(userPhotos[index]);
      createCommentsBlock(userPhotos[index]);
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
