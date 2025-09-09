import { Outlet, Link } from 'react-router-dom';
import Collapse from 'bootstrap/js/dist/collapse';

const Navbar = () => {
      const handleNavLinkClick = () => {
      const nav = document.getElementById('navbarNav');
      if (nav && nav.classList.contains('show')) {
        const bsCollapse = new Collapse(nav, { toggle: true });
        bsCollapse.hide();
      }
    };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <Link className="navbar-brand" to="/">Professional Profile</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick} style={{color:"white"}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work" onClick={handleNavLinkClick} style={{color:"white"}}>View My Work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about#experience" onClick={handleNavLinkClick} style={{color:"white"}}>My Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick} style={{color:"white"}}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick} style={{color:"white"}}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container py-4">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
