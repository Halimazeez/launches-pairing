import { default as LaunchComponent } from '../Launch';
import { Launch } from '../../interfaces';
import styles from '../../styles/Home.module.css';

type LaunchesProps = {
  launches: Launch[];
};

function Launches(props: LaunchesProps) {
  const { launches } = props;

  return (
    <div className={styles.grid} data-test="launches-grid">
      {launches.map((launch) => (
        <LaunchComponent key={launch.id} launch={launch} />
      ))}
    </div>
  );
}

export default Launches;
