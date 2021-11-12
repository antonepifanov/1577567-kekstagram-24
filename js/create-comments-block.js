const VISIBLE_COMMENTS = 5;
const COMMENTS_TO_ADD = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureCommentsList = bigPicture.querySelector('.social__comments');
const bigPictureCommentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const bigPictureCommentsListFragment = document.createDocumentFragment();
const commentsLoader = document.querySelector('.comments-loader');
const currentCommentsCount = document.querySelector('.current-comments-count');

let bigPictureComment;
let comments = [];
let commentItems = [];
let currentVisibleComments;

const setNumberOfComments = (items) => {
  currentVisibleComments = currentVisibleComments + COMMENTS_TO_ADD;
  items.forEach((comment, index) => {
    if (comment.classList.contains('hidden') && index < currentVisibleComments) {
      comment.classList.remove('hidden');
    }
  });
  if (currentVisibleComments >= items.length) {
    commentsLoader.classList.add('hidden');
    currentCommentsCount.textContent = items.length;
  } else {
    currentCommentsCount.textContent = currentVisibleComments;
  }
};

const onCommentsLoaderPress = () => {
  setNumberOfComments(commentItems);
};

const createCommentsBlock = (picture) => {
  currentVisibleComments = VISIBLE_COMMENTS;
  comments = picture.comments;
  bigPictureCommentsList.innerHTML = '';
  comments.forEach(({avatar, name, message}) => {
    bigPictureComment = bigPictureCommentTemplate.cloneNode(true);
    bigPictureComment.querySelector('.social__picture').src = avatar;
    bigPictureComment.querySelector('.social__picture').alt = name;
    bigPictureComment.querySelector('.social__text').textContent = message;
    bigPictureCommentsListFragment.appendChild(bigPictureComment);
  });
  bigPictureCommentsList.appendChild(bigPictureCommentsListFragment);

  commentItems = bigPictureCommentsList.querySelectorAll('.social__comment');
  commentsLoader.classList.add('hidden');

  if (commentItems.length <= VISIBLE_COMMENTS) {
    currentCommentsCount.textContent = commentItems.length;
  } else {
    currentCommentsCount.textContent = VISIBLE_COMMENTS;
    commentItems.forEach((comment, index) => {
      if (index >= VISIBLE_COMMENTS) {
        comment.classList.add('hidden');
      }
    });

    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderPress);
  }
};

export {createCommentsBlock};
