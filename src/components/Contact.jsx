import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/contact/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message.");
  }
};


  // Updated contact info with your actual address, phone, email, and business hours
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'MGK Complex, No:267, VIP Garden, Solar',
        'Erode, Tamil Nadu 638002',
        'India'
      ],
      link: 'https://maps.app.goo.gl/qgV3xk8APVDhL28x9'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 98765 43210'], // replace with your actual number
      tel: '+919876543210'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@infoyieldx.com'],
      mailto: 'info@infoyieldx.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ];

  const services = [
    'Web Development',
    'App Development',
    'Accounting',
    'E-Commerce',
    'AI Solutions',
    'Oracle EPS',
    'Database Management',
    'Other'
  ];

  return (
    <div>
      {/* Hero Section with 3D style */}
      <section className="section-padding  section-3d-bg">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">Contact Us</h1>
            <p className="lead mb-0" data-aos="fade-up" data-aos-delay="100">
              Get in touch with our team to discuss your project requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8" data-aos="fade-right">
              <div className="contact-form">
                <h3 className="fw-bold mb-4 ">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control form-control-custom"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label ">Email Address *</label>
                      <input
                        type="email"
                        className="form-control form-control-custom"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label ">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-custom"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="service" className="form-label ">Service Interested In</label>
                      <select
                        className="form-control form-control-custom"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label ">Message *</label>
                      <textarea
                        className="form-control form-control-custom"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary-custom btn-lg w-100">
                        <Send size={20} className="me-2" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4" data-aos="fade-left">
              <div className="row g-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="col-12">
                      <div className="card border-0 shadow-sm h-100 card-hover">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center mb-3">
                            <div className=" rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                              <IconComponent size={24} />
                            </div>
                            <h5 className="fw-bold mb-0">{info.title}</h5>
                          </div>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted mb-1">{detail}</p>
                          ))}

                          {/* Link for address, phone and email */}
                          {info.link && (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary"
                            >
                              View on Map
                            </a>
                          )}
                          {info.tel && (
                            <p>
                              <a href={`tel:${info.tel}`} className="text-primary">
                                Call Now
                              </a>
                            </p>
                          )}
                          {info.mailto && (
                            <p>
                              <a href={`mailto:${info.mailto}`} className="text-primary">
                                Send Email
                              </a>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with your iframe */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Find Us</h2>
            <p className="lead text-muted">Visit our office or reach out to us online</p>
          </div>
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.3399458708777!2d77.7493258!3d11.309844499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9651d811f56cd%3A0xb21477d4c2eb3561!2sInfoyieldx!5e0!3m2!1sen!2sin!4v1750804350028!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="InfoYieldX Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding  section-3d-bg">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <MessageCircle size={60} className="mb-4" />
              <h2 className="display-5 fw-bold mb-4">Let's Start the Conversation</h2>
              <p className="lead mb-4">
                Ready to transform your business with technology? Our team is here to help you every step of the way.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="tel:+919876543210" className="btn btn-light btn-lg">
                  <Phone size={20} className="me-2" />
                  Call Now
                </a>
                <a href="mailto:info@infoyieldx.com" className="btn btn-light btn-lg">
                  <Mail size={20} className="me-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
