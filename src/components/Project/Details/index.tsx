/* eslint-disable @next/next/no-img-element */
import details from '@/dva/data/project/details.json';

const Details = () => {
  return (
    <section className="projdtal section-padding">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-80">
              <h6 className="sub-title gr-purple-red-text inline">{ details.subtitle }</h6>
              <h4>{ details.title }</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {
            details.images.map((image, idx) => (
              <div className="col-md-4" key={idx}>
                <div>
                  <img alt="" src={image} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Details