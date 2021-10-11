import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MIN_AMOUNT_OF_LIKES, MAX_AMOUNT_OF_LIKES} from '../constants.js';

const getAmountOfLikes = () => getRandomPositiveInteger(MIN_AMOUNT_OF_LIKES, MAX_AMOUNT_OF_LIKES);

export {getAmountOfLikes};
