import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MIN_AMOUNT_OF_COMMENTS, MAX_AMOUNT_OF_COMMENTS} from '../constants.js';
import {createComment} from './create-comment.js';

const createComments = () => {
  const numberOfComments = getRandomPositiveInteger(MIN_AMOUNT_OF_COMMENTS, MAX_AMOUNT_OF_COMMENTS);
  const comments = Array.from({length: numberOfComments}, createComment);
  return comments;
};

export {createComments};
