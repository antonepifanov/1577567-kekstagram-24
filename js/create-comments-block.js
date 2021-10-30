const bigPicture = document.querySelector('.big-picture');
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');
const bigPictureCommentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const bigPictureCommentsListFragment = document.createDocumentFragment();
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const createCommentsBlock = (picture) => {
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  const comments = picture.comments;
  bigPictureCommentsList.innerHTML = '';
  comments.forEach(({avatar, name, message}) => {
    const bigPictureComment = bigPictureCommentTemplate.cloneNode(true);
    bigPictureComment.querySelector('.social__picture').src = avatar;
    bigPictureComment.querySelector('.social__picture').alt = name;
    bigPictureComment.querySelector('.social__text').textContent = message;
    bigPictureCommentsListFragment.appendChild(bigPictureComment);
  });
  bigPictureCommentsList.appendChild(bigPictureCommentsListFragment);
  if (picture.comments.length > 5) {
    commentsLoader.classList.remove('hidden');
    socialCommentCount.classList.remove('hidden');
  }
};

export {createCommentsBlock};
