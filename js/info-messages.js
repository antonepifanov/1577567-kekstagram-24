import {isEscapeKey} from './utils/is-escape-key.js';

const loadingProcessMessageTemplate = document.querySelector('#messages').content.querySelector('.img-upload__message--loading');
const loadingProcessMessageContainer = loadingProcessMessageTemplate.cloneNode(true);
const successContainerTemplate = document.querySelector('#success').content.querySelector('.success');
const successContainer = successContainerTemplate.cloneNode(true);
const successCloseButton = successContainer.querySelector('.success__button');
const alertContainer = document.createElement('div');
const errorContainerTemplate = document.querySelector('#error').content.querySelector('.error');
const errorContainer = errorContainerTemplate.cloneNode(true);
const errorCloseButton = errorContainer.querySelector('.error__button');
const ALERT_SHOW_TIME = 5000;

const showUnloadMessage = (message) => {
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const onErrorModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorModal();
  }
};

const onWindowWithErrorClick = (evt) => {
  if (!errorContainer.querySelector('.error__inner').contains(evt.target)) {
    evt.preventDefault();
    closeErrorModal();
  }
};

const onErrorCloseButtonClick = () => {
  closeErrorModal();
};

function closeErrorModal() {
  errorContainer.remove();
  errorCloseButton.removeEventListener('click', onErrorCloseButtonClick);
  document.removeEventListener('keydown', onErrorModalEscKeydown);
  document.removeEventListener('click', onWindowWithErrorClick);
}

const showErrorMessage = () => {
  errorContainer.style.zIndex = 100;
  document.body.append(errorContainer);

  errorCloseButton.addEventListener('click', onErrorCloseButtonClick);
  document.addEventListener('keydown', onErrorModalEscKeydown);
  document.addEventListener('click', onWindowWithErrorClick);
};


const onSuccessModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessModal();
  }
};

const onSuccessModalWindowClick = (evt) => {
  if (!successContainer.querySelector('.success__inner').contains(evt.target)) {
    evt.preventDefault();
    closeSuccessModal();
  }
};

const onSuccessCloseButtonClick = () => {
  closeSuccessModal();
};

function closeSuccessModal() {
  successContainer.remove();
  successCloseButton.removeEventListener('click', onSuccessCloseButtonClick);
  document.removeEventListener('keydown', onSuccessModalEscKeydown);
  document.removeEventListener('click', onSuccessModalWindowClick);
}

const showSuccessMessage = () => {
  successContainer.style.zIndex = 100;
  document.body.append(successContainer);

  successCloseButton.addEventListener('click', onSuccessCloseButtonClick);
  document.addEventListener('keydown', onSuccessModalEscKeydown);
  document.addEventListener('click', onSuccessModalWindowClick);
};

const showLoadingProcessMessage = () => {
  loadingProcessMessageContainer.style.zIndex = 100;
  document.body.append(loadingProcessMessageContainer);
};

const removeLoadingProcessMessage = () => {
  loadingProcessMessageContainer.remove();
};

export {showUnloadMessage, showErrorMessage, showSuccessMessage, showLoadingProcessMessage, removeLoadingProcessMessage};
