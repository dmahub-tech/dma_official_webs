'use client'
const FixedSearch = () => {
  const toggleSearch = () => {
    // @ts-ignore
    document.querySelector('.search-icon').classList.toggle('active');
    // @ts-ignore
    document.querySelector('.search-area').classList.toggle('search-on');
  }

  return (
    <div className="fixed-search">
      <div className="search-area">
        <div className="search-icon cursor-pointer" onClick={toggleSearch}>
          <span className="pe-7s-search serch-icon"></span>
          <span className="pe-7s-close close-icon"></span>
        </div>
        <div className="search-form">
          <form>
            <div className="form-group">
              <input type="text" name="search" placeholder="Enter Your Keywords" />
              <button type="submit"><span className="pe-7s-search"></span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FixedSearch;