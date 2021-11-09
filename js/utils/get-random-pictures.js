import {getRandomPositiveInteger} from './get-random-positive-integer.js';

const createRandomPictures = () => {
  const previousArray = [];
  return function (pictures) {
    let itemIndex = getRandomPositiveInteger(0, pictures.length - 1);
    while (previousArray.includes(itemIndex)) {
      itemIndex = getRandomPositiveInteger(0, pictures.length - 1);
    }
    previousArray.push(itemIndex);
    return itemIndex;
  };
};
const getRandomPicture = createRandomPictures();

export {getRandomPicture};
