import styles from './MovieList.module.css';

import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {/* {movies.map(movie => ( */}
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={styles.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://via.placeholder.com/250x375?text=No+Image'
              }
              alt={title}
              width="250"
              height="375"
            />
            <p className={styles.filmName}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
