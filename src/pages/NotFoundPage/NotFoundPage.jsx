import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>Page not found</h2>
      <Link to="/" className={styles.link}>
        Go to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
