const hashtagtField = document.querySelector('.text__hashtags');
const hashtagKit = hashtagtField.value.toLowerCase().split(' ');

const isHashtagSingle = () => {
  hashtagKit.forEach((hashtag, index, currentArray) => {
    if (currentArray.includes(hashtag, index + 1)) {
      return false;
    }
  });
};

export {isHashtagSingle};
