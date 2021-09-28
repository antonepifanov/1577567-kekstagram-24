// Источник https://learn.javascript.ru/task/random-int-min-max

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return 'Мне не разрешают работать с отрицательными числами';
  }
  if (min >= max) {
    return 'Что-то пошло не так.. Попробуй ещё раз, но теперь повнимательнее';
  }
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
getRandomInteger(3, 90);

const isStringNormal = (string, length) => !(string.length > length);
isStringNormal('При выборе за основной показатель нужно взять читабельность кода. Чем код понятнее, нагляднее, тем удобнее его рефакторить (так называется улучшение кода) и поддерживать. Тернарный оператор может как сделать код проще, так и необоснованно его усложнить. Это зависит от ситуации.', 140);
