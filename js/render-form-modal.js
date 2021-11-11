import {isEscapeKey} from './utils/is-escape-key.js';
import {undoDefaultAction} from './utils/undo-default-action.js';
import {scale, scaleCancel} from './scale.js';
import {onFiltersChange, toUnsetEffect} from './slider.js';
import {onHashtagInput} from './on-hashtag-input.js';
import {showErrorMessage, showSuccessMessage, showLoadingProcessMessage, removeLoadingProcessMessage} from './info-messages.js';
import {sendData} from './api.js';
import {loadOwnPicture} from './load-own-picture.js';

const body = document.querySelector('body');
const pictureUploadForm = body.querySelector('.img-upload__form');
const effectsList = pictureUploadForm.querySelector('.effects__list');
const uploadUserPictureInput = pictureUploadForm.querySelector('.img-upload__input');
const pictureEditModal = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureEditFormCancel = pictureEditModal.querySelector('.img-upload__cancel');
const commentField = document.querySelector('.text__description');
const hashtagField = document.querySelector('.text__hashtags');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function closeModal () {
  pictureEditModal.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureUploadForm.reset();
  scaleCancel();
  hashtagField.removeEventListener('input', onHashtagInput);
  effectsList.removeEventListener('change', onFiltersChange);
  commentField.removeEventListener('keydown', undoDefaultAction);
  hashtagField.removeEventListener('keydown', undoDefaultAction);
  document.removeEventListener('keydown', onModalEscKeydown);
}

function openModal () {
  pictureEditModal.classList.remove('hidden');
  body.classList.add('modal-open');
  scale();
  toUnsetEffect();
  effectsList.addEventListener('change', onFiltersChange);
  hashtagField.addEventListener('input', onHashtagInput);
  commentField.addEventListener('keydown', undoDefaultAction);
  hashtagField.addEventListener('keydown', undoDefaultAction);
  document.addEventListener('keydown', onModalEscKeydown);
}

pictureEditFormCancel.addEventListener('click', () => {
  closeModal();
});

uploadUserPictureInput.addEventListener('change', () => {
  openModal();
  loadOwnPicture();
});

const setUserFormSubmit = (onSuccess) => {
  pictureUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    showLoadingProcessMessage();
    sendData(
      () => onSuccess(),
      () => showSuccessMessage(),
      () => showErrorMessage(),
      () => removeLoadingProcessMessage(),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit, openModal, closeModal};
