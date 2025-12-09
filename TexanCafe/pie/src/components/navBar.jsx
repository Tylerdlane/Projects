import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/logo.jpg";

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 w-100 shadow-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Texan Cafe and Pie Shop</Link>
 {/* Center logo */}
    <Link className="navbar-brand mx-auto d-none d-lg-block" to="/">
      <img 
        src={Logo} 
        alt="Logo" 
        style={{ height: "60px" }}
      />
    </Link>

    {/* Mobile logo (shows in collapsed menu area) */}
    <Link className="navbar-brand d-lg-none" to="/">
      <img 
        src={Logo} 
        alt="Logo" 
        style={{ height: "50px" }}
      />
    </Link>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/pieshop">Pie Shop</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/locations">Locations</Link>
        </li>

        {/* Dropdown Menu */}
        <li className="nav-item dropdown">
          <a 
            className="nav-link dropdown-toggle" 
            href="#" 
            role="button" 
            data-bs-toggle="dropdown"
          >
            More
          </a>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <Link className="dropdown-item" to="/about">About Us</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/careers">Careers</Link>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>


  );
}

export default Navbar;
