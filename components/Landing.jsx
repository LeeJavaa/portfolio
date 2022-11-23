import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

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
