import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Tablet, Monitor, Zap, Shield, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

const AppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Native iOS & Android',
      description: 'Platform-specific apps with optimal performance and user experience'
    },
    {
      icon: Tablet,
      title: 'Cross-Platform',
      description: 'React Native and Flutter apps that work seamlessly across platforms'
    },
    {
      icon: Monitor,
      title: 'Progressive Web Apps',
      description: 'Web apps that feel and function like native mobile applications'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized code and efficient architecture for fast, responsive apps'
    },
    {
      icon: Shield,
      title: 'Secure Development',
      description: 'Enterprise-grade security measures and data protection'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed for optimal user engagement'
    }
  ];

  const platforms = [
    {
      name: 'iOS',
      description: 'Native iOS apps using Swift and Objective-C',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      technologies: ['Swift', 'Objective-C', 'Xcode', 'SwiftUI']
    },
    {
      name: 'Android',
      description: 'Native Android apps using Kotlin and Java',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      technologies: ['Kotlin', 'Java', 'Android Studio', 'Jetpack Compose']
    },
    {
      name: 'Cross-Platform',
      description: 'Unified codebase for multiple platforms',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      technologies: ['React Native', 'Flutter', 'Xamarin', 'Ionic']
    }
  ];

  const appTypes = [
    {
      title: 'E-commerce Apps',
      description: 'Shopping apps with payment integration and inventory management',
      icon: '🛒'
    },
    {
      title: 'Social Media Apps',
      description: 'Platforms for social interaction and content sharing',
      icon: '📱'
    },
    {
      title: 'Business Apps',
      description: 'Enterprise solutions for productivity and management',
      icon: '💼'
    },
    {
      title: 'Healthcare Apps',
      description: 'Medical and health monitoring applications',
      icon: '🏥'
    },
    {
      title: 'Educational Apps',
      description: 'Learning platforms and interactive educational tools',
      icon: '📚'
    },
    {
      title: 'Entertainment Apps',
      description: 'Gaming, streaming, and multimedia applications',
      icon: '🎮'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Define app requirements, target audience, and technical specifications'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Create wireframes, prototypes, and beautiful user interfaces'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build the app using best practices and latest technologies'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing and app store deployment'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Mobile App Development</h1>
              <p className="lead mb-4">
                Create powerful mobile applications that engage users and drive business growth. 
                Our expert team builds apps for iOS, Android, and cross-platform solutions.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Native iOS & Android Apps
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Cross-Platform Solutions
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  App Store Optimization
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Ongoing Support & Updates
                </li>
              </ul>
              <Link to="/contact" className="btn btn-light btn-lg">
                
                Start Your App Project <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg" 
                alt="Mobile App Development" 
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
            <h2 className="display-5 fw-bold mb-4">Why Choose Our App Development?</h2>
            <p className="lead text-muted">We deliver exceptional mobile solutions with these key features</p>
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

      {/* Platforms Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Platforms We Support</h2>
            <p className="lead text-muted">Comprehensive mobile development across all major platforms</p>
          </div>
          <div className="row g-4">
            {platforms.map((platform, index) => (
              <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <img 
                    src={platform.image} 
                    alt={platform.name} 
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h4 className="fw-bold mb-3">{platform.name}</h4>
                    <p className="text-muted mb-3">{platform.description}</p>
                    <div className="mb-3">
                      <small className="text-muted fw-bold">Technologies:</small>
                      <div className="mt-2">
                        {platform.technologies.map((tech, idx) => (
                          <span key={idx} className="badge bg-light text-dark me-1 mb-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Types of Apps We Build</h2>
            <p className="lead text-muted">From e-commerce to entertainment, we cover all app categories</p>
          </div>
          <div className="row g-4">
            {appTypes.map((type, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>
                      {type.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{type.title}</h5>
                    <p className="text-muted">{type.description}</p>
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
            <p className="lead text-muted">A proven methodology to deliver successful mobile apps</p>
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

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Success Stories</h2>
            <p className="lead text-muted">Apps we've built that made a difference</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                  alt="E-commerce App" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">E-commerce App</h5>
                  <p className="text-muted">Increased sales by 300% with our custom shopping app</p>
                  <div className="d-flex align-items-center">
                    <Star className="text-warning me-1" size={16} />
                    <span className="small">4.8 App Store Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg" 
                  alt="Healthcare App" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Healthcare App</h5>
                  <p className="text-muted">Streamlined patient care with telemedicine features</p>
                  <div className="d-flex align-items-center">
                    <Users className="text-primary me-1" size={16} />
                    <span className="small">50K+ Active Users</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                  alt="Business App" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Business Management App</h5>
                  <p className="text-muted">Improved productivity by 40% with custom workflow app</p>
                  <div className="d-flex align-items-center">
                    <Zap className="text-success me-1" size={16} />
                    <span className="small">40% Productivity Boost</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding ">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Ready to Build Your Mobile App?</h2>
              <p className="lead mb-4">
                Transform your idea into a powerful mobile application that users love. 
                Let's discuss your project and bring your vision to life.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Subcribe
                </Link>
                <Link to="/portfolio" className="btn btn-light btn-lg">
                  View Our Apps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;