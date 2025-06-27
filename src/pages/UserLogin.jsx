import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft, Home } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';


const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");


  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: ''
  });

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

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        const error = await response.text();
        alert("❌ Login failed: " + error);
      } else {
        const result = await response.json();

        localStorage.setItem("token", result.token);
        localStorage.setItem("firstName", result.firstName);
        localStorage.setItem("lastName", result.lastName);
        localStorage.setItem("email", result.email);

        alert(result.message || "✅ Login successful!");

        navigate("/");
      }
    } catch (err) {
      alert("❌ Something went wrong. Check your network.");
      console.error(err);
    }

    setLoading(false);
  };


const handleRegisterSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setRegisterError(""); // Clear old error

  if (registerData.password !== registerData.confirmPassword) {
    alert('❌ Passwords do not match!');
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        phone: registerData.phone,
        company: registerData.company,
        password: registerData.password,
        confirmPassword: registerData.confirmPassword
      })
    });

    const result = await response.text();

    if (response.ok) {
      // ✅ Success message with email verification check
      if (result.toLowerCase().includes("verify") || result.toLowerCase().includes("check your email")) {
        alert("✅ Account created! Please check your email to verify before logging in.");
      } else {
        alert("✅ " + result);
      }

      setIsLogin(true); // Switch to login tab
      setRegisterError(""); // Clear error if previously set
    } else {
      alert("❌ Error: " + result);
      setRegisterError(result); // Save the error for conditional UI
    }

  } catch (error) {
    alert("❌ Network Error: " + error.message);
    setRegisterError("❌ Network error");
  }

  setLoading(false);
};



//


const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const idToken = credentialResponse.credential; // ✅ This is the correct id_token

    const res = await axios.post("http://localhost:8080/api/auth/google", {
      idToken,
    });

    const { token: appToken, firstName, lastName, email } = res.data;

localStorage.setItem("token", appToken);
localStorage.setItem("firstName", firstName || "");
localStorage.setItem("lastName", lastName || "");
localStorage.setItem("email", email || "");
    window.location.href = "/";
  } catch (err) {
    console.error("❌ Google login failed:", err.response?.data || err.message);
    alert("Google login failed");
  }
};

const handleGoogleFailure = () => {
  alert("Google login failed");
};




  return (
    <div className="min-vh-100 d-flex align-items-center" style={{ 
      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
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
                  <User size={24} className="me-2" />
                  {isLogin ? 'User Login' : 'User Registration'}
                </h3>
              </div>
              
              <div className="card-body p-5">
                {isLogin ? (
                  // Login Form
                  <form onSubmit={handleLoginSubmit}>
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

                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary-custom w-100 mb-3"
                      disabled={loading}
                    >
                      {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <div className="text-center mb-3">
                      <span className="text-muted">or</span>
                    </div>

                    <div className="d-flex justify-content-center mb-3">
  

  <GoogleLogin
    onSuccess={handleGoogleSuccess}
    onError={handleGoogleFailure}
    width="100%" // optional to match button width
  />
</div>


                    <div className="text-center">
  <Link to="/forgot-password" className="text-decoration-none me-3">
    Forgot Password?
  </Link>
  <button
    type="button"
    className="btn btn-link text-decoration-none p-0"
    onClick={() => setIsLogin(false)}
  >
    Don't have an account? Sign Up
  </button>
</div>

                  </form>
                ) : (
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
                          value={registerData.email}
                          onChange={handleRegisterChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Phone Number</label>
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
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Company</label>
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          value={registerData.company}
                          onChange={handleRegisterChange}
                          placeholder="Company name"
                        />
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
                        I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>
                      </label>
                    </div>

                   {/* Create Account Button */}
<button
  type="submit"
  className="btn btn-primary-custom w-100 mb-3"
  disabled={loading}
>
  {loading ? 'Creating Account...' : 'Create Account'}
</button>

{/* Show Resend Verification button if email exists but not verified */}
{!loading && registerError?.toLowerCase().includes("not verified") && (
  <button
    type="button"
    className="btn btn-outline-secondary w-100 mb-3"
    onClick={async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/auth/resend-verification?email=${registerData.email}`,
          {
            method: "POST",
          }
        );
        const msg = await res.text();
        alert(msg);
      } catch (error) {
        alert("❌ Failed to resend verification email.");
      }
    }}
  >
    📩 Resend Verification Email
  </button>
)}



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

export default UserLogin;