import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MIN_AMOUNT_OF_MESSAGE, MAX_AMOUNT_OF_MESSAGE} from '../constants.js';

const getMessages = (arrayOfComments) => {
  const message = [];
  const numberOfMessage = getRandomPositiveInteger(MIN_AMOUNT_OF_MESSAGE, MAX_AMOUNT_OF_MESSAGE);
  for (let i = 0; i < numberOfMessage; i++) {
    let randomMessageIndex = getRandomPositiveInteger(0, arrayOfComments.length - 1);
    while (message === arrayOfComments[randomMessageIndex]) {
      randomMessageIndex = getRandomPositiveInteger(0, arrayOfComments.length - 1);
    }
    message.push(arrayOfComments[randomMessageIndex]);
  }
  return message.join(' ');
};

export {getMessages};
