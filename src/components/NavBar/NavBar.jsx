import { Link } from 'react-router-dom';
import { LOGOS } from '../../constants/constants';
import './NavBar.css';

const skyLogo = LOGOS.find(logo => logo.name === 'Sky')?.image;

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">
          <img src={skyLogo} alt="Sky Logo" className="navbar-logo" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
