const options = {
  headers: {
    Authorization:
      'Bearer <eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGVjNGM3NzFiYWM0MGVkM2VmNzI5NGZlMTQ0Y2E3ZCIsIm5iZiI6MS43NDcxNTQ1NDMxODU5OTk5ZSs5LCJzdWIiOiI2ODIzNzY2ZjJlY2NiODQ2ZGU4NjQ4ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GP3p-ghYDzCHJWnUiJILZkNeWBKXUHACSmYAJcyDy18>',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    options
  );
  return response.data.results;
};
