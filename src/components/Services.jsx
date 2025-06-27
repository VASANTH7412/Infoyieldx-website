import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Calculator, ShoppingCart, Brain, Database, Server, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies like React, Vue, and Angular.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
      path: '/services/web-development',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Cross-Platform', 'Native Performance', 'UI/UX Design', 'App Store Ready'],
      path: '/services/app-development',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'
    },
    {
      icon: Calculator,
      title: 'Accounting',
      description: 'Professional accounting services with Tally integration and financial management.',
      features: ['Tally Integration', 'Tax Management', 'Financial Reports', 'Audit Support'],
      path: '/services/accounting',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      path: '/services/ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered applications to streamline your processes.',
      features: ['Machine Learning', 'Automation', 'Data Analysis', 'Predictive Analytics'],
      path: '/services/ai-solutions',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      icon: Server,
      title: 'Oracle EPS',
      description: 'Enterprise planning solutions with Oracle systems integration and optimization.',
      features: ['System Integration', 'Data Migration', 'Performance Tuning', 'Support'],
      path: '/services/oracle-eps',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Secure and efficient database solutions with backup, optimization, and maintenance.',
      features: ['Database Design', 'Optimization', 'Backup Solutions', 'Security'],
      path: '/services/database-management',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">Our Services</h1>
            <p className="lead mb-0" data-aos="fade-up" data-aos-delay="100">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card service-card h-100 border-0 shadow-sm">
                    <img 
                      src={service.image} 
                      className="card-img-top" 
                      alt={service.title}
                    />
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center mb-3">
                        <IconComponent size={30} className="text-primary me-3" />
                        <h4 className="fw-bold mb-0">{service.title}</h4>
                      </div>
                      <p className="text-muted mb-3">{service.description}</p>
                      <ul className="list-unstyled mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="fas fa-check text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <Link to={service.path} className="btn btn-primary-custom w-100">
                          Learn More <ArrowRight size={16} className="ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Why Choose InfoYieldX?</h2>
            <p className="lead text-muted">What sets us apart from the competition</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-users text-white fa-2x"></i>
                </div>
                <h5 className="fw-bold">Expert Team</h5>
                <p className="text-muted">Skilled professionals with years of experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-clock text-white fa-2x"></i>
                </div>
                <h5 className="fw-bold">Timely Delivery</h5>
                <p className="text-muted">We deliver projects on time, every time</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shield-alt text-white fa-2x"></i>
                </div>
                <h5 className="fw-bold">Quality Assurance</h5>
                <p className="text-muted">Rigorous testing ensures top-quality solutions</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-headset text-white fa-2x"></i>
                </div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="text-muted">Round-the-clock support for all our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Let's discuss your project requirements and find the perfect solution for your business.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;