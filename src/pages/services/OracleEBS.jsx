import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Database, Shield, Zap, Users, BarChart3, CheckCircle, ArrowRight, Settings, TrendingUp } from 'lucide-react';

const OracleEBS = () => {
  const features = [
    {
      icon: Server,
      title: 'Oracle ERP Implementation',
      description: 'Complete Oracle ERP system setup and configuration for your business'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Seamless migration of existing data to Oracle systems'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and regulatory compliance setup'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'System tuning and optimization for maximum performance'
    },
    {
      icon: Users,
      title: 'User Training',
      description: 'Comprehensive training programs for your team'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced reporting and analytics solutions'
    }
  ];

  const services = [
    {
      title: 'Oracle Cloud ERP',
      description: 'Modern cloud-based ERP solutions for scalable business operations',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
      modules: ['Financial Management', 'Supply Chain', 'Human Capital', 'Project Management']
    },
    {
      title: 'Oracle E-Business Suite',
      description: 'Comprehensive on-premise ERP solution for complex business needs',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      modules: ['Financials', 'Manufacturing', 'CRM', 'Procurement']
    },
    {
      title: 'Oracle NetSuite',
      description: 'Integrated business management suite for growing companies',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
      modules: ['Accounting', 'Inventory', 'CRM', 'E-commerce']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline business processes and reduce manual work',
      stat: '50%'
    },
    {
      icon: BarChart3,
      title: 'Better Visibility',
      description: 'Real-time insights into business operations',
      stat: '90%'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and data protection',
      stat: '99.9%'
    },
    {
      icon: Users,
      title: 'User Adoption',
      description: 'High user adoption rates with proper training',
      stat: '95%'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Complete manufacturing resource planning and optimization',
      icon: '🏭',
      solutions: ['Production Planning', 'Quality Management', 'Supply Chain', 'Cost Management']
    },
    {
      name: 'Financial Services',
      description: 'Comprehensive financial management and compliance solutions',
      icon: '🏦',
      solutions: ['Risk Management', 'Regulatory Reporting', 'Asset Management', 'Customer Analytics']
    },
    {
      name: 'Healthcare',
      description: 'Healthcare-specific ERP solutions for patient care and operations',
      icon: '🏥',
      solutions: ['Patient Management', 'Revenue Cycle', 'Supply Chain', 'Compliance']
    },
    {
      name: 'Retail',
      description: 'Retail management solutions for omnichannel operations',
      icon: '🛒',
      solutions: ['Inventory Management', 'Point of Sale', 'Customer Experience', 'Analytics']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Analyze current systems and plan Oracle implementation strategy'
    },
    {
      step: '02',
      title: 'System Design',
      description: 'Design Oracle architecture tailored to your business needs'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy and configure Oracle systems with best practices'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing support, maintenance, and performance optimization'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Oracle EBS Solutions</h1>
              <p className="lead mb-4">
                Transform your business with Oracle Enterprise Planning Systems. 
                Our expert team delivers comprehensive Oracle solutions for modern enterprises.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Oracle ERP Implementation
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  System Integration
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Performance Optimization
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  24/7 Support
                </li>
              </ul>
              <Link to="/contact" className="btn btn-light btn-lg">
                Get Oracle Consultation <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg" 
                alt="Oracle EPS Solutions" 
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
            <h2 className="display-5 fw-bold mb-4">Our Oracle EBS Services</h2>
            <p className="lead text-muted">Comprehensive Oracle solutions for enterprise success</p>
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

      {/* Oracle Solutions Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Oracle Solutions We Implement</h2>
            <p className="lead text-muted">Choose the right Oracle platform for your business</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h4 className="fw-bold mb-3">{service.title}</h4>
                    <p className="text-muted mb-3">{service.description}</p>
                    <div className="mb-3">
                      <small className="text-muted fw-bold">Key Modules:</small>
                      <div className="mt-2">
                        {service.modules.map((module, idx) => (
                          <span key={idx} className="badge bg-light text-dark me-1 mb-1">
                            {module}
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

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Industries We Serve</h2>
            <p className="lead text-muted">Oracle solutions tailored for specific industry needs</p>
          </div>
          <div className="row g-4">
            {industries.map((industry, index) => (
              <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{ fontSize: '2.5rem' }}>
                        {industry.icon}
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">{industry.name}</h5>
                        <p className="text-muted mb-0">{industry.description}</p>
                      </div>
                    </div>
                    <div>
                      <small className="text-muted fw-bold">Solutions:</small>
                      <ul className="list-unstyled mt-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="mb-1">
                            <CheckCircle size={14} className="text-success me-2" />
                            <small>{solution}</small>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            <h2 className="display-5 fw-bold mb-4">Benefits of Oracle EBS</h2>
            <p className="lead text-muted">Measurable business impact with Oracle solutions</p>
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
            <h2 className="display-5 fw-bold mb-4">Our Implementation Process</h2>
            <p className="lead text-muted">Proven methodology for successful Oracle deployments</p>
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
            <h2 className="display-5 fw-bold mb-4">Oracle Success Stories</h2>
            <p className="lead text-muted">Real results from our Oracle implementations</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg" 
                  alt="Manufacturing Success" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Manufacturing Giant</h5>
                  <p className="text-muted">Reduced operational costs by 40% with Oracle ERP implementation</p>
                  <div className="d-flex align-items-center">
                    <TrendingUp className="text-success me-1" size={16} />
                    <span className="small">40% Cost Reduction</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg" 
                  alt="Financial Services" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Financial Institution</h5>
                  <p className="text-muted">Improved reporting accuracy to 99.9% with Oracle Business Intelligence</p>
                  <div className="d-flex align-items-center">
                    <BarChart3 className="text-primary me-1" size={16} />
                    <span className="small">99.9% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg" 
                  alt="Retail Chain" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Retail Chain</h5>
                  <p className="text-muted">Streamlined operations across 200+ stores with Oracle Cloud ERP</p>
                  <div className="d-flex align-items-center">
                    <Settings className="text-warning me-1" size={16} />
                    <span className="small">200+ Stores Connected</span>
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
            <h2 className="display-5 fw-bold mb-4">Why Choose InfoYieldX for Oracle?</h2>
            <p className="lead text-muted">Your trusted Oracle implementation partner</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Users className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Certified Experts</h5>
                <p className="text-muted">Oracle-certified consultants with years of experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Shield className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Proven Track Record</h5>
                <p className="text-muted">100+ successful Oracle implementations</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Zap className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Rapid Deployment</h5>
                <p className="text-muted">Fast implementation with minimal disruption</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Settings className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Ongoing Support</h5>
                <p className="text-muted">24/7 support and maintenance services</p>
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
              <h2 className="display-5 fw-bold mb-4">Ready to Transform with Oracle?</h2>
              <p className="lead mb-4">
                Unlock the full potential of Oracle EPS for your enterprise. 
                Let our experts guide you through a successful Oracle implementation.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Subcribe
                </Link>
                <Link to="/portfolio" className="btn btn-light btn-lg">
                  Get Oracle Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OracleEBS;