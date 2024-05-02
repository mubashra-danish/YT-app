import React from 'react'
import './index.css'

const TrendingCard = props => {
  const {trendingData} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = trendingData

  return (
    <li>
    <Link to={`/videos/${id}`} className="link-item">
      <div className="trending-card">
        <img src={thumbnailUrl} alt={title} className="thumbnail" />
        <div className="channel-info">
          <h2 className="title">{title}</h2>
          <p className="channel-name">{channel.name}</p>

          <p className="view-count">{viewCount}</p>
          <p className="published-at">{publishedAt}</p>
        </div>
      </div>
      </Link>
    </li>
  )
}

export default TrendingCard
