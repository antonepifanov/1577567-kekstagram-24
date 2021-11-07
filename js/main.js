import {renderPictures} from './render-pictures.js';
import {setUserFormSubmit, closeModal} from './render-form-modal.js';
import {showUnloadMessage} from './info-messages.js';
import {getData} from './api.js';
import {renderPictureModal} from './render-picture-modal.js';

getData(renderPictures, renderPictureModal, showUnloadMessage);

setUserFormSubmit(closeModal);
