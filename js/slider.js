const pictureUploadForm = document.querySelector('.img-upload__form');
const bigPictureImage = pictureUploadForm.querySelector('.img-upload__preview img');
const sliderElementBlock = pictureUploadForm.querySelector('.effect-level');
const sliderElement = pictureUploadForm.querySelector('.effect-level__slider');
const valueElement = pictureUploadForm.querySelector('.effect-level__value');

bigPictureImage.classList.add('effects__preview--none');
sliderElementBlock.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const onFiltersChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    bigPictureImage.className = '';
    bigPictureImage.classList.add(`effects__preview--${evt.target.value}`);
    if (evt.target.value === 'none') {
      sliderElementBlock.classList.add('hidden');
      bigPictureImage.style.filter = 'none';
      valueElement.value = 'none';
    } else if (evt.target.value === 'chrome') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        bigPictureImage.style.filter = `grayscale(${values[handle]})`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'sepia') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        bigPictureImage.style.filter = `sepia(${values[handle]})`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'marvin') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        bigPictureImage.style.filter = `invert(${values[handle]}%)`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'phobos') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        bigPictureImage.style.filter = `blur(${values[handle]}px)`;
        valueElement.value = values[handle];
      });
    } else if (evt.target.value === 'heat') {
      sliderElementBlock.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      sliderElement.noUiSlider.on('update', (values, handle) => {
        bigPictureImage.style.filter = `brightness(${values[handle]})`;
        valueElement.value = values[handle];
      });
    }
  }
};

export {onFiltersChange};
