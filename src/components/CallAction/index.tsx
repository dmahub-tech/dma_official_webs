'use client';

import { useEffect } from 'react';
import parallaxie from '@/dva/common/parallaxie';

const CallToAction = () => {
  useEffect(() => {
    parallaxie('.call-action.bg-img.parallaxie');
  }, []);

  return (
    <section className="section-padding bg-img parallaxie call-action" data-background="/img/background/21.jpg" data-overlay-dark="6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center">
              <h2 className="mb-5">Have a project in mind ? Let&lsquo;s discuss</h2>
              <p>Ready to Elevate Your Vision? Let&lsquo;s Turn Ideas into Reality. Let&lsquo;s Discuss Your Project Today.</p>
              <div
                  data-cal-namespace=""
                  data-cal-link="sogtheimmortal/30min"
                  data-cal-config='{"layout":"month_view"}'
                  className="butn butn-md gr-purple-red-bg text-light m-auto mt-30 w-50 c-btn">
                  <span className="text slide-up">Set Appointment Now</span>
                  <span className="text slide-down">Set Appointment Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction