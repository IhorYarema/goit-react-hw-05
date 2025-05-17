import styles from './MoviesPage.module.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
    searchMovies(value).then(setMovies);
  };

  return (
    <div className={styles.moviesPage}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="query" defaultValue={query} className={styles.input} />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
