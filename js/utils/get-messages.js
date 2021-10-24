import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MIN_AMOUNT_OF_MESSAGE, MAX_AMOUNT_OF_MESSAGE} from '../constants.js';

const getMessages = (arrayOfComments) => {
  const messages = [];
  const numberOfMessage = getRandomPositiveInteger(MIN_AMOUNT_OF_MESSAGE, MAX_AMOUNT_OF_MESSAGE);
  while (messages.length !== numberOfMessage) {
    const randomMessageIndex = getRandomPositiveInteger(0, arrayOfComments.length - 1);
    if (!messages.includes(arrayOfComments[randomMessageIndex])) {
      messages.push(arrayOfComments[randomMessageIndex]);
    }
  }
  return messages.join(' ');
};

export {getMessages};
