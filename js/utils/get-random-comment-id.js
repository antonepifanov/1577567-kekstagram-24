import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MIN_ID_OF_COMMENT, MAX_ID_OF_COMMENT} from '../constants.js';

const createRandomCommentId = () => {
  const previousId = [];
  return function () {
    let commentId = getRandomPositiveInteger(MIN_ID_OF_COMMENT, MAX_ID_OF_COMMENT);
    while (previousId.includes(commentId)) {
      commentId = getRandomPositiveInteger(MIN_ID_OF_COMMENT, MIN_ID_OF_COMMENT);
    }
    previousId.push(commentId);
    return commentId;
  };
};
const getRandomCommentId = createRandomCommentId();

export {getRandomCommentId};
