import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => (
  <main className="grid place-content-center">
    <div className="w-screen h-screen relative overflow-hidden" id='backgroundImage'>
      <Image
        src="/images/GradientLanding.gif"
        fill="true"
        alt="Background Image"
        priority="true"
        className="animate-fadeIn object-contain"
      />
    </div>
    <nav className="w-screen h-20 bg-darkBackground top-0 fixed flex justify-between items-center px-3 lg:px-24 py-5">
      <Link
        href="/"
        className="text-light text-2xl lg:text-4xl font-bold animate-subtleFloat"
        id='navLogo'
      >
        Nefelibata.
      </Link>
      <div
        role="menu"
        className=" w-8 lg:w-10 h-11 cursor-pointer grid justify-center items-center relative animate-subtleFloat"
        id='navMenu'
      >
        <div className="absolute right-0 w-2/3 h-1 lg:h-1.5 bg-light before:content-[''] after:content-[''] before:absolute after:absolute before:w-8 before:lg:w-10 before:right-0 before:h-1 before:lg:h-1.5 after:w-1/2 after:right-0 after:h-1 after:lg:h-1.5 before:bg-light after:bg-light before:-translate-y-2 after:translate-y-2 before:lg:-translate-y-3 after:lg:translate-y-3" />
      </div>
    </nav>
    <section className="absolute w-screen h-full grid place-items-center">
      <h1 className="text-center text-5xl lg:text-9xl 2xl:text-landing font-extrabold font-Spectral mx-auto w-full text-white opacity-80 animate-floatUp" id='heroText'>
        Lee Johnson
      </h1>
    </section>
  </main>
);

export default Landing;
