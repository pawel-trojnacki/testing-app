import Head from 'next/head';
import { ReactElement } from 'react';

export default function About(): ReactElement {
  return (
    <div>
      <Head>
        <title>My First Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello from about</h1>
      </main>
    </div>
  );
}
