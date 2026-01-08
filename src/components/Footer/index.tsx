'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Link from 'next/link';
import footerData from '@/dva/data/footers/main-footer.json';

type FooterProps = {
    footerClass?: string;
    footerBg?: boolean;
    business?: boolean;
    creative?: boolean;
};

const Footer = ({ footerClass, footerBg, business, creative }: FooterProps) => {
  const footerRef = useRef(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!creative) { // @ts-ignore
      footerRef.current.setAttribute("data-overlay-dark", "0");
    }
  }, [creative]);

  return (
    <footer className={footerClass} style={{ backgroundImage: footerBg ? "url('img/background/8.jpg')":"url('')" }} ref={footerRef}>
      {
        footerBg ? (
          <div className="cal pb-80 pt-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="cont">
                    <h6 className="sub-title gr-green-text">Stay Connected</h6>
                    <h4 className="fz-50">Partner with us!</h4>
                    <p className="mt-5 fw-300 fz-20">Let’s build the next big thing together.</p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-end">
                  <div>
                    <Link href="/contact" className="butn butn-md butn-rounded butn-light mt-30">
                        <span className="text">Get In Touch</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        :
        null
      }
      <div className="container pt-80 pb-80">
        <div className="row">
          <div className="col-lg-3">
            <div className="clumn">
              <div className="logo mb-30">
                <Link href="/">
                    <img src={`img/logo-${creative ?'dark':'light'}.png`} alt="" />
                </Link>
              </div>
              <div className="text">
                <p>At DIGITAL MASTERMIND ACADEMY, we&lsquo;re not just about delivering solutions; we&lsquo;re about empowering innovation. With a diverse range of expertise spanning software development, machine learning, data science, product design, UI/UX, and tech upskilling, we&lsquo;re here to turn your ideas into reality.</p>
              </div>
              <div className="social circle-bord mt-30">
                <ul className="rest horizontal-link">
                  <li>
                    <Link href={footerData.social_links.facebook}><i className="fab fa-facebook-f"></i></Link>
                    <Link href={footerData.social_links.twitter} className="ms-1"><i className="fab fa-twitter"></i></Link>
                    <Link href={footerData.social_links.youtube} className="ms-1"><i className="fab fa-youtube"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">About Us</h5>
              <ul className="cmp-links">
                {
                  footerData.links.map((link, idx) => (
                    <li className="mb-10" key={idx}>
                      <Link href={link.url}>
                       {link.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">Office</h5>
              <ul className="address">
                <li className="adrs mb-15">{ footerData.address }</li>
                <li className="eml underline mb-15">
                  <Link href="#0">{ footerData.email }</Link>
                </li>
                <li className="tel">
                  <h6 className={`${business ? 'gr-green-text': creative ? '':'gr-purple-red-text'}`}>{ footerData.phone }</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">Recent Posts</h5>
              <ul className="rc-post">
                {/*{*/}
                {/*  footerData.recent_posts.map((post, idx) => (*/}
                {/*    <li key={idx}>*/}
                {/*      <Link href={post.url} className={`flex ${idx !== footerData.recent_posts.length - 1 ? 'mb-30':''}`}>*/}
                {/*          <div className="img">*/}
                {/*            <img src={post.image} alt="" />*/}
                {/*          </div>*/}
                {/*          <div className="cont">*/}
                {/*            <h6 className="fz-16 line-height-28">{ post.title }</h6>*/}
                {/*          </div>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*  ))*/}
                {/*}*/}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`${footerBg ? 'sub-footer pb-50 pt-0 no-bord': creative ? 'sub-footer pb-50 pt-50':'sub-footer pb-50'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="horizontal-link fz-13">
                <ul className="rest">
                  <li className="mr-30">
                    <Link href="/services">
                      Privacy policy
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href="/services">
                       Legal notice
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                       Terms of service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">
                  © {currentYear} DIGITAL MASTERMIND ACADEMY. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer