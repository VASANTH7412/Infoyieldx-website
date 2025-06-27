import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Shield, Zap, BarChart3, Settings, Cloud, CheckCircle, ArrowRight, Server, Lock } from 'lucide-react';

const DatabaseManagement = () => {
  const features = [
    {
      icon: Database,
      title: 'Database Design',
      description: 'Custom database architecture designed for optimal performance and scalability'
    },
    {
      icon: Shield,
      title: 'Security & Backup',
      description: 'Comprehensive security measures and automated backup solutions'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Query optimization and performance tuning for maximum efficiency'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Analytics',
      description: 'Real-time monitoring and detailed performance analytics'
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: '24/7 database maintenance and technical support services'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime'
    }
  ];

  const databases = [
    {
      name: 'MySQL',
      description: 'Popular open-source relational database management system',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      features: ['High Performance', 'Scalability', 'Security', 'Cross-Platform']
    },
    {
      name: 'PostgreSQL',
      description: 'Advanced open-source object-relational database system',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
      features: ['ACID Compliance', 'JSON Support', 'Extensibility', 'Standards Compliance']
    },
    {
      name: 'MongoDB',
      description: 'Leading NoSQL document database for modern applications',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
      features: ['Document Storage', 'Horizontal Scaling', 'Flexible Schema', 'Rich Queries']
    },
    {
      name: 'Oracle Database',
      description: 'Enterprise-grade relational database management system',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
      features: ['Enterprise Features', 'High Availability', 'Advanced Security', 'Performance']
    },
    {
      name: 'Microsoft SQL Server',
      description: 'Comprehensive database platform for enterprise applications',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      features: ['Business Intelligence', 'Cloud Integration', 'Security', 'Performance']
    },
    {
      name: 'Redis',
      description: 'In-memory data structure store for caching and real-time applications',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      features: ['In-Memory Storage', 'High Performance', 'Data Structures', 'Pub/Sub']
    }
  ];

  const services = [
    {
      title: 'Database Architecture',
      description: 'Design scalable and efficient database structures',
      icon: '🏗️'
    },
    {
      title: 'Performance Tuning',
      description: 'Optimize queries and improve database performance',
      icon: '⚡'
    },
    {
      title: 'Security Implementation',
      description: 'Implement robust security measures and access controls',
      icon: '🔒'
    },
    {
      title: 'Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning',
      icon: '💾'
    },
    {
      title: 'Cloud Migration',
      description: 'Migrate databases to cloud platforms safely',
      icon: '☁️'
    },
    {
      title: 'Monitoring & Maintenance',
      description: 'Continuous monitoring and proactive maintenance',
      icon: '📊'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Improved Performance',
      description: 'Faster query execution and response times',
      stat: '70%'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Robust security measures and data protection',
      stat: '99.9%'
    },
    {
      icon: Database,
      title: 'Better Reliability',
      description: 'Reduced downtime and improved availability',
      stat: '99.5%'
    },
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      description: 'Reduced infrastructure and maintenance costs',
      stat: '40%'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Analysis',
      description: 'Evaluate current database infrastructure and identify optimization opportunities'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Create comprehensive database architecture and migration strategy'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy optimized database solutions with minimal disruption'
    },
    {
      step: '04',
      title: 'Monitoring & Support',
      description: 'Continuous monitoring, maintenance, and performance optimization'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Database Management Services</h1>
              <p className="lead mb-4">
                Optimize your data infrastructure with our comprehensive database management solutions. 
                From design to maintenance, we ensure your databases perform at their best.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Database Design & Architecture
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Performance Optimization
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Security & Backup Solutions
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  24/7 Monitoring & Support
                </li>
              </ul>
              <Link to="/contact" className="btn btn-light btn-lg">
                Optimize Your Database <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg" 
                alt="Database Management" 
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
            <h2 className="display-5 fw-bold mb-4">Our Database Management Services</h2>
            <p className="lead text-muted">Comprehensive solutions for all your database needs</p>
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

      {/* Database Technologies Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Database Technologies We Support</h2>
            <p className="lead text-muted">Expert management for all major database platforms</p>
          </div>
          <div className="row g-4">
            {databases.map((db, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <img 
                    src={db.image} 
                    alt={db.name} 
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">{db.name}</h5>
                    <p className="text-muted mb-3">{db.description}</p>
                    <div className="mb-3">
                      <small className="text-muted fw-bold">Key Features:</small>
                      <div className="mt-2">
                        {db.features.map((feature, idx) => (
                          <span key={idx} className="badge bg-light text-dark me-1 mb-1">
                            {feature}
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

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">What We Offer</h2>
            <p className="lead text-muted">Complete database lifecycle management services</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>
                      {service.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Benefits of Professional Database Management</h2>
            <p className="lead text-muted">Measurable improvements in database performance and reliability</p>
          </div>
          <div className="row g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card border-0 shadow-sm h-100 card-hover">
                    <div className="card-body text-center p-4">
                      <div className="mb-3">
                        <IconComponent size={40} className="text-primary" />
                      </div>
                      <h3 className="fw-bold text-primary mb-2">{benefit.stat}</h3>
                      <h5 className="fw-bold mb-3">{benefit.title}</h5>
                      <p className="text-muted">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Database Management Process</h2>
            <p className="lead text-muted">Systematic approach to database optimization and management</p>
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
            <h2 className="display-5 fw-bold mb-4">Database Success Stories</h2>
            <p className="lead text-muted">Real results from our database optimization projects</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" 
                  alt="E-commerce Database" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">E-commerce Platform</h5>
                  <p className="text-muted">Improved query performance by 80% and reduced page load times</p>
                  <div className="d-flex align-items-center">
                    <Zap className="text-success me-1" size={16} />
                    <span className="small">80% Performance Boost</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg" 
                  alt="Financial Database" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Financial Institution</h5>
                  <p className="text-muted">Achieved 99.99% uptime with robust backup and recovery solutions</p>
                  <div className="d-flex align-items-center">
                    <Shield className="text-primary me-1" size={16} />
                    <span className="small">99.99% Uptime</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg" 
                  alt="Healthcare Database" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Healthcare System</h5>
                  <p className="text-muted">Migrated to cloud with zero downtime and enhanced security</p>
                  <div className="d-flex align-items-center">
                    <Cloud className="text-warning me-1" size={16} />
                    <span className="small">Zero Downtime Migration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Why Choose Our Database Services?</h2>
            <p className="lead text-muted">Expert database management you can trust</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Database className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Database Experts</h5>
                <p className="text-muted">Certified professionals with deep database expertise</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Server className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">24/7 Monitoring</h5>
                <p className="text-muted">Round-the-clock database monitoring and support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Lock className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Security First</h5>
                <p className="text-muted">Enterprise-grade security and compliance measures</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Zap className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Performance Focus</h5>
                <p className="text-muted">Continuous optimization for peak performance</p>
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
              <h2 className="display-5 fw-bold mb-4">Ready to Optimize Your Database?</h2>
              <p className="lead mb-4">
                Transform your database infrastructure with our expert management services. 
                Let's discuss how we can improve your database performance and reliability.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Get Database Consultation
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

export default DatabaseManagement;