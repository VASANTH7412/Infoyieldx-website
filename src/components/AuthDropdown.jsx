import React, { useState, useRef, useEffect } from 'react';
import { User, Shield, ChevronDown, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleUserLogin = () => {
    navigate('/user-login');
    setIsOpen(false);
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="position-relative" ref={dropdownRef}>
      <button
        className="btn login-btn d-flex align-items-center"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          borderColor: 'var(--secondary-color)', 
          color: 'gray',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = 'var(--secondary-color)';
          e.target.style.borderColor = 'var(--secondary-color)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.borderColor = 'var(--secondary-color)';
        }}
      >
        <User size={20} className="me-2" />
  {isLoggedIn ? 'Profile' : 'Login'}
  <ChevronDown size={16} className="ms-1" />
</button>

      {isOpen && (
        <div 
          className="dropdown-menu dropdown-menu-custom show position-absolute end-0 mt-2"
          style={{ 
            minWidth: '250px', 
            zIndex: 1050,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: `1px solid var(--secondary-color)`,
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(52, 152, 219, 0.3)'
          }}
          onMouseLeave={() => setIsOpen(false)}
        >
          {isLoggedIn ? (
            <div className="px-3 py-2">
              <h6 className="dropdown-header fw-bold mb-2" style={{ color: 'var(--primary-color)' }}>
                <User size={16} className="me-2" />
                Welcome, User
              </h6>
              <button
                className="dropdown-item dropdown-item-custom d-flex align-items-center"
                onClick={handleLogout}
                style={{ 
                  borderRadius: '5px',
                  transition: 'all 0.3s ease',
                  margin: '2px 5px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--secondary-color)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'inherit';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              {/* User Section */}
              <div className="px-3 py-2 border-bottom" style={{ borderColor: 'var(--secondary-color)' }}>
                <h6 className="dropdown-header fw-bold mb-2" style={{ color: 'var(--primary-color)' }}>
                  <User size={16} className="me-2" />
                  User Access
                </h6>
                <button
                  className="dropdown-item dropdown-item-custom d-flex align-items-center"
                  onClick={handleUserLogin}
                  style={{ 
                    borderRadius: '5px',
                    transition: 'all 0.3s ease',
                    margin: '2px 5px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'var(--secondary-color)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'inherit';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  <LogIn size={16} className="me-2" />
                  User Login / Register
                </button>
              </div>

              {/* Admin Section */}
              <div className="px-3 py-2">
                <h6 className="dropdown-header fw-bold mb-2" style={{ color: 'var(--primary-color)' }}>
                  <Shield size={16} className="me-2" />
                  Admin Access
                </h6>
                <button
                  className="dropdown-item dropdown-item-custom d-flex align-items-center"
                  onClick={handleAdminLogin}
                  style={{ 
                    borderRadius: '5px',
                    transition: 'all 0.3s ease',
                    margin: '2px 5px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'var(--secondary-color)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'inherit';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  <Shield size={16} className="me-2" />
                  Admin / HR / Employee
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthDropdown;
