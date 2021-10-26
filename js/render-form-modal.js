import {isEscapeKey} from './utils/is-escape-key.js';
import {undoDefaultAction} from './utils/undo-default-action.js';

const body = document.querySelector('body');
const pictureUploadForm = body.querySelector('.img-upload__form');
const uploadUserPictureInput = pictureUploadForm.querySelector('.img-upload__input');
const pictureEditModal = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureEditFormCancel = pictureEditModal.querySelector('.img-upload__cancel');
const commentField = document.querySelector('.text__description');
const hashtagtField = document.querySelector('.text__hashtags');

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
  commentField.addEventListener('keydown', undoDefaultAction);
  hashtagtField.addEventListener('keydown', undoDefaultAction);
  document.addEventListener('keydown', onModalEscKeydown);
});

pictureEditFormCancel.addEventListener('click', () => {
  pictureEditModal.classList.add('hidden');
  body.classList.remove('modal-open');
  commentField.removeEventListener('keydown', undoDefaultAction);
  hashtagtField.removeEventListener('keydown', undoDefaultAction);
  document.removeEventListener('keydown', onModalEscKeydown);
});


