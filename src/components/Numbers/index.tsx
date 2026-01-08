import numbers from '@/dva/data/business/numbers.json';

const Numbers = () => {
  return (
    <section className="numbers bg-light-blue">
      <div className="container no-bord">
        <div className="row">
          {
            numbers.map((number, idx) => (
              <div className="col-lg-3" key={idx}>
                <div className="bloc text-center">
                  <div className="numb valign mb-20">
                    <h3 className="fz-60 fw-300 full-width">{ number.value }{ number.operator ? <i className="fz-30">{ number.operator }</i> : null }</h3>
                  </div>
                  <div className="cont">
                    <h6 className="fw-600 text-u ls1 fz-14">{ number.title }</h6>
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

export default Numbers