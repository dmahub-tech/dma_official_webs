'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

const Navbar = ({theme = 'light', defaultLogoTheme = 'light'}:{theme?: string, defaultLogoTheme?: string}) => {
  const [logoTheme, setLogoTheme] = useState(defaultLogoTheme);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      // @ts-ignore
      navbar.classList.add("nav-scroll");
      setLogoTheme("dark");
    } else {
      // @ts-ignore
      navbar.classList.remove("nav-scroll");
      if(defaultLogoTheme === 'light') {
        setLogoTheme("light");
      }
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        // @ts-ignore
        navbar.classList.add("nav-scroll");
        setLogoTheme("dark");
      } else {
        // @ts-ignore
        navbar.classList.remove("nav-scroll");
        if(defaultLogoTheme === 'light') {
          setLogoTheme("light");
        }
      }
    });
  }, [navbarRef]);
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
            { logoTheme === 'dark' && <h1 className="logo-text-dark">DIGITAL MASTERMIND ACADEMY</h1> }
            {logoTheme === 'light' && <h1 className="logo-text-light">Master
Digital Technology</h1>}
            {!logoTheme && <h1 className="logo-text-dark">DIGITAL MASTERMIND ACADEMY</h1>}
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link">Services</Link>
            </li>
               <li className="nav-item">
              <Link href="/service" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About Us</Link>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <Link href="/portfolio" className="nav-link">Portfolio</Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <Link href="/blog" className="nav-link">Blog</Link>*/}
            {/*</li>*/}
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a href="#0"><i className="fab fa-facebook-f"></i></a>
                <a href="#0"><i className="fab fa-twitter"></i></a>
                <a href="#0"><i className="fab fa-dribbble"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;