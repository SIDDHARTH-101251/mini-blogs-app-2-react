// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, loading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(` https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({
      blogData: updatedData,
      loading: false,
    })
  }

  render() {
    const {blogData, loading} = this.state
    const {title, author, imageUrl, avatarUrl, content} = blogData
    return loading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-details-container">
        <h1 className="title-blog-details">{title}</h1>
        <div className="avatar-author-name-container">
          <img src={avatarUrl} alt="avatar" className="avatar" />
          <p className="author-blog-details">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-details-image" />
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
