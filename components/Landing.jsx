import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => (
  <main className="grid place-content-center">
    <div
      className="w-screen h-screen relative overflow-hidden"
      id="backgroundImage"
    >
      <Image
        src="/images/GradientLanding.gif"
        fill="true"
        alt="Background Image"
        priority="true"
        className="animate-fadeIn object-contain"
      />
    </div>
    <nav className="w-screen h-20 bg-darkBackground top-0 fixed flex justify-between items-center px-3 md:px-16 lg:px-24 py-5 z-10">
      <Link
        href="/"
        className="text-light text-2xl md:text-4xl font-bold animate-subtleFloat hover:text-accent hover:ease-in hover:duration-200"
        id="navLogo"
      >
        Nefelibata.
      </Link>
      <div
        role="menu"
        className="group w-8 md:w-10 h-11 cursor-pointer grid justify-center items-center relative animate-subtleFloat"
        id="navMenu"
      >
        <div className="absolute right-0 w-2/3 h-1 md:h-1.5 bg-light group-hover:bg-accent group-hover:ease-in group-hover:duration-200 before:content-[''] before:absolute before:md:w-10 before:right-0 before:h-1 before:md:h-1.5 before:w-8 before:bg-light before:-translate-y-2 before:md:-translate-y-3 before:group-hover:bg-accent before:group-hover:ease-in before:group-hover:duration-200 after:content-[''] after:absolute after:w-1/2 after:right-0 after:h-1 after:md:h-1.5 after:bg-light after:translate-y-2 after:md:translate-y-3 after:group-hover:bg-accent after:group-hover:ease-in after:group-hover:duration-200" />
      </div>
    </nav>
    <section className="absolute w-screen h-full grid place-items-center">
      <h1
        className="text-center text-5xl md:text-8xl lg:text-9xl 2xl:text-landing font-extrabold font-Spectral mx-auto w-full text-white opacity-80 animate-floatUp"
        id="heroText"
      >
        Lee Johnson
      </h1>
    </section>
  </main>
);

export default Landing;
