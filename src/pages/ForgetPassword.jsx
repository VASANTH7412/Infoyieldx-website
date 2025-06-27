import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:8080/api/auth/forgot-password', { email });
      setMessage("✅ " + res.data);
    } catch (err) {
      setMessage("❌ " + (err.response?.data || "Something went wrong"));
    }

    setLoading(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ maxWidth: '450px', width: '100%' }}>
        <div className="text-center mb-4">
          <i className="fas fa-unlock-alt fa-3x text-primary mb-2"></i>
          <h3 className="fw-bold">Forgot Password</h3>
          <p className="text-muted">Enter your email to receive a password reset link.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control rounded-pill px-3 py-2"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            className="btn btn-primary w-100 rounded-pill fw-bold"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        {message && (
          <div className="mt-3 text-center">
            <small className={message.startsWith("✅") ? "text-success" : "text-danger"}>
              {message}
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
