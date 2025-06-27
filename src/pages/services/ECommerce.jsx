import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Package, BarChart3, Shield, Smartphone, CheckCircle, ArrowRight, Users, TrendingUp } from 'lucide-react';

const ECommerce = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Custom Online Stores',
      description: 'Tailored e-commerce platforms designed for your specific business needs'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment gateways supporting multiple payment methods'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and automated stock management'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive sales analytics and business intelligence dashboards'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'PCI DSS compliance and enterprise-grade security measures'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Responsive design optimized for mobile shopping experiences'
    }
  ];

  const platforms = [
    {
      name: 'Custom E-commerce',
      description: 'Built from scratch for unique requirements',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      features: ['Custom Design', 'Scalable Architecture', 'Advanced Features', 'Full Control']
    },
    {
      name: 'Shopify Development',
      description: 'Professional Shopify store setup and customization',
      image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
      features: ['Theme Customization', 'App Integration', 'SEO Optimization', 'Payment Setup']
    },
    {
      name: 'WooCommerce',
      description: 'WordPress-based e-commerce solutions',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg',
      features: ['WordPress Integration', 'Plugin Development', 'Custom Themes', 'Performance Optimization']
    }
  ];

  const services = [
    {
      title: 'E-commerce Strategy',
      description: 'Comprehensive planning and market analysis for your online business',
      icon: '📊'
    },
    {
      title: 'Store Design & Development',
      description: 'Custom design and development of your e-commerce platform',
      icon: '🎨'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Secure integration of multiple payment methods and gateways',
      icon: '💳'
    },
    {
      title: 'Product Catalog Management',
      description: 'Efficient product listing, categorization, and inventory management',
      icon: '📦'
    },
    {
      title: 'SEO & Marketing',
      description: 'Search engine optimization and digital marketing strategies',
      icon: '📈'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support',
      icon: '🔧'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Sales',
      description: 'Boost revenue with optimized shopping experiences',
      stat: '300%'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Intuitive design that converts visitors to customers',
      stat: '85%'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Capture mobile traffic with responsive design',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Build customer trust with secure payment processing',
      stat: '99.9%'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">E-Commerce Solutions</h1>
              <p className=" mb-4">
                Build powerful online stores that drive sales and grow your business. 
                Our comprehensive e-commerce solutions cover everything from design to deployment.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Custom Online Stores
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Payment Gateway Integration
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Inventory Management
                </li>
                <li className="mb-2">
                  <CheckCircle size={20} className="text-success me-2" />
                  Mobile Optimization
                </li>
              </ul>
              <Link to="/contact" className="btn btn-light btn-lg">
                Start Your Store <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg" 
                alt="E-Commerce Solutions" 
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
            <h2 className="display-5 fw-bold mb-4">Complete E-Commerce Features</h2>
            <p className="lead text-muted">Everything you need to run a successful online business</p>
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
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">E-Commerce Platforms</h2>
            <p className="lead text-muted">Choose the right platform for your business needs</p>
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
                    <ul className="list-unstyled">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <CheckCircle size={16} className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="display-5 fw-bold mb-4">Our E-Commerce Services</h2>
            <p className="lead text-muted">End-to-end e-commerce solutions for your business</p>
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
            <h2 className="display-5 fw-bold mb-4">Why Choose Our E-Commerce Solutions?</h2>
            <p className="lead text-muted">Proven results that drive business growth</p>
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

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Success Stories</h2>
            <p className="lead text-muted">E-commerce stores we've built that drive results</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg" 
                  alt="Fashion Store" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Fashion Boutique</h5>
                  <p className="text-muted">Increased online sales by 400% with custom e-commerce platform</p>
                  <div className="d-flex align-items-center">
                    <TrendingUp className="text-success me-1" size={16} />
                    <span className="small">400% Sales Increase</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg" 
                  alt="Electronics Store" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Electronics Store</h5>
                  <p className="text-muted">Streamlined inventory management and improved customer experience</p>
                  <div className="d-flex align-items-center">
                    <Users className="text-primary me-1" size={16} />
                    <span className="small">10K+ Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow-sm card-hover">
                <img 
                  src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg" 
                  alt="Food Delivery" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">Food Delivery Platform</h5>
                  <p className="text-muted">Built marketplace connecting restaurants with customers</p>
                  <div className="d-flex align-items-center">
                    <Package className="text-warning me-1" size={16} />
                    <span className="small">1000+ Daily Orders</span>
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
            <h2 className="display-5 fw-bold mb-4">Our E-Commerce Development Process</h2>
            <p className="lead text-muted">From concept to launch, we guide you every step of the way</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">01</span>
                </div>
                <h5 className="fw-bold mb-3">Strategy & Planning</h5>
                <p className="text-muted">Market research, competitor analysis, and strategic planning</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">02</span>
                </div>
                <h5 className="fw-bold mb-3">Design & Prototyping</h5>
                <p className="text-muted">User experience design and interactive prototypes</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">03</span>
                </div>
                <h5 className="fw-bold mb-3">Development & Integration</h5>
                <p className="text-muted">Building the platform with payment and shipping integrations</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 fw-bold mb-0">04</span>
                </div>
                <h5 className="fw-bold mb-3">Launch & Optimization</h5>
                <p className="text-muted">Store launch, testing, and ongoing optimization</p>
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
              <h2 className="display-5 fw-bold mb-4">Ready to Launch Your Online Store?</h2>
              <p className="lead mb-4">
                Transform your business with a powerful e-commerce platform that drives sales and growth. 
                Let's build your success story together.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-light btn-lg">
                  Subcribe
                </Link>
                <Link to="/portfolio" className="btn btn-light btn-lg">
                  View Our Stores
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerce;