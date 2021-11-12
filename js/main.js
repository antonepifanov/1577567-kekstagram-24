import {renderPictures} from './render-pictures.js';
import {setUserFormSubmit, closeModal} from './render-form-modal.js';
import {showUnloadMessage} from './info-messages.js';
import {getData} from './api.js';
import {renderPictureModal} from './render-picture-modal.js';
import {getFiltration} from './get-filtration.js';

const DATA = 'https://24.javascript.pages.academy/kekstagram/data';

getData(DATA, renderPictures, getFiltration, renderPictureModal, showUnloadMessage);
setUserFormSubmit(closeModal);
