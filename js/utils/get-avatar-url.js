import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER} from '../constants.js';

const getAvatarUrl = () => {
  const avatarUrl = getRandomPositiveInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER);
  return `img/avatar-${avatarUrl}.svg`;
};

export {getAvatarUrl};
