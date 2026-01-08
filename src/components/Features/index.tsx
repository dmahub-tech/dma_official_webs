'use client';

import Tilt from 'react-parallax-tilt';
import features from '@/dva/data/business/features.json';

const Features = ({ services }: {services?: any}) => {
  return (
    <section className={`feat-exp section-padding ${services ? 'pb-50':'pb-0'} bg-dark-blue`} data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className={`col-lg-4 ${services ? '':'col-md-6'} valign`}>
            <div className="exp">
              {
                services ?
                <h2 className="fw-600">Create your own unique website</h2>
                :
                <h3 className="fw-700">Create your own <span className="fw-300">unique website</span></h3>
              }
            </div>
          </div>
          <div className={`col-lg-4 ${services ? '':'col-md-6'} valign`}>
            <div className={`exp ${services ? '':'m-auto'}`}>
              <div className="flex">
                <h2 className={`lg-text gr-green-text ${services ? 'fw-600':'fw-700 line-height-1'}`}>{ features.years }</h2>
                <div className="valign ml-20">
                  <h6 className="text-u ls4 fz-14 line-height-28">years <br /> in the field</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="text">
              {
                services ? <p>{ features.srtext }</p> : <p>{ features.text }</p>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-100">
        <div className="row">
          {
            features.feats.map((feature, idx) => (
              services ?
              (
                <div key={idx} className="col-lg-3 col-md-6 hover3d">
                  <div className="feat-item-img hover3d-child bg-img d-flex align-items-end" style={{ backgroundImage: `url('${feature.bg}')` }} data-overlay-dark="4">
                    <div className="num">{ feature.numb }</div>
                    <div className="cont">
                      <h6 className="fz-22 fw-500">{ feature.type }</h6>
                      <span className="fz-14 opacity-8 mb-5">{ feature.title }</span>
                    </div>
                  </div>
                </div>
              )
              :
              (
                <Tilt key={idx} className="col-lg-3 col-md-6 hover3d" tiltMaxAngleY={10} tiltMaxAngleX={10}>
                  <div className="feat-item-img hover3d-child bg-img d-flex align-items-end" style={{ backgroundImage: `url('${feature.bg}')` }} data-overlay-dark="4">
                    <div className="num">{ feature.numb }</div>
                    <div className="cont">
                    <span className="fz-14 opacity-8 mb-5">{ feature.title }</span>
                    <h6 className="fz-20">{ feature.type }</h6>
                    </div>
                  </div>
                </Tilt>
              )
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Features