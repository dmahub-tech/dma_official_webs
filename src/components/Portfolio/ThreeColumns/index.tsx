'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import Link from 'next/link';
import initIsotope from '@/dva/common/initIsotope';
import data from '@/dva/data/portfolio/three-columns.json';

const ThreeColumns = () => {
  useEffect(() => {
    //= Init Isotope
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="filtering d-flex justify-content-center col-12 mb-10">
            <div className="filter">
              {
                data.filters.map((filter, index) => (
                  <span data-filter={filter.operator} className={index == 0 ? 'active':''} key={index}>{ filter.name }</span>
                ))
              }
            </div>
          </div>
        </div>
        <div className="gallery col-12 rest">
          <div className="row">
            {
              data.gallery.map((item, index) => (
                <div className={`col-lg-4 col-md-6 items md-getter ${item.filter} wow fadeInUp`} data-wow-delay=".4s" key={index}>
                  <div className="item-img">
                    <Link href={`/portfolio/${item.slug}`} className="imago wow">
                        <img src={item.image} alt="image" />
                        <div className="item-img-overlay"></div>
                    </Link>
                  </div>
                  <div className="cont mt-30 text-center">
                    <h6 className="fw-500">{ item.title }</h6>
                    <p>{ item.type }</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeColumns