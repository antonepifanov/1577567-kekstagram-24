const hashtagField = document.querySelector('.text__hashtags');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_HASHTAG_COUNT = 5;
let printHashtags =[];

const onHashtagInput = () => {
  printHashtags = hashtagField.value.toLowerCase().trim().split(' ');
  hashtagField.setCustomValidity('');
  printHashtags.forEach((hashtag, index, hashtags) => {
    if (printHashtags.length > MAX_HASHTAG_COUNT) {
      hashtagField.setCustomValidity(`Нельзя добавлять более ${MAX_HASHTAG_COUNT} хэш-тегов`);
      hashtagField.style.borderColor = 'red';
    } else if (hashtags.includes(hashtag, index + 1)) {
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
