import {isEscapeKey} from './utils/is-escape-key.js';

const errorContainerTemplate = document.querySelector('#error').content.querySelector('.error');

const successContainerTemplate = document.querySelector('#success').content.querySelector('.success');

const showErrorMessage = () => {
  const errorContainer = errorContainerTemplate.cloneNode(true);
  const errorCloseButton = errorContainer.querySelector('.error__button');
  errorContainer.style.zIndex = 100;
  document.body.append(errorContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorModal();
    }
  };

  const onWindowClick = (evt) => {
    if (!errorContainer.querySelector('.error__inner').contains(evt.target)) {
      evt.preventDefault();
      closeErrorModal();
    }
  };

  const onCloseButtonClick = () => {
    closeErrorModal();
  };

  function closeErrorModal() {
    errorContainer.remove();
    errorCloseButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onWindowClick);
  }

  errorCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);
};

const showSuccessMessage = () => {
  const successContainer = successContainerTemplate.cloneNode(true);
  const successCloseButton = successContainer.querySelector('.success__button');
  successContainer.style.zIndex = 100;
  document.body.append(successContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessModal();
    }
  };

  const onWindowClick = (evt) => {
    if (!successContainer.querySelector('.success__inner').contains(evt.target)) {
      evt.preventDefault();
      closeSuccessModal();
    }
  };

  const onCloseButtonClick = () => {
    closeSuccessModal();
  };

  successCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);

  function closeSuccessModal() {
    successContainer.remove();
    successCloseButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onWindowClick);
  }
};

export {showErrorMessage, showSuccessMessage};
