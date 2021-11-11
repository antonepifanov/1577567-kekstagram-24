const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const photoFragment = document.createDocumentFragment();

const renderPictures = (pictures) => {
  pictures.forEach(({url, likes, comments}) => {
    const picturesItem = pictureTemplate.cloneNode(true);
    picturesItem.querySelector('.picture__img').src = url;
    picturesItem.querySelector('.picture__likes').textContent = likes;
    picturesItem.querySelector('.picture__comments').textContent = comments.length;
    photoFragment.appendChild(picturesItem);
  });
  picturesContainer.appendChild(photoFragment);
};

export {renderPictures};
