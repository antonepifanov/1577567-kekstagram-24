import {getRandomCommentId} from './get-random-comment-id.js';
import {getAvatarUrl} from './get-avatar-url.js';
import {getMessages} from './get-messages.js';
import {getName} from './get-name.js';

const createComment = () => ({
  id: getRandomCommentId(),
  avatar: getAvatarUrl(),
  message: getMessages(),
  name: getName(),
});

export {createComment};
