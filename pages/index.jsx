import { useState, useEffect } from 'react';
import Head from 'next/head';
import Landing from '../components/Landing';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const showMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <div className="bg-darkBackground w-screen h-screen">
      <Head>
        <title>Nefelibata | Lee Johnson Portfolio </title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Lee Johnson Portfolio site titled Nefelibata"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar showMenu={showMenu} menu={menu} />
          <Landing />
        </>
      )}
    </div>
  );
}
