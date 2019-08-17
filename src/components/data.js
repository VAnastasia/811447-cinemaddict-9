const FILMS_AMOUNT = 15;

const TITLES_FILMS = [
  `Snow Cake`,
  `Goodnight, Mister Tom`,
  `The Aftermath`,
  `Instant Family`,
  `The Professor`,
  `Us`,
  `Otherhood`,
  `Anywhere But Here`,
  `The Devil Wears Prada`,
  `Dog Day Afternoon`,
  `Glass`,
  `The Great Race`,
  `Booksmart`,
  `John Wick`,
  `Eat Pray Love`
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const GENRES = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`
];

const getDescription = (array) => shuffleArray(array).slice(0, Math.ceil(Math.random() * 3)).join(``);

const shuffleArray = (array) => {
  let j;
  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const getRandomItemArray = (array) => array[Math.floor(Math.random() * array.length)];

const getFilm = () => ({
  title: getRandomItemArray(TITLES_FILMS),
  description: getDescription(DESCRIPTIONS),
  poster: getRandomItemArray(POSTERS),
  genre: getRandomItemArray(GENRES),
  rating: (Math.random() * 9).toFixed(1),
  comments: Math.round(Math.random() * 20),
  year: 2000 + Math.round(Math.random() * 20),
  isWatchlist: true,
  isWatched: false,
  isFavorite: false
});

const getFilmList = (count) => {
  return new Array(count).fill().map(() => getFilm());
};

export const films = getFilmList(FILMS_AMOUNT);
