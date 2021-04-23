import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import styles from '../styles/Home.module.css';

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>My First Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello World</h1>
        <Image
          src="/hero-image.jpg"
          width={1000}
          height={500}
          layout="responsive"
          objectPosition="center"
          objectFit="cover"
        />
      </main>
    </div>
  );
}
