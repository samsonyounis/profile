import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
   const handleNavLinkClick = () => {
    const nav = document.getElementById('navbarNav');
    if (nav && nav.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(nav, {
        toggle: true,
      });
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
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work" onClick={handleNavLinkClick}>My Work</Link>
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
