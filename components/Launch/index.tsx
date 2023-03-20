import { Launch } from '../../interfaces';

import styles from './launch.module.css';

type LaunchProps = {
  launch: Launch;
};

function LaunchComponent(props: LaunchProps) {
  const { launch } = props;

  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        <h2>{launch.name}</h2>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={launch.imageSrc} />
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsContent}>
          <div className={styles.detailsItem}>
            <p className={styles.tag}>Status</p>
            <p data-test="status-text" className={launch.status ? styles.successText : styles.errorText}>
              <b>{launch.status ? 'Successful' : 'Failure'}</b>
            </p>
          </div>

          {!launch.status && (
            <div className={styles.detailsItem} data-test="reason">
              <p className={styles.tag}>Reason</p>
              <p className={styles.failReason}>{launch.details}</p>
            </div>
          )}

          <div className={styles.detailsItem}>
            <p className={styles.tag}>Date</p>
            <p>{new Date(launch.date).toLocaleDateString()}</p>
          </div>

          <div className={styles.detailsItem}>
            <p className={styles.tag}>Core</p>
            <p>{launch.core}</p>
          </div>

          <div className={styles.detailsItem}>
            <p className={styles.tag}>Payloads</p>
            <div>
              {launch.payloads.map((payload) => (
                <p key={payload.id}>
                  <b>{payload.type}</b> ({payload.id})
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchComponent;
