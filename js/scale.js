const MAX_VALUE = 100;
const STEP = 25;
const MIN_VALUE = 25;

const form = document.querySelector('.img-upload__form');
const scaleControlValue = form.querySelector('.scale__control--value');
const previewImg = form.querySelector('.img-upload__preview img');
const buttonPlus = form.querySelector('.scale__control--bigger');
const buttonMinus = form.querySelector('.scale__control--smaller');

let value = scaleControlValue.value;

const onBiggerControlClick = () => {
  if (parseInt(value, 10) !== MAX_VALUE) {
    value = `${parseInt(value, 10) + STEP}%`;
    previewImg.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
    scaleControlValue.value = value;
  }
};

const onSmallerControlClick = () => {
  if (parseInt(value, 10) !== MIN_VALUE) {
    value = `${parseInt(value, 10) - STEP}%`;
    previewImg.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
    scaleControlValue.value = value;
  }
};

const scale = () => {
  buttonPlus.addEventListener('click', onBiggerControlClick);
  buttonMinus.addEventListener('click', onSmallerControlClick);
};

const scaleCancel = () => {
  buttonPlus.removeEventListener('click', onBiggerControlClick);
  buttonMinus.removeEventListener('click', onSmallerControlClick);
  previewImg.style.transform = 'scale(1)';
  value = `${MAX_VALUE}%`;
};

export {scale, scaleCancel};
