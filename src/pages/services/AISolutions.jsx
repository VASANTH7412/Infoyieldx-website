import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Bot, BarChart3, Zap, Shield, Cog, CheckCircle, ArrowRight, TrendingUp, Users } from 'lucide-react';

const AISolutions = () => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models for predictive analytics and intelligent automation'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI for customer service and support'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and insights from your business data'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline business processes'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Intelligent security systems with threat detection and prevention'
    },
    {
      icon: Cog,
      title: 'Custom AI Solutions',
      description: 'Tailored AI applications for specific business requirements'
    }
  ];

  const aiServices = [
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and language understanding',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      applications: ['Chatbots', 'Document Analysis', 'Translation', 'Content Generation']
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual analysis',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      applications: ['Quality Control', 'Medical Imaging', 'Security Systems', 'Retail Analytics']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven business decisions',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
      applications: ['Sales Forecasting', 'Risk Assessment', 'Demand Planning', 'Customer Behavior']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics and patient care solutions',
      icon: '🏥',
      useCases: ['Medical Imaging', 'Drug Discovery', 'Patient Monitoring', 'Telemedicine']
    },
    {
      name: 'Finance',
      description: 'Intelligent financial services and risk management',
      icon: '💰',
      useCases: ['Fraud Detection', 'Algorithmic Trading', 'Credit Scoring', 'Robo-advisors']
    },
    {
      name: 'Retail',
      description: 'Personalized shopping experiences and inventory optimization',
      icon: '🛒',
      useCases: ['Recommendation Systems', 'Price Optimization', 'Inventory Management', 'Customer Analytics']
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing and predictive maintenance',
      icon: '🏭',
      useCases: ['Quality Control', 'Predictive Maintenance', 'Supply Chain', 'Process Optimization']
    },
    {
      name: 'Transportation',
      description: 'Autonomous systems and route optimization',
      icon: '🚗',
      useCases: ['Route Optimization', 'Fleet Management', 'Autonomous Vehicles', 'Traffic Analysis']
    },
    {
      name: 'Education',
      description: 'Personalized learning and educational analytics',
      icon: '📚',
      useCases: ['Adaptive Learning', 'Student Analytics', 'Content Recommendation', 'Assessment Tools']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate processes and reduce manual work',
      stat: '60%'
    },
    {
      icon: BarChart3,
      title: 'Better Insights',
      description: 'Make data-driven decisions with AI analytics',
      stat: '85%'
    },
    {
      icon: Users,
      title: 'Enhanced Experience',
      description: 'Improve customer satisfaction with AI',
      stat: '40%'
    },
    {
      icon: Zap,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation',
      stat: '30%'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">AI Solutions</h1>
              <p className="lead mb-4">
                Harness the power of artificial intelligence to transform your business. 
                Our AI solutions automate processes, provide insights, and drive innovation.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Machine Learning Models
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Intelligent Automation
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Predictive Analytics
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Custom AI Applications
                </li>
              </ul>
              <Link to="/contact" className="btn btn-light btn-lg">
                Explore AI Solutions <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                alt="AI Solutions" 
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
            <h2 className="display-5 fw-bold mb-4">Our AI Capabilities</h2>
            <p className="lead text-muted">Comprehensive AI solutions for modern businesses</p>
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

      {/* AI Services Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">AI Technologies We Specialize In</h2>
            <p className="lead text-muted">Cutting-edge AI technologies for various applications</p>
          </div>
          <div className="row g-4">
            {aiServices.map((service, index) => (
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
                      <small className="text-muted fw-bold">Applications:</small>
                      <div className="mt-2">
                        {service.applications.map((app, idx) => (
                          <span key={idx} className="badge bg-light text-dark me-1 mb-1">
                            {app}
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
            <p className="lead text-muted">AI solutions tailored for specific industry needs</p>
          </div>
          <div className="row g-4">
            {industries.map((industry, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 card-hover">
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>
                      {industry.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{industry.name}</h5>
                    <p className="text-muted mb-3">{industry.description}</p>
                    <div className="text-start">
                      <small className="text-muted fw-bold">Use Cases:</small>
                      <ul className="list-unstyled mt-2">
                        {industry.useCases.map((useCase, idx) => (
                          <li key={idx} className="mb-1">
                            <small className="text-muted">• {useCase}</small>
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
            <h2 className="display-5 fw-bold mb-4">Benefits of AI Implementation</h2>
            <p className="lead text-muted">Measurable impact on your business performance</p>
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

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">AI Success Stories</h2>
            <p className="lead text-muted">Real-world AI implementations that delivered results</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg" 
                  alt="Predictive Analytics" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Predictive Maintenance</h5>
                  <p className="text-muted">Reduced equipment downtime by 70% using AI-powered predictive analytics</p>
                  <div className="d-flex align-items-center">
                    <TrendingUp className="text-success me-1" size={16} />
                    <span className="small">70% Downtime Reduction</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                  alt="Computer Vision" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Quality Control AI</h5>
                  <p className="text-muted">Improved product quality detection accuracy to 99.5% using computer vision</p>
                  <div className="d-flex align-items-center">
                    <Shield className="text-primary me-1" size={16} />
                    <span className="small">99.5% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                  alt="Customer Service AI" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">AI Customer Service</h5>
                  <p className="text-muted">Automated 80% of customer inquiries with intelligent chatbot system</p>
                  <div className="d-flex align-items-center">
                    <Bot className="text-warning me-1" size={16} />
                    <span className="small">80% Automation Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our AI Development Process</h2>
            <p className="lead text-muted">Systematic approach to AI implementation</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">01</span>
                </div>
                <h5 className="fw-bold mb-3">Data Assessment</h5>
                <p className="text-muted">Analyze your data and identify AI opportunities</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">02</span>
                </div>
                <h5 className="fw-bold mb-3">Model Development</h5>
                <p className="text-muted">Build and train custom AI models for your needs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">03</span>
                </div>
                <h5 className="fw-bold mb-3">Integration</h5>
                <p className="text-muted">Seamlessly integrate AI into your existing systems</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">04</span>
                </div>
                <h5 className="fw-bold mb-3">Optimization</h5>
                <p className="text-muted">Continuous monitoring and model improvement</p>
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
              <h2 className="display-5 fw-bold mb-4">Ready to Transform with AI?</h2>
              <p className="lead mb-4">
                Unlock the potential of artificial intelligence for your business. 
                Let's discuss how AI can drive innovation and growth in your organization.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Subcribe
                </Link>
                <Link to="/portfolio" className="btn btn-light btn-lg">
                  view our works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;