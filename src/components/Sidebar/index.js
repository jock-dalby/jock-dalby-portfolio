import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-avatar.png';
import LogoName from '../../assets/images/logo-name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jock-dalby-5986474a/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jock-dalby"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
