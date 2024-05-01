import {Link} from 'react-router-dom'
import {IoHome} from 'react-icons/io5'
import {HiMiniFire} from 'react-icons/hi2'
import {PiHeartStraightFill} from 'react-icons/pi'
import {FaUserPlus} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io5'
import './index.css' // Import the CSS file

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div>
        <Link to='/'>
          <h1>
            <IoHome /> Home
          </h1>
        </Link>

        <Link to='/trending'>
          <h1>
            <HiMiniFire /> Trending
          </h1>
        </Link>

        <Link to='/gaming'>
          <h1>
            <PiHeartStraightFill /> Gaming
          </h1>
        </Link>

        <Link to='/saved-videos'>
          <h1>
            <FaUserPlus /> Saved videos
          </h1>
        </Link>
      </div>
      <div>
        <h1>CONTACT US</h1>
        <div className='contact-icons'>
          <FaFacebook />
          <AiFillTwitterCircle />
          <IoLogoLinkedin />
        </div>
      </div>
      <p>Enjoy! Now to see your channels and recommendations!</p>
    </div>
  )
}

export default SideBar
