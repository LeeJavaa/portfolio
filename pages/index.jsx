import Head from 'next/head';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <div className="bg-darkBackground w-screen h-screen">
      <Head>
        <title>Nefelibata | Lee Johnson Portfolio </title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Lee Johnson Portfolio site titled Nefelibata"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  );
}
