import './index.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-avatar.png';
import LogoName from '../../assets/images/logo-name.png';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo-link" to="/">
        <img src={Logo} alt="logo" />
        <img className="logo-name" src={LogoName} alt="jock" />
      </Link>
    </div>
  );
};

export default Sidebar;
