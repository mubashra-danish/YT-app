import CartContext from '../../context/CartContext'

const VideoItem = props => (
  <CartContext.Consumer>
    {value => {
      const {cartItemDetails} = props
      const {id, title, name, viewCount, publishedAt, imageUrl} =
        cartItemDetails
      return (
        <li>
          <div>
            <img src={imageUrl} />
            <div>
              <h1>{title}</h1>
              <p>{name}</p>
              <p>{viewCount}</p>
              <p>{publishedAt}</p>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)
export default VideoItem
