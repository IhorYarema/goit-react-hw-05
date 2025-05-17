import styles from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <div className={styles.page}>
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
