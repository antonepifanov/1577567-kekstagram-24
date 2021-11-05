import {isEscapeKey} from './utils/is-escape-key.js';
import {undoDefaultAction} from './utils/undo-default-action.js';
import {scale, scaleCancel} from './scale.js';
import {onFiltersChange, toUnsetEffect} from './slider.js';
import {onHashtagInput} from './on-hashtag-input.js';

const body = document.querySelector('body');
const pictureUploadForm = body.querySelector('.img-upload__form');
const effectsList = pictureUploadForm.querySelector('.effects__list');
const uploadUserPictureInput = pictureUploadForm.querySelector('.img-upload__input');
const pictureEditModal = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureEditFormCancel = pictureEditModal.querySelector('.img-upload__cancel');
const commentField = document.querySelector('.text__description');
const hashtagField = document.querySelector('.text__hashtags');

const closeModal = () => {
  pictureEditModal.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureUploadForm.reset();
  scaleCancel();
  hashtagField.removeEventListener('input', onHashtagInput);
  effectsList.removeEventListener('change', onFiltersChange);
  commentField.removeEventListener('keydown', undoDefaultAction);
  hashtagField.removeEventListener('keydown', undoDefaultAction);
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
    document.removeEventListener('keydown', onModalEscKeydown);
  }
};

pictureEditFormCancel.addEventListener('click', () => {
  closeModal();
  document.removeEventListener('keydown', onModalEscKeydown);
});

uploadUserPictureInput.addEventListener('change', () => {
  pictureEditModal.classList.remove('hidden');
  body.classList.add('modal-open');
  toUnsetEffect();
  scale();
  effectsList.addEventListener('change', onFiltersChange);
  hashtagField.addEventListener('input', onHashtagInput);
  commentField.addEventListener('keydown', undoDefaultAction);
  hashtagField.addEventListener('keydown', undoDefaultAction);
  document.addEventListener('keydown', onModalEscKeydown);
});
