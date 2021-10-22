import {bigPicture, picturesContainer, onPictureClick, onPictureEnterKeydown} from './picture-modal.js';
import {userPhotos} from './pictures.js';

const pictures = document.querySelectorAll('.picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');

pictures.forEach((picture, index) => {
  picturesContainer.addEventListener('click', onPictureClick);
  picturesContainer.addEventListener('keydown', onPictureEnterKeydown);
  bigPictureImage.src = picture.querySelector('img').src;
  bigPictureLikes.textContent = userPhotos[index].likes;
});
