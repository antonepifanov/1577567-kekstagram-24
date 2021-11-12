import {isEscapeKey} from './utils/is-escape-key.js';
import {isEnterKey} from './utils/is-enter-key.js';
import {renderBigPicture} from './render-big-picture.js';
import {createCommentsBlock} from './create-comments-block.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const picturesContainer = document.querySelector('.pictures');

const renderPictureModal = (photos) => {
  const pictures = document.querySelectorAll('.picture');

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

      pictures.forEach((picture, index) => {
        if (evt.target.closest('.picture') === picture) {
          renderBigPicture(photos[index]);
          createCommentsBlock(photos[index]);
        }
      });
    }
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
