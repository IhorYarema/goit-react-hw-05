import styles from './MovieCast.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/api';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.item}>
          <img
            className={styles.image}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://via.placeholder.com/250x375?text=No+Image'
            }
            alt={actor.title}
            width="250"
            height="375"
          />
          <p className={styles.text}>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
