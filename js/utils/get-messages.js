import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MIN_AMOUNT_OF_MESSAGE, MAX_AMOUNT_OF_MESSAGE, COMMENTS} from '../constants.js';

const getMessages = () => {
  let message = '';
  const numberOfMessage = getRandomPositiveInteger(MIN_AMOUNT_OF_MESSAGE, MAX_AMOUNT_OF_MESSAGE);
  for (let i = 0; i < numberOfMessage; i++) {
    let randomMessageIndex = getRandomPositiveInteger(0, COMMENTS.length - 1);
    while (message === COMMENTS[randomMessageIndex]) {
      randomMessageIndex = getRandomPositiveInteger(0, COMMENTS.length - 1);
    }
    message += COMMENTS[randomMessageIndex];
  }
  return message;
};

export {getMessages};
