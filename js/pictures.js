import {createPhotosDescriptions} from './data.js';
import {DESCRIPTIONS} from './constants.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const userPhotos = createPhotosDescriptions(DESCRIPTIONS);
const photoFragment = document.createDocumentFragment();

userPhotos.forEach(({url, likes, comments}) => {
  const picturesItem = pictureTemplate.cloneNode(true);
  picturesItem.querySelector('.picture__img').src = url;
  picturesItem.querySelector('.picture__likes').textContent = likes;
  picturesItem.querySelector('.picture__comments').textContent = comments.length;
  photoFragment.appendChild(picturesItem);
});
picturesContainer.appendChild(photoFragment);
