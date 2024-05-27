import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogData: {}, loading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({
      blogData: updatedData,
      loading: false,
    })
  }

  render() {
    const {blogData, loading} = this.state
    return loading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      blogData.map(eachItem => <BlogItem key={eachItem.id} blog={eachItem} />)
    )
  }
}

export default BlogList
