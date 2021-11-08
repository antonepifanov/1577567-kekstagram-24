import {isEscapeKey} from './utils/is-escape-key.js';
import {isEnterKey} from './utils/is-enter-key.js';
import {renderBigPicture} from './render-big-picture.js';
import {createCommentsBlock} from './create-comments-block.js';

const renderPictureModal = (arrayOfPhotos) => {
  const bigPicture = document.querySelector('.big-picture');
  const picturesContainer = document.querySelector('.pictures');
  const pictures = document.querySelectorAll('.picture');
  const closeButton = bigPicture.querySelector('.big-picture__cancel');
  const body = document.querySelector('body');

  const onModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  };

  const openModal = (evt) => {
    if (evt.target.closest('.picture')) {
      evt.preventDefault();
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');
    }
    pictures.forEach((picture, index) => {
      if (picture === evt.target.closest('.picture')) {
        renderBigPicture(arrayOfPhotos[index]);
        createCommentsBlock(arrayOfPhotos[index]);
      }
    });
    document.addEventListener('keydown', onModalEscKeydown);
  };

  const closeModal = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onModalEscKeydown);
  };

  const onPictureClick = (evt) => {
    openModal(evt);
  };

  const onPictureEnterKeydown = (evt) => {
    if (isEnterKey(evt)) {
      openModal(evt);
    }
  };

  picturesContainer.addEventListener('click', onPictureClick);
  picturesContainer.addEventListener('keydown', onPictureEnterKeydown);
  closeButton.addEventListener('click', () => {
    closeModal();
  });
};

export {renderPictureModal};
