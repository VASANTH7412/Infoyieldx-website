// src/pages/ResetPassword.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage('');
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/auth/reset-password", {
        email,
        password,
      });
      setMessage("✅ " + res.data);
    } catch (err) {
      setMessage("❌ " + (err.response?.data || "Something went wrong"));
    }
    setLoading(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ maxWidth: '450px', width: '100%' }}>
        <h3 className="text-center fw-bold mb-4">Reset Password</h3>
        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label className="form-label fw-semibold">New Password</label>
            <input
              type="password"
              className="form-control rounded-pill px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className="form-control rounded-pill px-3 py-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="btn btn-success w-100 rounded-pill fw-bold"
            type="submit"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;
