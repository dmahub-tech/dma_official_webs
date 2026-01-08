'use client';

/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import brands from '@/dva/data/business/clients.json';
import Split from "@/dva/components/Split";
import Link from "next/link";

const Clients = ({slides}: {slides?: number}) => {
  return (
      <section className="clients-carsouel shad up">
          <div className="container radius-15">
              <div className="row">
                  <div className="col-sm-2 sm-hide">
                      <div className="item flex">
                          <div className="icon-flex mr-20">
                              <h2 className="fz-40">30 <span>+</span></h2>
                          </div>
                          <div className="cont-flex valign">
                              <div>
                                  <span className="text-left fz-13 fw-500">Happy <br/> Clients</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-10 valign">
                      <Swiper
                          id="content-carousel-container-unq-2"
                          className="swiper-container"
                          slidesPerView={slides ? 5 : 4}
                          spaceBetween={0}
                          speed={1000}
                          loop={true}
                          breakpoints={{
                              0: {
                                  slidesPerView: 3,
                              },
                              640: {
                                  slidesPerView: 3,
                              },
                              768: {
                                  slidesPerView: 3,
                              },
                              1024: {
                                  slidesPerView: slides ? 5 : 4
                              }
                          }}
                      >
                          {
                              brands.map((brand, idx) => (
                                  <SwiperSlide key={idx}>
                                      <div className="item">
                                          <div className="img">
                                              <span className="link-s" >{brand.title}</span>
                                              {/*<img src={brand.image} alt=""/>*/}
                                              {/*<Split>*/}
                                              {/*    <Link href="#" className="link link-s" data-splitting>{brand.title}</Link>*/}
                                              {/*</Split>*/}
                                          </div>
                                      </div>
                                  </SwiperSlide>
                              ))
                          }
                      </Swiper>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Clients