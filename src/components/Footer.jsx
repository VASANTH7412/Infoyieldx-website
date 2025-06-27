import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'Accounting', path: '/services/accounting' },
    { name: 'E-Commerce', path: '/services/ecommerce' },
    { name: 'AI Solutions', path: '/services/ai-solutions' },
    { name: 'Oracle EPS', path: '/services/oracle-eps' },
    { name: 'Database Management', path: '/services/database-management' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="logo-text mb-4">InfoYieldX</h5>
            <p className="text-light mb-4">
              Transforming businesses with innovative technology solutions. 
              Your trusted partner in digital transformation.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light hover-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-light hover-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light hover-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-light hover-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link to={link.path} className="text-light text-decoration-none hover-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-4">Our Services</h6>
            <ul className="list-unstyled">
              {services.slice(0, 5).map((service, index) => (
                <li key={index} className="mb-2">
                  <Link to={service.path} className="text-light text-decoration-none hover-primary">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="mb-2">
                <Link to="/services" className="text-primary text-decoration-none">
                  View All Services <ArrowRight size={14} className="ms-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-4">Contact Information</h6>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <MapPin size={16} className="text-primary me-2" />
                <span className="text-light">123 Business District, Tech City, TC 12345</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="text-primary me-2" />
                <a href="tel:+15551234567" className="text-light text-decoration-none hover-primary">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Mail size={16} className="text-primary me-2" />
                <a href="mailto:info@infoyieldx.com" className="text-light text-decoration-none hover-primary">
                  info@infoyieldx.com
                </a>
              </div>
            </div>
            
            {/* Newsletter */}
            <div>
              <h6 className="fw-bold mb-3">Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-top border-secondary">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-light">
                © 2024 InfoYieldX. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <a href="#" className="text-light text-decoration-none hover-primary">Privacy Policy</a>
                <a href="#" className="text-light text-decoration-none hover-primary">Terms of Service</a>
                <a href="#" className="text-light text-decoration-none hover-primary">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;