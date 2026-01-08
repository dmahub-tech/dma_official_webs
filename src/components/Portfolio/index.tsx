'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import Link from 'next/link';
import initIsotope from '@/dva/common/initIsotope';
import portfolio from '@/dva/data/business/portfolio.json';

const Portfolio = () => {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding pb-90">
      <div className="container">
        <div className="row mb-40">
          <div className="col-lg-6">
            <div className="round-head">
              <h6 className="ls2 text-u fz-13 fw-600 mb-20 gr-green-text rest">Our portfolio</h6>
              <h3 className="fw-700">Case Studies</h3>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-end">
            <div className="filtering text-center">
              <div className="filter">
                {
                  portfolio.filters.map((filter, idx) => (
                    <span data-filter={filter.operator} className={`${idx === 0 ? 'active':''}`} key={idx}>{ filter.name }</span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="gallery col-12 rest">
            <div className="row">
              {
                portfolio.images.map((image, idx) => (
                  <div className={`col-lg-4 col-md-6 items sm-marg ${image.filter} wow fadeInUp`} data-wow-delay=".4s" key={idx}>
                    <div className="item">
                      <div className="item-img">
                        <Link href="/project-details" className="imago wow">
                            <img src={image.url} alt="image" />
                        </Link>
                      </div>
                      <div className="cont">
                        <span className="mb-5"><a href="#0">{ image.type }</a></span>
                        <h6>{ image.title }</h6>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="text-center mt-50">
            <Link href="/portfolio" className="more-butn radius-30">
                <span>See all projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio