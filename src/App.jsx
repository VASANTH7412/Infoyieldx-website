import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Careers from './components/Careers';
import Contact from './components/Contact';
import UserLogin from './pages/UserLogin';
import ForgetPassword from './pages/ForgetPassword';

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import HRDashboard from './pages/dashboards/HRDashboard';
import EmployeeDashboard from './pages/dashboards/EmployeeDashboard';
import WebDevelopment from './pages/services/WebDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import Accounting from './pages/services/Accounting';
import ECommerce from './pages/services/ECommerce';
import AISolutions from './pages/services/AISolutions';
import OracleEPS from './pages/services/OracleEBS';
import DatabaseManagement from './pages/services/DatabaseManagement';
import ResetPassword from './pages/ResetPassword';
import HrRequestsPage from './pages/admin/HrRequestsPage';
import EmailVerified from './pages/EmailVerified';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-login" element={<UserLogin />} /> 
          <Route path="/email-verified" element={<EmailVerified/>} />
          <Route path="/forgot-password" element={<ForgetPassword/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/hr-requests" element={<HrRequestsPage/>}/>
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/accounting" element={<Accounting />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/ai-solutions" element={<AISolutions />} />
          <Route path="/services/oracle-eps" element={<OracleEPS />} />
          <Route path="/services/database-management" element={<DatabaseManagement />} />
          
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;