/* eslint-disable @next/next/no-img-element */
import team from '@/dva/data/business/team.json';
import Link from "next/link";

const Team = () => {
  return (
    <section className="team-clas section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-13 fw-700 mb-20 gr-green-text rest">Our Staff</h6>
              <h2 className="fw-700">Creative Minds</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {
            team.map((member, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`item ${index !== team.length - 1 ? 'md-mb50':''}`}>
                  <div className="img">
                    <img src={member.picture} alt="" />
                    <div className="social">
                      <Link href="#0" className="me-1"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#0" className="me-1"><i className="fab fa-twitter"></i></Link>
                      <Link href="#0"><i className="fab fa-behance"></i></Link>
                    </div>
                  </div>
                  <div className="info text-center mt-25">
                    <h6 className="mb-5 fw-600">{ member.name }</h6>
                    <span className="fz-15">{ member.position }</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team