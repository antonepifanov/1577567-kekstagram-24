import {isEscapeKey} from './utils/is-escape-key.js';

const body = document.querySelector('body');
const pictureUploadForm = body.querySelector('.img-upload__form');
const uploadUserPictureInput = pictureUploadForm.querySelector('.img-upload__input');
const pictureEditModal = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureEditFormCancel = pictureEditModal.querySelector('.img-upload__cancel');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    pictureEditModal.classList.add('hidden');
    body.classList.remove('modal-open');
    pictureUploadForm.reset();
  }
};

uploadUserPictureInput.addEventListener('change', () => {
  pictureEditModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
});

pictureEditFormCancel.addEventListener('click', () => {
  pictureEditModal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
});


