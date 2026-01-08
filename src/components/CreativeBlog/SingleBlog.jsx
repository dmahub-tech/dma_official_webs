/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const SingleBlog = ({ blog }) => {
  return (
    <div className="col-lg-4">
      <div className="item box-shadow mb-30">
        <div className="img">
          <img src={blog.image} alt="" />
          <div className="tags">
            <Link href="#" className="gat">
              { blog.tag }
            </Link>
          </div>
        </div>
        <div className="cont">
          <div className="info">
            <div className="author">
              <span>{ blog.author }</span>
            </div>
            <div className="date">
              <span>{ blog.date }</span>
            </div>
          </div>
          <div className="title">
            <h5><Link href="#">{ blog.title }</Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog