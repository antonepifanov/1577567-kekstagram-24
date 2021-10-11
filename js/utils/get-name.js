import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {NAMES} from '../constants.js';

const getName = () => NAMES[getRandomPositiveInteger(0, NAMES.length - 1)];

export {getName};
