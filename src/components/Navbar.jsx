import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Smartphone, Calculator, ShoppingCart, Brain, Database, Server } from 'lucide-react';
import AuthDropdown from './AuthDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const token = localStorage.getItem("token");
  const firstName = localStorage.getItem("firstName");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const services = [
    { name: 'Web Development', path: '/services/web-development', icon: Code },
    { name: 'App Development', path: '/services/app-development', icon: Smartphone },
    { name: 'Accounting', path: '/services/accounting', icon: Calculator },
    { name: 'E-Commerce', path: '/services/ecommerce', icon: ShoppingCart },
    { name: 'AI Solutions', path: '/services/ai-solutions', icon: Brain },
    { name: 'Oracle EPS', path: '/services/oracle-eps', icon: Server },
    { name: 'Database Management', path: '/services/database-management', icon: Database },
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
   <nav
  className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}
  style={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
>
  <div className="container-fluid px-5">
   <Link className="navbar-brand" to="/">
  <span className="logo-text">InfoYieldX</span>
</Link>



      {/* Desktop Menu */}
      <div className="d-none d-lg-flex align-items-center">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-link-custom ${location.pathname === '/about' ? 'active' : ''}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle nav-link-custom"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Services
            </a>
            <ul className="dropdown-menu dropdown-menu-custom">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index}>
                    <Link
                      className="dropdown-item dropdown-item-custom d-flex align-items-center"
                      to={service.path}
                    >
                      <IconComponent size={16} className="me-2" />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-link-custom ${location.pathname === '/portfolio' ? 'active' : ''}`}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-link-custom ${location.pathname === '/careers' ? 'active' : ''}`}
              to="/careers"
            >
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link nav-link-custom ${location.pathname === '/contact' ? 'active' : ''}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

         {/* Auth Section */}
{token ? (
  <div className="d-flex align-items-center gap-3">
    <div 
      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white fw-bold"
      style={{ width: '36px', height: '36px' }}
    >
      {firstName?.charAt(0)?.toUpperCase()}
    </div>
    <button 
      className="btn btn-outline-dark btn-sm fw-semibold"
      onClick={handleLogout}
    >
      Logout
    </button>
  </div>
) : (
  <AuthDropdown />
)}
</div>

{/* Mobile Menu Button */}
<button
  className="mobile-menu-btn d-lg-none text-dark"
  onClick={toggleMobileMenu}
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>

{/* Mobile Menu */}
<div className={`mobile-menu position-absolute top-100 start-0 w-100 d-lg-none ${isOpen ? 'd-block' : 'd-none'}`} style={{ background: '#fff', zIndex: 999 }}>
  <div className="container py-3" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
    <ul className="list-unstyled mb-0">
      <li className="py-2">
        <Link 
          className="text-dark text-decoration-none" 
          to="/" 
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </li>
      <li className="py-2">
        <Link 
          className="text-dark text-decoration-none" 
          to="/about" 
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
      </li>
      <li className="py-2">
        <div className="text-dark mb-2 fw-semibold">Services</div>
        <ul className="list-unstyled ps-3">
          {services.map((service, index) => (
            <li key={index} className="py-1">
              <Link 
                className="text-secondary text-decoration-none" 
                to={service.path} 
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="py-2">
        <Link 
          className="text-dark text-decoration-none" 
          to="/portfolio" 
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </Link>
      </li>
      <li className="py-2">
        <Link 
          className="text-dark text-decoration-none" 
          to="/careers" 
          onClick={() => setIsOpen(false)}
        >
          Careers
        </Link>
      </li>
      <li className="py-2">
        <Link 
          className="text-dark text-decoration-none" 
          to="/contact" 
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </li>
      <li className="py-2 border-top border-secondary mt-2 pt-3">
        {token ? (
          <div className="d-flex align-items-center gap-3">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white fw-bold"
              style={{ width: '36px', height: '36px' }}
            >
              {firstName?.charAt(0)?.toUpperCase()}
            </div>
            <button 
              className="btn btn-outline-dark btn-sm fw-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <AuthDropdown />
        )}
      </li>
    </ul>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
