import {isEscapeKey} from './is-escape-key.js';

const undoDefaultAction = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

export {undoDefaultAction};
