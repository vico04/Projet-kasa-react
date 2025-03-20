import { NavLink } from 'react-router-dom';
import '../../components/Header/Header.scss';
import logo from '../../assets/images/logo.png';
import logo3 from '../../assets/images/Logo3.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo kasa" className="logo-desktop"></img>
          <img src={logo3} alt="Logo kasa mobile" className="logo-mobile"></img>
        </NavLink>
      </div>
      <nav className="nav_menu">
        <ul>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Accueil
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            A propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
