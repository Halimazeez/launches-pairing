import useSWR from 'swr';
import { Launch } from '../interfaces';

import styles from '../styles/Home.module.css';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR<Launch[]>('/api/launches', fetcher);

  console.log(data);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  return <div className={styles.container}>Hi</div>;
}
