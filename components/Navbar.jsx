import React from 'react';
import Link from 'next/link';

const Navbar = (props) => {
  const showMenu = props.showMenu;
  const menu = props.menu;

  return (
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
        onClick={showMenu}
      >
        <div
          className={`menu-icon ${
            menu
              ? '-translate-x-12 after:w-8 after:md:w-10 invisible before:visible before:-translate-y-0 before:translate-x-12 before:rotate-45 after:visible after:translate-y-0 after:translate-x-12 after:-rotate-45 opened'
              : 'closed'
          }`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
