import contact from '@/dva/data/contact/contact.json';

const Info = () => {
  return (
    <div className="cont-info pt-80 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-3">
                <div className="item flex md-mb30">
                  <span className="icon fz-20 mr-10 pe-7s-call"></span>
                  <h6 className="fz-14">{ contact.phone }</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item flex md-mb30">
                  <span className="icon fz-20 mr-10 pe-7s-mail"></span>
                  <h6 className="fz-14">{ contact.email }</h6>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="item flex">
                  <span className="icon fz-20 mr-10 pe-7s-map-marker"></span>
                  <h6 className="fz-14">{ contact.address }</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info