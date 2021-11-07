const pictureUploadForm = document.querySelector('.img-upload__form');
const bigPictureImage = pictureUploadForm.querySelector('.img-upload__preview img');
const sliderElementBlock = pictureUploadForm.querySelector('.effect-level');
const sliderElement = pictureUploadForm.querySelector('.effect-level__slider');
const valueElement = pictureUploadForm.querySelector('.effect-level__value');

const FILTERS_CONFIG = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

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

const toApplyFilter = (filter) => {
  sliderElementBlock.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(filter.options);
  sliderElement.noUiSlider.on('update', (values, handle) => {
    bigPictureImage.style.filter = `${filter.style}(${values[handle]}${filter.unit})`;
    valueElement.value = values[handle];
  });
};

const toUnsetEffect = () => {
  bigPictureImage.className = '';
  bigPictureImage.style.filter = 'none';
  valueElement.value = 'none';
  bigPictureImage.classList.add('effects__preview--none');
  sliderElementBlock.classList.add('hidden');
};

const onFiltersChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    bigPictureImage.className = '';
    bigPictureImage.classList.add(`effects__preview--${evt.target.value}`);
    if (evt.target.value === 'none') {
      sliderElementBlock.classList.add('hidden');
      bigPictureImage.style.filter = 'none';
      valueElement.value = 'none';
    } else if (evt.target.value === 'chrome') {
      toApplyFilter(FILTERS_CONFIG.chrome);
    } else if (evt.target.value === 'sepia') {
      toApplyFilter(FILTERS_CONFIG.sepia);
    } else if (evt.target.value === 'marvin') {
      toApplyFilter(FILTERS_CONFIG.marvin);
    } else if (evt.target.value === 'phobos') {
      toApplyFilter(FILTERS_CONFIG.phobos);
    } else if (evt.target.value === 'heat') {
      toApplyFilter(FILTERS_CONFIG.heat);
    }
  }
};

export {onFiltersChange, toUnsetEffect};
