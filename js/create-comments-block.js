const bigPicture = document.querySelector('.big-picture');
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');
const bigPictureCommentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const bigPictureCommentsListFragment = document.createDocumentFragment();

const createCommentsBlock = (picture) => {
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
};

export {createCommentsBlock};
