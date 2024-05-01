import React from 'react'
import ReactPlayer from 'react-player'
import './index.css'

const TrendingCard = props => {
  const {trendingData} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = trendingData

  return (
    <li>
      <div className='trending-card'>
        <h2 className='title'>{title}</h2>
        <ReactPlayer
          url={thumbnailUrl}
          className='react-player'
          width='100%'
          height='100%'
          controls
        />
        <div className='channel-info'>
          <img
            src={channel.profileImageUrl}
            alt={channel.name}
            className='channel-image'
          />
          <p className='channel-name'>{channel.name}</p>
        </div>
        <p className='view-count'>{viewCount}</p>
        <p className='published-at'>{publishedAt}</p>
        <img src={thumbnailUrl} alt={title} className='thumbnail' />
      </div>
    </li>
  )
}

export default TrendingCard
