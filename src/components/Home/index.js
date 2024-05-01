import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videos: [],
    searchQuery: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    try {
      const jwtToken = Cookies.get('jwt_token')
      let apiUrl = 'https://apis.ccbp.in/videos/all'
      if (this.state.searchQuery) {
        apiUrl += `?search=${this.state.searchQuery}`
      }

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })

      if (response.ok) {
        const responseData = await response.json()
        this.setState({
          videos: responseData.videos,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleSearch = () => {
    this.fetchVideos()
  }

  handleInputChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  renderVideos = () => {
    const {videos} = this.state
    return videos.map(video => (
      <div key={video.id}>
        <Link to={`/videos/${video.id}`}>
          <img src={video.thumbnail_url} alt={video.title} />
          <p>{video.title}</p>
        </Link>
      </div>
    ))
  }

  render() {
    const {apiStatus} = this.state

    return (
      <div>
        <NavBar />
        <SideBar />

        <div>
          <div>
            <input type="text" onChange={this.handleInputChange} />
            <button onClick={this.handleSearch}>Search</button>
          </div>

          {apiStatus === apiStatusConstants.inProgress && (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
            </div>
          )}

          {apiStatus === apiStatusConstants.success && this.renderVideos()}

          {apiStatus === apiStatusConstants.failure && (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="Failed to fetch trending videos"
              />
              <h1>Oops! Something Went Wrong</h1>
              <p>We are having some trouble to complete your request</p>
              <p>Please try again.</p>
              <button onClick={this.handleRetry}>Retry</button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
