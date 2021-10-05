const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Антон',
  'Максим',
  'Алёна',
  'Михаил',
  'Дмитрий',
];

const DESCRIPTIONS = [
  'Около рая',
  'Указатель',
  'Вид на море',
  '(  Y  ) и фотик',
  'Завтрак',
  'Black star',
  'Клубника',
  'Морс',
  'Самолёт',
  'Обувь',
  'Зной',
  'Audi',
  'Перекус',
  'Котик',
  'Ноги в тепле',
  'На высоте',
  'Хор',
  'Ретро',
  'Инновации',
  'Пальмы',
  'Салатик',
  'Закат',
  'Краб',
  'Концерт',
  'Сафари',
];

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

let commentsCount = 0;

const createPhotosDescriptions = DESCRIPTIONS.map((description, index) => {
  const indexNumber = index + 1;

  const getAvatarUrl = () => {
    const avatarUrl = getRandomPositiveInteger(1, 6);
    return `img/avatar-${avatarUrl}.svg`;
  };

  const getMessages = () => {
    let message = '';
    const numberOfMessage = getRandomPositiveInteger(1, 2);
    for (let counter = 0; counter < numberOfMessage; counter++) {
      let randomMessageIndex = getRandomPositiveInteger(0, COMMENTS.length - 1);
      while (message === COMMENTS[randomMessageIndex]) {
        randomMessageIndex = getRandomPositiveInteger(0, COMMENTS.length - 1);
      }
      message = message + COMMENTS[randomMessageIndex];
    }
    return message;
  };

  const getName = () => NAMES[getRandomPositiveInteger(0, NAMES.length - 1)];

  const createComment = () => {
    commentsCount = commentsCount + 1;
    return {
      id: commentsCount,
      avatar: getAvatarUrl(),
      message: getMessages(),
      name: getName(),
    };
  };

  const createComments = () => {
    const numberOfComments = getRandomPositiveInteger(1, 4);
    const comments = Array.from({length: numberOfComments}, createComment);
    return comments;
  };

  return {
    id: indexNumber,
    url: `photos/${indexNumber}.jpg`,
    description: description,
    likes: getRandomPositiveInteger(15, 200),
    comments: createComments(),
  };
});
