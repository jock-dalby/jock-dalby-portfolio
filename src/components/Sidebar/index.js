import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-avatar.png';
import LogoName from '../../assets/images/logo-name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo-link" to="/">
        <img src={Logo} alt="logo" />
        <img className="logo-name" src={LogoName} alt="jock" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
