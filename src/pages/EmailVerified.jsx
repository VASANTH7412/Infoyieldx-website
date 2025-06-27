import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailVerified = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
      <div className="text-center p-5 rounded" style={{ backgroundColor: '#1f232b', maxWidth: 500 }}>
        <CheckCircle size={48} className="text-success mb-3" />
        <h2>Email Verified Successfully 🎉</h2>
        <p className="mt-3">
          Your email has been verified. You can now log in to your account.
        </p>
        <Link to="/user-login" className="btn btn-primary mt-4">Go to Login</Link>
      </div>
    </div>
  );
};

export default EmailVerified;
