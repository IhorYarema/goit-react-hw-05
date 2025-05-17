import styles from './HomePage';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
