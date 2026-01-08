'use client'

import { useEffect } from 'react';
import Link from "next/link";

const StickyBar = () => {

  useEffect(() => {
    document.body.classList.add('index-bus1');

    const removeClasses = [
      'land-demo2', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  useEffect(() => {
    const sticky_bar = document.querySelector('.sticky-bar');
    if (window.pageYOffset > 600) {
      // @ts-ignore
      sticky_bar.classList.add("active");
    } else {
      // @ts-ignore
      sticky_bar.classList.remove("active");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        // @ts-ignore
        sticky_bar.classList.add("active");
      } else {
        // @ts-ignore
        sticky_bar.classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="sticky-bar">
      <div className="left-bar">
        <Link href="/contact" className="contact-butn">
            <span>Contact Us</span>
            <span className="icon ml-10">
              <i className="far fa-comment"></i>
            </span>
        </Link>
      </div>
      <div className="right-bar">
        <div className="social-text fz-13">
          <span className="text">Follow Us</span>
          <a href="#0">Fa.</a>
          <i>/</i>
          <a href="#0">Tw.</a>
          <i>/</i>
          <a href="#0">Be.</a>
        </div>
      </div>
    </div>
  )
}

export default StickyBar