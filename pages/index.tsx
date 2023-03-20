import useSWR from 'swr';

import Launches from '../components/Launches';
import { Launch } from '../types/Launch';

import styles from '../styles/Home.module.css';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR<Launch[]>('/api/launches', fetcher);

  if (error) return <div>Failed to load spaceX launch data</div>;
  if (isLoading || !data) return null;

  return (
    <div className={styles.main}>
      <Launches launches={data} />
    </div>
  );
}
