'use client';

import { useState, useEffect } from 'react';
// @ts-ignore
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import parallaxie from '@/dva/common/parallaxie';
import Link from "next/link";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // @ts-ignore
    new parallaxie('.video-wrapper.bg-img.parallaxie');
  }, []);

  const openVideo = (e: any) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="video-wrapper section-padding bg-img parallaxie valign" data-background="/img/portfolio/project2/bg1.jpg" data-overlay-dark="4">
          <div className="full-width text-center">
            <Link className="vid" href="https://vimeo.com/127203262" onClick={openVideo}>
              <div className="vid-butn">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="vimeo"
              autoplay
              isOpen={isOpen}
              videoId="127203262"
              onClose={() => setOpen(false)}
            />
          )
      }
    </section>
  )
}

export default Video