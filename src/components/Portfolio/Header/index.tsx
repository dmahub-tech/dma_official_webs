type PHeaderProps = {
    title: string;
    subTitle: string;
};

const PortfolioHeader = ({ title, subTitle }: PHeaderProps) => {
  return (
    <header className="pg-header-sipm pg-work gr-purple-light-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="caption text-center">
              <span className="fz-16 mb-10 gr-purple-red-text">{ subTitle }</span>
              <h1 className="fz-60">{ title }</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PortfolioHeader