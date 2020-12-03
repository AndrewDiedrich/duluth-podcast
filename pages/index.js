import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../src/components/shared/navBar';
import ByteCard from '../src/components/soundBar/byteCard';
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <ByteCard />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
