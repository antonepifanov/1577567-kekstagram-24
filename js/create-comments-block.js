const bigPicture = document.querySelector('.big-picture');
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');
const bigPictureCommentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const bigPictureCommentsListFragment = document.createDocumentFragment();
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const currentCommentsCount = bigPicture.querySelector('.current-comments-count');
const VISIBLE_COMMENTS = 5;
let currentCommentsCountValue;


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
  const commentItems = bigPictureCommentsList.querySelectorAll('.social__comment');
  if (commentItems.length > VISIBLE_COMMENTS) {
    commentsLoader.classList.remove('hidden');
    socialCommentCount.classList.remove('hidden');
    commentItems.forEach((comment, index) => {
      comment.classList.add('hidden');
      if (index < VISIBLE_COMMENTS) {
        comment.classList.remove('hidden');
      }
    });
    currentCommentsCountValue = VISIBLE_COMMENTS;
    currentCommentsCount.textContent = currentCommentsCountValue;
    commentsLoader.addEventListener('click', () => {
      let addCommentCounter = 0;
      commentItems.forEach((comment) => {
        if (comment.classList.contains('hidden') && addCommentCounter !== VISIBLE_COMMENTS) {
          comment.classList.remove('hidden');
          addCommentCounter += 1;
          currentCommentsCountValue += 1;
          currentCommentsCount.textContent = currentCommentsCountValue;
        }
      });
      if (currentCommentsCountValue === commentItems.length) {
        commentsLoader.classList.add('hidden');
      }
    });
  }
};

export {createCommentsBlock};
