import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, Shield, Users, User } from 'lucide-react';

const AdminLoginModal = ({ show, onHide, role }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    employeeId: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRoleIcon = () => {
    switch (role) {
      case 'admin': return <Shield size={20} />;
      case 'hr': return <Users size={20} />;
      case 'employee': return <User size={20} />;
      default: return <Shield size={20} />;
    }
  };

  const getRoleTitle = () => {
    switch (role) {
      case 'admin': return 'Admin Login';
      case 'hr': return 'HR Login';
      case 'employee': return 'Employee Login';
      default: return 'Admin Login';
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      alert(`${role.toUpperCase()} login successful! Redirecting to dashboard...`);
      setLoading(false);
      onHide();
      // Redirect based on role
      switch (role) {
        case 'admin':
          window.location.href = '/admin-dashboard';
          break;
        case 'hr':
          window.location.href = '/hr-dashboard';
          break;
        case 'employee':
          window.location.href = '/employee-dashboard';
          break;
        default:
          window.location.href = '/';
      }
    }, 2000);
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1055 }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold d-flex align-items-center">
              {getRoleIcon()}
              <span className="ms-2">{getRoleTitle()}</span>
            </h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body p-4">
            <form onSubmit={handleSubmit}>
              {(role === 'hr' || role === 'employee') && (
                <div className="mb-3">
                  <label className="form-label">Employee ID</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="employeeId"
                      value={formData.employeeId}
                      onChange={handleChange}
                      placeholder="Enter your employee ID"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Lock size={16} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
                disabled={loading}
              >
                {loading ? 'Signing in...' : `Sign In as ${role.toUpperCase()}`}
              </button>

              <div className="text-center">
                <a href="#" className="text-decoration-none">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginModal;