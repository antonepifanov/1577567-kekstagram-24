import {isEscapeKey} from './is-escape-key.js';

const onCommentFieldEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

export {onCommentFieldEscKeydown};
