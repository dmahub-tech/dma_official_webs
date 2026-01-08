import descriptionData from '@/dva/data/project/description.json';

const Description = () => {
  return (
    <section className="intro-section section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4><span>02 .</span> Description</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="fz-18 fw-300">{ descriptionData.description }</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features-process position-re mt-50">
        <div className="container">
          <div className="row">
            {
              descriptionData.features.map((feature, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="item flex">
                    <div className="fz-40 mr-30 lf-culm">
                      <span className="numb">{ feature.numb }</span>
                    </div>
                    <div className="cont">
                      <h6 className="mb-10 fw-600">{ feature.title }</h6>
                      <p>{ feature.details }</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="circle-pattern bottom right"></div>
      </div>
    </section>
  )
}

export default Description