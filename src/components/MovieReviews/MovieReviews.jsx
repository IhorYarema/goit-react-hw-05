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
    <ul className={styles.reviews}>
      {reviews.map(review => (
        <li key={review.id} className={styles.item}>
          <p className={styles.content}>
            <strong className={styles.author}>{review.author}</strong>:{' '}
            {review.content}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
