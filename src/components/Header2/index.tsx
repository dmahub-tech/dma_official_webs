'use client';

import { useEffect } from 'react';
import parallaxie from '@/dva/common/parallaxie';

const Header2 = ({ bg, title, subTitle }: {bg: string, title?: string, subTitle?: string}) => {
  useEffect(() => {
    // @ts-ignore
    new parallaxie('.pg-header-bus.bg-img.parallaxie');
  }, []);

  return (
    <header className="pg-header-bus bg-img parallaxie valign" data-background={bg} data-overlay-dark="5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="caption text-center">
              <h6 className="sub-title fw-400">{title ?? 'Learn more about DIGITAL MASTERMIND ACADEMY'}</h6>
              {subTitle ? <h1 className="fz-60 fw-600">{subTitle}</h1> :
                  <h1 className="fz-60 fw-600">Where Creativity Meets <br/> Innovation</h1>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header2