import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {id, imageUrl, avatarUrl, author, topic, title} = blog
  return (
    <Link to={`/blogs/${id}`} className="link-style">
      <div className="blog-item">
        <img src={imageUrl} alt="blog" className="blog-image" />
        <div className="blog-info-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-author-name-container">
            <img src={avatarUrl} alt="avatar" className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
