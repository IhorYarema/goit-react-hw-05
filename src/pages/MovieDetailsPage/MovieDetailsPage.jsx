import styles from './MovieDetailsPage.module.css';

import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from '../../services/api';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const backLinkRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.detailsPage}>
      <Link to={backLinkRef.current} className={styles.backButton}>
        Go back
      </Link>
      <h2 className={styles.title}>{movie.title}</h2>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/250x375?text=No+Image'
        }
        alt={movie.title}
        width="250"
        height="375"
      />
      <p className={styles.text}>{movie.overview}</p>
      <ul className={styles.list}>
        <li className={styles.first_item}>
          <Link to={`/movies/${movieId}/cast`} state={{ from: backLinkRef }}>
            Cast
          </Link>
        </li>
        <li className={styles.second_item}>
          <Link to={`/movies/${movieId}/reviews`} state={{ from: backLinkRef }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
