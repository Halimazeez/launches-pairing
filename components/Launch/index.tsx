import Link from 'next/link';
import { Launch } from '../../interfaces';

import styles from '../../styles/Home.module.css';

type LaunchProps = {
  launch: Launch;
};

function LaunchComponent(props: LaunchProps) {
  const { launch } = props;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{launch.name}</h2>
      <div className={styles.detailsContainer}>
        <img className={styles.logo} src={launch.imageSrc} />
        <div className={styles.detailsContent}>
          <span className={styles.detailsItem}>
            <p className={styles.tag}>Date</p>
            <p>{new Date(launch.date).toLocaleDateString()}</p>
          </span>
          <span className={styles.detailsItem}>
            <p className={styles.tag}>Core</p>
            <p>{launch.core}</p>
          </span>
          <span className={styles.detailsItem}>
            <p className={styles.tag}>Status</p>
            <p className={launch.status ? styles.successText : styles.errorText}>
              {launch.status ? 'Successful launch' : 'Failure'}
            </p>
          </span>
          {!launch.status && (
            <span className={styles.detailsItem}>
              <p className={styles.tag}>Reason</p>
              <p className={styles.failReason}>{launch.details}</p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LaunchComponent;
