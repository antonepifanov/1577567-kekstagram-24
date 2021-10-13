import {getRandomPositiveInteger} from './get-random-positive-integer.js';

const getName = (arrayOfNames) => arrayOfNames[getRandomPositiveInteger(0, arrayOfNames.length - 1)];

export {getName};
