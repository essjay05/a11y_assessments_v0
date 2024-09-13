'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        // setLogoSrc(BlackJoyOATsLogo)
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        // setLogoSrc(WhiteJoyOATsLogo)
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="relative max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/"
          title="Return to top of Home page.">
          <p
            style={{ color: `${textColor}` }}
            className="font-bold text-4xl">
            JS
          </p>
          {/* <Logo logoImg={logoSrc}/> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-2">
            <Link href="/#about">About</Link>
          </li>
          <li className="p-2">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-2">
            <Link href="/#services">Services</Link>
          </li>
          <li className="p-2">
            <Link href="/gallery">Portfolio</Link>
          </li>
          <li className="p-2">
            <Link href="https://portal.spiro.media/order/joatl/residential"
              target="_blank"
              rel="noreferrer noopener nofollow"
              title="Open Pricing in a new tab.">Pricing</Link>
          </li>
          <li className="p-2">
            <Link
              href="#/contact">Contact</Link>
          </li>
        </ul>
        <Link
          href="https://portal.spiro.media/order/joatl/residential"
          target="_blank"
          rel="noreferrer noopener nofollow"
          title="Open Booking page in a new tab.">
          <button
            style={{ color: `${textColor}` }}
            className="px-8 py-2 border">
              Book Now</button>
        </Link>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link
                href="/"
                aria-label="Return to top of Home page.">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link
                href="/gallery"
                title="Go to Real Estate Photography Portfolio page.">
                  Portfolio</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link
                href="https://portal.spiro.media/order/joatl/residential"
                target="_blank"
                rel="noreferrer noopener nofollow"
                title="Open Pricing in a new tab.">
                  Pricing</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link
                href="/#contact">
                  Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500">
              <Link
                href="https://portal.spiro.media/order/joatl/residential"
                target="_blank"
                rel="noreferrer noopener nofollow"
                title="Open Booking page in a new tab.">
                  Book Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
