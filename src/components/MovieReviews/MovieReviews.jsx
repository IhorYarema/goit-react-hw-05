import styles from './MovieReviews.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/api';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {reviews.map(r => (
        <li key={r.id} className={styles.item}>
          <p className={styles.text}>
            <strong>{r.author}</strong>: {r.content}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
