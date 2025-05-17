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
    <div className={styles.page}>
      <h1 className={styles.heading}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
