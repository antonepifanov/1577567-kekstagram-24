import {renderPictures} from './render-pictures.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {debounce} from './utils/debounce.js';
import {renderPictureModal} from './render-picture-modal.js';

const filtersBlock = document.querySelector('.img-filters');
const filtersButtons = filtersBlock.querySelectorAll('.img-filters__button');
const photos = document.querySelectorAll('.picture');
const getRandomIndex = createRandomIndex();
const RANDOM_PHOTO_COUNT =10;
const RERENDER_DELAY = 500;

function createRandomIndex  () {
  let previousPictures = [];
  return function (array) {
    let itemIndex = getRandomPositiveInteger(0, array.length - 1);
    while (previousPictures.includes(itemIndex)) {
      itemIndex = getRandomPositiveInteger(0, array.length - 1);
    }
    if (previousPictures.length < RANDOM_PHOTO_COUNT) {
      previousPictures.push(itemIndex);
    } else {
      previousPictures = [];
      previousPictures.push(itemIndex);
    }
    return itemIndex;
  };
}

const removeClass = () => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const removePictures = () => {
  photos.forEach((photo) => photo.remove());
};

const renderFilter = (pictures) => {
  removePictures();
  renderPictures(pictures);
  renderPictureModal(pictures);
};

const getFiltration = (pictures) => {
  filtersBlock.classList.remove('img-filters--inactive');
  filtersButtons.forEach((button) => {
    button.addEventListener('click',
      debounce((evt) => {
        removeClass();
        evt.target.classList.add('img-filters__button--active');
        if (evt.target.matches('#filter-default')) {
          const defaultPictures = Array.from(pictures.slice());
          renderFilter(defaultPictures);
        } else if (evt.target.matches('#filter-random')) {
          const randomPictures = Array.from({length: RANDOM_PHOTO_COUNT}, () => pictures[getRandomIndex(pictures)]);
          renderFilter(randomPictures);
        } else if (evt.target.matches('#filter-discussed')) {
          const sortedPictures = Array.from(pictures.slice().sort((commentA, commentB) => commentB.comments.length - commentA.comments.length));
          renderFilter(sortedPictures);
        }
      },
      RERENDER_DELAY),
    );
  });
};

export {getFiltration};
