import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Smartphone, Search, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Beautiful, user-friendly interfaces that engage your audience'
    },
    {
      icon: Smartphone,
      title: 'Responsive Layout',
      description: 'Perfect viewing experience across all devices and screen sizes'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to improve search rankings'
    },
    {
      icon: Shield,
      title: 'Secure Development',
      description: 'Enterprise-grade security measures and best practices'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized code for lightning-fast loading speeds'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Maintainable, scalable code following industry standards'
    }
  ];

  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project plan'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Creating mockups and wireframes for optimal user experience'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your website with clean, efficient, and scalable code'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment to ensure perfect functionality'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Web Development Services</h1>
              <p className="lead mb-4">
                Create powerful, modern websites that drive business growth. 
                Our expert team builds custom web solutions tailored to your needs.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Custom Web Applications
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  E-commerce Platforms
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Content Management Systems
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Progressive Web Apps
                </li>
              </ul>
              <Link to="/contact" className="btn btn-light btn-lg">
                Start Your Project <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg" 
                alt="Web Development" 
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Why Choose Our Web Development?</h2>
            <p className="lead text-muted">We deliver exceptional web solutions with these key features</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card border-0 shadow-sm h-100 card-hover">
                    <div className="card-body text-center p-4">
                      <div className="mb-3">
                        <IconComponent size={40} className="text-primary" />
                      </div>
                      <h5 className="fw-bold mb-3">{feature.title}</h5>
                      <p className="text-muted">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Technologies We Use</h2>
            <p className="lead text-muted">Cutting-edge tools and frameworks for modern web development</p>
          </div>
          <div className="row g-4 justify-content-center">
            {technologies.map((tech, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm text-center card-hover h-100">
                  <div className="card-body p-3">
                    <img src={tech.logo} alt={tech.name} width="40" height="40" className="mb-2" />
                    <h6 className="fw-bold mb-0">{tech.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Development Process</h2>
            <p className="lead text-muted">A systematic approach to deliver exceptional results</p>
          </div>
          <div className="row g-4">
            {process.map((step, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-center">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h4 fw-bold mb-0">{step.step}</span>
                  </div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Web Development Work</h2>
            <p className="lead text-muted">Examples of websites we've built for our clients</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" 
                  alt="E-commerce Website" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">E-commerce Platform</h5>
                  <p className="text-muted">Modern online store with payment integration</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg" 
                  alt="Corporate Website" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Corporate Website</h5>
                  <p className="text-muted">Professional business website with CMS</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg" 
                  alt="Web Application" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Web Application</h5>
                  <p className="text-muted">Custom dashboard and analytics platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Ready to Build Your Website?</h2>
              <p className="mb-4">
                Let's create a powerful web presence that drives your business forward. 
                Contact us today to discuss your project requirements.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Subcribe
                </Link>
                <Link to="/portfolio" className="btn btn-light btn-lg">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;