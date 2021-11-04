import {isEscapeKey} from './utils/is-escape-key.js';
import {undoDefaultAction} from './utils/undo-default-action.js';
import {scale} from './scale.js';
import {onFiltersChange} from './slider.js';

const body = document.querySelector('body');
const pictureUploadForm = body.querySelector('.img-upload__form');
const uploadUserPictureInput = pictureUploadForm.querySelector('.img-upload__input');
const pictureEditModal = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureEditFormCancel = pictureEditModal.querySelector('.img-upload__cancel');
const commentField = document.querySelector('.text__description');
const hashtagField = document.querySelector('.text__hashtags');
const MAX_HASHTAG_COUNT = 5;

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
  scale();
  pictureUploadForm.addEventListener('change', onFiltersChange);
  hashtagField.addEventListener('input', () => {
    const hashtagKit = hashtagField.value.toLowerCase().trim().split(' ');
    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
    hashtagField.setCustomValidity('');
    hashtagKit.forEach((hashtag, index, array) => {
      if (hashtagKit.length > MAX_HASHTAG_COUNT) {
        hashtagField.setCustomValidity(`Нельзя добавлять более ${MAX_HASHTAG_COUNT} хэш-тегов`);
      } else if (array.includes(hashtag, index + 1)) {
        hashtagField.setCustomValidity('Xэш-тег не может повторяться');
      } else if (hashtag.length > 0) {
        if(!re.test(hashtag)){
          hashtagField.setCustomValidity('Xэш-тег начинается с # и состоит из букв и чисел. Максимальная длина одного хэш-тега 20 символов. Хэш-теги разделяются пробелами');
        }
      } else {
        hashtagField.setCustomValidity('');
      }
    });
    hashtagField.reportValidity();
  });
  commentField.addEventListener('keydown', undoDefaultAction);
  hashtagField.addEventListener('keydown', undoDefaultAction);
  document.addEventListener('keydown', onModalEscKeydown);
});

pictureEditFormCancel.addEventListener('click', () => {
  pictureEditModal.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureUploadForm.removeEventListener('change', onFiltersChange);
  commentField.removeEventListener('keydown', undoDefaultAction);
  hashtagField.removeEventListener('keydown', undoDefaultAction);
  document.removeEventListener('keydown', onModalEscKeydown);
});


