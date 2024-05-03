import {Link} from 'react-router-dom'
import {IoHome} from 'react-icons/io5'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {FaUserPlus} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io5'
import './index.css' // Import the CSS file

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <Link to="/">
          <h1>
            <IoHome /> Home
          </h1>
        </Link>

        <Link to="/trending">
          <h1>
            <AiFillFire /> Trending
          </h1>
        </Link>

        <Link to="/gaming">
          <h1>
            <SiYoutubegaming /> Gaming
          </h1>
        </Link>

        <Link to="/saved-videos">
          <h1>
            <FaUserPlus /> Saved videos
          </h1>
        </Link>
      </div>
      <div>
        <h1>CONTACT US</h1>
        <div className="contact-icons">
          <FaFacebook />
          <AiFillTwitterCircle />
          <IoLogoLinkedin />
        </div>
    
      <p>Enjoy! Now to see your channels and recommendations!</p>
  </div>
    </div>
  )
}

export default SideBar
