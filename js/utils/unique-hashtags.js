const uniqueHashtags = (array) => {
  const uniqueHashtagsKit = [];
  array.forEach((hashtag) => {
    if (!uniqueHashtagsKit.includes(hashtag)) {
      uniqueHashtagsKit.push(hashtag);
    }
    return uniqueHashtagsKit.length;
  });
};

export {uniqueHashtags};
