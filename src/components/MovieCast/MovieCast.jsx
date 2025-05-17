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
          <p className={styles.text}>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
