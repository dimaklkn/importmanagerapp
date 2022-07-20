import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logomed from '../../assets/images/logomed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logomed} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="suppliers-link"
          to="/suppliers"
        >
          <FontAwesomeIcon icon={faMapLocation} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="calculator-link"
          to="/calculator"
        >
          <FontAwesomeIcon icon={faCalculator} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar
