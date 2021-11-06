import {renderPictures} from './render-pictures.js';
import './render-picture-modal.js';
import {setUserFormSubmit, closeModal} from './render-form-modal.js';
import {getData} from './api.js';

getData((pictures) => {
  renderPictures(pictures);
});

setUserFormSubmit(closeModal);
