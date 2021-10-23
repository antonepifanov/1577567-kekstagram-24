import {userPhotos} from './pictures.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');


const renderBigPicture = (picture, index) => {
  bigPictureImage.src = picture.querySelector('img').src;
  bigPictureLikes.textContent = picture.querySelector('.picture__likes').textContent;
  bigPictureCommentsCount.textContent = picture.querySelector('.picture__comments').textContent;
  bigPictureDescription.textContent = userPhotos[index].description;
};

export {renderBigPicture, bigPicture};
