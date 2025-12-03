"use client";
import React, { useState } from 'react';
import style from './navbar.module.css';
import Link from 'next/link'; 
export default function Navbar() {
 
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  // This function closes the menu (used by the mobile links)
  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <Link href="/" className={style.logo}>
            Karson's Portfolio
          </Link>

          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>

          <div
            className={`${style.hamburgerMenu} ${isMobileNavActive ? style.active : ''}`}
            id="hamburgerMenu"
            onClick={toggleMobileNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <div
        className={`${style.mobileNav} ${isMobileNavActive ? style.active : ''}`}
        id="mobileNav"
      >
        <a href="/#about" onClick={closeMobileNav}>About</a>
        <a href="/#projects" onClick={closeMobileNav}>Projects</a>
        <a href="/#contact" onClick={closeMobileNav}>Contact</a>
      </div>
    </>
  );
}