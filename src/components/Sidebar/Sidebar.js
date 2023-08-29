import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoAvatar from '../../assets/images/logo-avatar.png';
import LogoName from '../../assets/images/logo-name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NAV_LINKS = [
  {
    to: '/',
    className: 'home-link',
    icon: faHome,
  },
  {
    to: '/about',
    className: 'about-link',
    icon: faUser,
  },
  {
    to: '/contact',
    className: 'contact-link',
    icon: faEnvelope,
  },
];

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo-link" to="/">
        <img src={LogoAvatar} alt="logo-avatar" />
        <img className="logo-name" src={LogoName} alt="jock" />
      </Link>
      <nav>
        {NAV_LINKS.map(({ to, className, icon }) => (
          <NavLink
            exact="true"
            activeclassname="active"
            className={className}
            to={to}
          >
            <FontAwesomeIcon icon={icon} />
          </NavLink>
        ))}
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
