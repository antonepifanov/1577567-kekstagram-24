import {DESCRIPTIONS} from './constants.js';
import {getAmountOfLikes} from './utils/get-amount-of-likes.js';
import {createComments} from './utils/create-comments.js';

const createPhotosDescriptions = () => {
  const arrayOfPhotosDescriptions = DESCRIPTIONS.map((description, index) => {
    const indexNumber = index + 1;
    return {
      id: indexNumber,
      url: `photos/${indexNumber}.jpg`,
      description: description,
      likes: getAmountOfLikes(),
      comments: createComments(),
    };
  });
  return arrayOfPhotosDescriptions;
};
createPhotosDescriptions();
