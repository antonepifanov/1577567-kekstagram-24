// Источник https://learn.javascript.ru/task/random-int-min-max

const getRandomInteger = (min, max) => {
  let rand;
  switch (true) {
    case min < 0 || max < 0:
      return 'Мне не разрешают работать с отрицательными числами';
    case min > max:
      rand = max - 0.5 + Math.random() * (min - max + 1);
      return Math.round(rand);
    case min===max:
      return rand = min;
    default:
      rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
  }
};
getRandomInteger(3, 90);

const isLengthOfStringCorrect = (string, length) => !(string.length > length);
isLengthOfStringCorrect('При выборе за основной показатель нужно взять читабельность кода. Чем код понятнее, нагляднее, тем удобнее его рефакторить (так называется улучшение кода) и поддерживать. Тернарный оператор может как сделать код проще, так и необоснованно его усложнить. Это зависит от ситуации.', 140);

