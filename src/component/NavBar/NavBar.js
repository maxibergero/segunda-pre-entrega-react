import './NavBar.css'

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/category/electronics">
         electronics
        </Link>
        <Link className="li" to="/category/jewelery">
        jewelery
        </Link>
              
      </ul>
    </nav>
  );
};

export default NavBar