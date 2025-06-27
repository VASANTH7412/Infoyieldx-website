import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Shield, Users, User, Mail, Lock, Eye, EyeOff, ArrowLeft, Phone, Building, Calendar, MapPin
} from 'lucide-react';

const AdminLogin = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    employeeId: ''
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'employee',
    department: '',
    employeeId: '',
    joiningDate: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const roles = [
    { id: 'admin', name: 'Admin', icon: Shield, description: 'Full system access and management' },
    { id: 'hr', name: 'HR', icon: Users, description: 'Human resources management' },
    { id: 'employee', name: 'Employee', icon: User, description: 'Employee portal access' }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setRegisterData({ ...registerData, role: roleId });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  // ✅ Use the correct endpoint based on role selection
  const loginUrl =
    selectedRole === "admin"
      ? "http://localhost:8080/api/auth/admin/login"
      : "http://localhost:8080/api/auth/login";

  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password
      })
    });

    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.error("❌ Invalid JSON from server:", err);
      throw new Error("Invalid server response");
    }

    if (response.ok) {
      // ✅ Save to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("firstName", data.firstName || "");
      localStorage.setItem("lastName", data.lastName || "");
      localStorage.setItem("email", data.email);
      localStorage.setItem("role", data.role);

      const userRole = (data.role || "").toLowerCase();

      console.log("✅ Login success:", data);

      alert(`${userRole.toUpperCase()} login successful! Redirecting...`);

      // ✅ Navigate to appropriate dashboard
      switch (userRole) {
        case "admin":
          navigate("/admin-dashboard");
          break;
        case "hr":
          navigate("/hr-dashboard");
          break;
        case "employee":
          navigate("/employee-dashboard");
          break;
        default:
          navigate("/");
      }
    } else {
      console.warn("❌ Login failed:", data);
      alert(data.message || "❌ Invalid email or password");
    }
  } catch (error) {
    console.error("❌ Login error:", error);
    alert("❌ Login failed. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert('Registration request submitted! Admin will review and approve your account.');
      setLoading(false);
      setIsLogin(true);
    }, 2000);
  };

  const getRoleIcon = (roleId) => {
    const role = roles.find(r => r.id === roleId);
    return role ? role.icon : Shield;
  };

  const getRoleName = (roleId) => {
    const role = roles.find(r => r.id === roleId);
    return role ? role.name : 'Admin';
  };

  if (!selectedRole) {
    return (
      <div className="min-vh-100 d-flex align-items-center" style={{ 
        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
        paddingTop: '80px'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                <div className="card-header text-center border-0 py-4" style={{ 
                  background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))',
                  borderRadius: '20px 20px 0 0'
                }}>
                  <Link to="/" className="btn btn-outline-light btn-sm mb-3">
                    <ArrowLeft size={16} className="me-2" />
                    Back to Home
                  </Link>
                  <h3 className="text-white fw-bold mb-0">
                    <Shield size={24} className="me-2" />
                    Select Your Role
                  </h3>
                </div>
                
                <div className="card-body p-5">
                  <div className="row g-4">
                    {roles.map((role) => {
                      const IconComponent = role.icon;
                      return (
                        <div key={role.id} className="col-md-4">
                          <div 
                            className="card h-100 border-0 shadow-sm card-hover"
                            style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                            onClick={() => handleRoleSelect(role.id)}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = 'translateY(-10px)';
                              e.currentTarget.style.boxShadow = '0 15px 30px rgba(52, 152, 219, 0.3)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                            }}
                          >
                            <div className="card-body text-center p-4">
                              <div className="mb-3">
                                <IconComponent size={50} style={{ color: 'var(--primary-color)' }} />
                              </div>
                              <h5 className="fw-bold mb-3">{role.name}</h5>
                              <p className="text-muted">{role.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const IconComponent = getRoleIcon(selectedRole);

  return (
    <div className="min-vh-100 d-flex align-items-center" style={{ 
      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card border-0 shadow-lg" style={{ borderRadius: '20px' }}>
              <div className="card-header text-center border-0 py-4" style={{ 
                background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))',
                borderRadius: '20px 20px 0 0'
              }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button 
                    className="btn btn-outline-light btn-sm"
                    onClick={() => setSelectedRole('')}
                  >
                    <ArrowLeft size={16} className="me-2" />
                    Back
                  </button>
                  <Link to="/" className="btn btn-outline-light btn-sm">
                    <ArrowLeft size={16} className="me-2" />
                    Home
                  </Link>
                </div>
                <h3 className="text-white fw-bold mb-0">
                  <IconComponent size={24} className="me-2" />
                  {getRoleName(selectedRole)} {isLogin ? 'Login' : 'Registration'}
                </h3>
              </div>
              
              <div className="card-body p-5">
                {isLogin ? (
  // Login Form
  <form onSubmit={handleLoginSubmit}>
    
    {/* 👥 Employee ID Field – Only for HR or Employee */}
    {(selectedRole === 'hr' || selectedRole === 'employee') && (
      <div className="mb-3">
        <label className="form-label fw-bold">Employee ID</label>
        <div className="input-group">
          <span className="input-group-text">
            <User size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            name="employeeId"
            value={loginData.employeeId}
            onChange={handleLoginChange}
            placeholder="Enter your employee ID"
            required
          />
        </div>
      </div>
    )}

    {/* 📧 Email Field */}
    <div className="mb-3">
      <label className="form-label fw-bold">Email Address</label>
      <div className="input-group">
        <span className="input-group-text">
          <Mail size={16} />
        </span>
        <input
          type="email"
          className="form-control"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder="Enter your email"
          required
        />
      </div>
    </div>

    {/* 🔒 Password Field with Show/Hide */}
    <div className="mb-3">
      <label className="form-label fw-bold">Password</label>
      <div className="input-group">
        <span className="input-group-text">
          <Lock size={16} />
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          className="form-control"
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
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

    {/* ✅ Remember Me */}
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="rememberMe" />
      <label className="form-check-label" htmlFor="rememberMe">
        Remember me
      </label>
    </div>

    {/* 🔘 Login Button */}
    <button
      type="submit"
      className="btn btn-primary-custom w-100 mb-3"
      disabled={loading}
    >
      {loading ? 'Signing in...' : `Sign In as ${getRoleName(selectedRole)}`}
    </button>

   {/* ❓ Forgot Password */}
<div className="text-center">
  <a href="#" className="text-decoration-none me-3">Forgot Password?</a>

  {/* ✅ Register Button – Only for HR & Employee */}
  {(selectedRole === 'hr' || selectedRole === 'employee') && (
    <button
      type="button"
      className="btn btn-link text-decoration-none p-0"
      onClick={() => setIsLogin(false)}
    >
      Need an account? Register
    </button>
  )}
</div>

  </form>
) : (
  // Registration Form...

                  // Registration Form
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={registerData.firstName}
                          onChange={handleRegisterChange}
                          placeholder="First name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={registerData.lastName}
                          onChange={handleRegisterChange}
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Email Address</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <Mail size={16} />
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Phone Number</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <Phone size={16} />
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={registerData.phone}
                            onChange={handleRegisterChange}
                            placeholder="Phone number"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Department</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <Building size={16} />
                          </span>
                          <select
                            className="form-control"
                            name="department"
                            value={registerData.department}
                            onChange={handleRegisterChange}
                            required
                          >
                            <option value="">Select Department</option>
                            <option value="development">Development</option>
                            <option value="hr">Human Resources</option>
                            <option value="marketing">Marketing</option>
                            <option value="sales">Sales</option>
                            <option value="finance">Finance</option>
                            <option value="operations">Operations</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Employee ID</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <User size={16} />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="employeeId"
                            value={registerData.employeeId}
                            onChange={handleRegisterChange}
                            placeholder="Employee ID"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Joining Date</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Calendar size={16} />
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          name="joiningDate"
                          value={registerData.joiningDate}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Address</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <MapPin size={16} />
                        </span>
                        <textarea
                          className="form-control"
                          name="address"
                          value={registerData.address}
                          onChange={handleRegisterChange}
                          placeholder="Enter your address"
                          rows="2"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <Lock size={16} />
                          </span>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            name="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            placeholder="Create password"
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
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Confirm Password</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <Lock size={16} />
                          </span>
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="form-control"
                            name="confirmPassword"
                            value={registerData.confirmPassword}
                            onChange={handleRegisterChange}
                            placeholder="Confirm password"
                            required
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="agreeTerms" required />
                      <label className="form-check-label" htmlFor="agreeTerms">
                        I agree to the company policies and <a href="#" className="text-decoration-none">Terms of Service</a>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary-custom w-100 mb-3"
                      disabled={loading}
                    >
                      {loading ? 'Submitting Request...' : 'Submit Registration Request'}
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none p-0"
                        onClick={() => setIsLogin(true)}
                      >
                        Already have an account? Sign In
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;