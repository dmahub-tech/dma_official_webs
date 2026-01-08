import headerData from '@/dva/data/project/header.json';
import Link from "next/link";

const Header = () => {
  return (
    <section className="works-header bg-img parallaxie d-flex align-items-end" style={{ backgroundImage: "url('/img/portfolio/project2/bg.jpg')" }} data-overlay-dark="4">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont mb-40">
              <h6>art & illustration</h6>
              <h2>Inspiring new space.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p><Link href="#0">{ headerData.client }</Link></p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{ headerData.date }</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                { 
                  headerData.categories.map((category, idx) => (<Link href="#0" key={idx}>{ category }{ idx !== headerData.categories.length - 1 ? <> ,</> : null }</Link>))
                }
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                { 
                  headerData.tags.map((tags, idx) => (<Link href="#0" key={idx}>{ tags }{ idx !== headerData.tags.length - 1 ? <> , </> : null }</Link>))
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header