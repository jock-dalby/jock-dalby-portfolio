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

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/jock-dalby-5986474a/',
    icon: faLinkedin,
  },
  {
    href: 'https://github.com/jock-dalby',
    icon: faGithub,
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
        {NAV_LINKS.map(({ to, className, icon }, i) => (
          <NavLink
            key={i}
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
        {SOCIAL_LINKS.map(({ href, icon }, i) => (
          <li key={i}>
            <a target="_blank" rel="noreferrer" href={href}>
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
