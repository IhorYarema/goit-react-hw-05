import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGVjNGM3NzFiYWM0MGVkM2VmNzI5NGZlMTQ0Y2E3ZCIsIm5iZiI6MS43NDcxNTQ1NDMxODU5OTk5ZSs5LCJzdWIiOiI2ODIzNzY2ZjJlY2NiODQ2ZGU4NjQ4ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GP3p-ghYDzCHJWnUiJILZkNeWBKXUHACSmYAJcyDy18';

const options = {
  headers: {
    Authorization: TOKEN,
  },
};

export const getTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return res.data.results;
};

export const searchMovies = async query => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return res.data.results;
};

export const getMovieDetails = async id => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return res.data;
};

export const getMovieCredits = async id => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return res.data.cast;
};

export const getMovieReviews = async id => {
  const res = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return res.data.results;
};

// const url =
//   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGVjNGM3NzFiYWM0MGVkM2VmNzI5NGZlMTQ0Y2E3ZCIsIm5iZiI6MS43NDcxNTQ1NDMxODU5OTk5ZSs5LCJzdWIiOiI2ODIzNzY2ZjJlY2NiODQ2ZGU4NjQ4ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GP3p-ghYDzCHJWnUiJILZkNeWBKXUHACSmYAJcyDy18',
//   },
// };

// axios
//   .get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
