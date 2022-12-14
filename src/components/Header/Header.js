import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container container-fluid">
        <Link className="navbar-brand mb-0 h1" to="/">
          Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
