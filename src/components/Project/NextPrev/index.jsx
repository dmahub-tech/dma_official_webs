import Link from 'next/link';

const NextPrev = () => {
  return (
    <section className="nex-prv">
      <div className="prv">
        <div className="img bg-img" style={{ backgroundImage: "url('img/portfolio/project2/bg.jpg')" }}>
          <div className="text-center">
            <h5>
              <Link href="/project-details"><a>Colorful Small Cards</a></Link>
            </h5>
            <span className="sub-title">Prev Project</span>
          </div>
          <div className="overly gr-purple-red-bg"></div>
        </div>
      </div>
      <div className="nxt">
        <div className="img bg-img" style={{ backgroundImage: "url('img/portfolio/project2/bg1.jpg')" }}>
          <div className="text-center">
            <h5>
              <Link href="/project-details"><a>Bright Captive</a></Link>
            </h5>
            <span className="sub-title">Next Project</span>
          </div>
          <div className="overly gr-purple-red-bg"></div>
        </div>
      </div>
    </section>
  )
}

export default NextPrev