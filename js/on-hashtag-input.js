const hashtagField = document.querySelector('.text__hashtags');
const MAX_HASHTAG_COUNT = 5;

const onHashtagInput = () => {
  const hashtagKit = hashtagField.value.toLowerCase().trim().split(' ');
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  hashtagField.setCustomValidity('');
  hashtagKit.forEach((hashtag, index, array) => {
    if (hashtagKit.length > MAX_HASHTAG_COUNT) {
      hashtagField.setCustomValidity(`Нельзя добавлять более ${MAX_HASHTAG_COUNT} хэш-тегов`);
      hashtagField.style.borderColor = 'red';
    } else if (array.includes(hashtag, index + 1)) {
      hashtagField.setCustomValidity('Xэш-тег не может повторяться');
    } else if (hashtag.length > 0) {
      if(!re.test(hashtag)) {
        hashtagField.setCustomValidity('Xэш-тег начинается с # и состоит из букв и чисел. Максимальная длина одного хэш-тега 20 символов. Хэш-теги разделяются пробелами');
      }
    } else {
      hashtagField.setCustomValidity('');
    }
  });
  hashtagField.reportValidity();
  if (!hashtagField.checkValidity()) {
    hashtagField.style.borderColor = 'red';
  } else {
    hashtagField.style.borderColor = '';
  }
};

export {onHashtagInput};
