const form = document.querySelector('.img-upload__form');
const sizeScaleControl = form.querySelector('.scale__control--value');
const previewImg = form.querySelector('.img-upload__preview img');
const buttonPlus = form.querySelector('.scale__control--bigger');
const buttonMinus = form.querySelector('.scale__control--smaller');
const MAX_VALUE = 100;
const STEP = 25;
const MIN_VALUE = 25;

// изменить размер изображения
let value = sizeScaleControl.value;
const onBiggerControlClick = () => {
  if (parseInt(sizeScaleControl.value, 10) !== MAX_VALUE) {
    value = `${parseInt(value, 10) + STEP}%`;
    previewImg.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
    sizeScaleControl.value = value;
  }
};

const onSmallerControlClick =  () => {
  if (parseInt(sizeScaleControl.value, 10) !== MIN_VALUE) {
    value = `${parseInt(value, 10) - STEP}%`;
    previewImg.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
    sizeScaleControl.value = value;
  }
};

const toScale = () => {
  buttonPlus.addEventListener('click', onBiggerControlClick);
  buttonMinus.addEventListener('click', onSmallerControlClick);
};

export {toScale};
