import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calculator, FileText, PieChart, Shield, Users, Building, Check, CreditCard } from 'lucide-react';

const Accounting = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calculator,
      title: 'Tally Integration',
      description: 'Seamless integration with Tally software for comprehensive accounting'
    },
    {
      icon: FileText,
      title: 'Financial Reports',
      description: 'Detailed financial statements and custom reporting solutions'
    },
    {
      icon: PieChart,
      title: 'Tax Management',
      description: 'Complete tax planning, preparation, and compliance services'
    },
    {
      icon: Shield,
      title: 'Audit Support',
      description: 'Professional audit preparation and representation services'
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'Complete payroll processing and employee tax management'
    },
    {
      icon: Building,
      title: 'Business Advisory',
      description: 'Strategic financial advice to grow your business'
    }
  ];

  const pricingPlans = [
    {
      name: 'Single Organization',
      price: '₹15,000',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Tally Basic Setup',
        'Monthly Financial Reports',
        'GST Compliance',
        'Basic Tax Support',
        'Email Support',
        'Up to 100 transactions/month'
      ],
      popular: false
    },
    {
      name: 'Large Organization',
      price: '₹35,000',
      period: '/month',
      description: 'Ideal for growing businesses with complex needs',
      features: [
        'Advanced Tally Configuration',
        'Weekly Financial Reports',
        'Complete Tax Management',
        'Inventory Management',
        'Payroll Processing',
        'Priority Phone Support',
        'Up to 1000 transactions/month',
        'Custom Reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise Company',
      price: '₹75,000',
      period: '/month',
      description: 'Comprehensive solution for large enterprises',
      features: [
        'Full Tally ERP Implementation',
        'Daily Financial Dashboards',
        'Multi-location Support',
        'Advanced Analytics',
        'Dedicated Account Manager',
        '24/7 Support',
        'Unlimited Transactions',
        'Custom Integrations',
        'Compliance Management'
      ],
      popular: false
    }
  ];

  const auditServices = {
    name: 'Audit Services',
    price: '₹25,000',
    period: '/audit',
    description: 'Professional audit services for businesses of all sizes',
    features: [
      'Financial Statement Audit',
      'Internal Audit',
      'Compliance Audit',
      'Risk Assessment',
      'Audit Report Preparation',
      'Management Letter'
    ],
    popular: false
  };

  // Redirect to Contact page with plan info in state
  const handlePlanSelect = (plan) => {
    navigate('/contact', { state: { planName: plan.name, planPrice: plan.price } });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white" style={{ background: 'linear-gradient(135deg, #00bcd4 0%, #004d40 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Accounting Services</h1>
              <p className="lead mb-4">
                Professional accounting solutions with Tally integration.<br /> 
                Streamline your financial processes and ensure compliance.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <Check size={20} className="text-success me-2" />
                  Tally Software Integration
                </li>
                <li className="mb-2">
                  <Check size={20} className="text-success me-2" />
                  GST & Tax Compliance
                </li>
                <li className="mb-2">
                  <Check size={20} className="text-success me-2" />
                  Financial Reporting
                </li>
                <li className="mb-2">
                  <Check size={20} className="text-success me-2" />
                  Audit Support
                </li>
              </ul>
              <a href="#pricing" className="btn btn-light btn-lg shadow">
                View Pricing Plans
              </a>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg" 
                alt="Accounting Services" 
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Accounting Services</h2>
            <p className="lead text-muted">Comprehensive financial solutions for your business</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div 
                    className="card border-0 shadow-sm h-100 card-hover"
                    style={{
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                  >
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
{/* Pricing Section */}
<section id="pricing" className="section-padding bg-light">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-5 fw-bold mb-3">Accounting Services</h2>
      <p className="lead text-muted mb-4">Choose the perfect plan for your business needs</p>
    </div>

    {/* Pricing Plans Grid */}
    <div className="row g-4">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
          <div
            className={`pricing-card card border-0 shadow-sm h-100 position-relative ${plan.popular ? 'border-primary' : ''}`}
            style={{
              borderWidth: plan.popular ? '3px' : '1px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}
          >
            {plan.popular && (
              <div
                className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2"
                style={{ zIndex: 10, fontWeight: '600', fontSize: '0.9rem' }}
              >
                Most Popular
              </div>
            )}
            <div className="card-body text-center p-4 d-flex flex-column">
              <h4 className="fw-bold mb-3">{plan.name}</h4>

              {/* Price removed */}

              <p className="text-muted mb-4">{plan.description}</p>
              <ul className="list-unstyled mb-4 text-start flex-grow-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    <Check size={16} className="text-success me-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${plan.popular ? 'btn-primary-custom' : 'btn-outline-primary'} mt-auto`}
                onClick={() => handlePlanSelect(plan)}
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Audit Service Section - separate row */}
    <div className="row align-items-center mt-5" data-aos="fade-up" data-aos-delay={pricingPlans.length * 100}>
      {/* Audit Service Text and Features */}
      <div className="col-lg-7">
        <div className="card border-0 shadow-sm h-100 p-4">
          <h4 className="fw-bold mb-3">{auditServices.title}</h4>

          {/* Price removed */}

          <p className="text-muted mb-4">{auditServices.description}</p>
          <ul className="list-unstyled mb-4 text-start">
            {auditServices.features.map((feature, idx) => (
              <li key={idx} className="mb-2">
                <Check size={16} className="text-success me-2" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="btn btn-outline-primary" onClick={() => handlePlanSelect(auditServices)}>
            Get Audit Service
          </button>
        </div>
      </div>

      {/* Audit Service Image on Right */}
      <div className="col-lg-5">
        <img
          src="https://images.pexels.com/photos/6863353/pexels-photo-6863353.jpeg"
          alt="Audit Services"
          className="img-fluid rounded shadow"
          style={{ objectFit: 'cover', width: '100%', maxHeight: '350px' }}
        />
      </div>
    </div>
  </div>
</section>



      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Why Choose Our Accounting Services?</h2>
            <p className="lead text-muted">Trusted by businesses across industries</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Users className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Expert Team</h5>
                <p className="text-muted">Certified accountants with years of experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Shield className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">100% Compliance</h5>
                <p className="text-muted">Ensure full regulatory compliance</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <Calculator className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Tally Experts</h5>
                <p className="text-muted">Specialized in Tally software implementation</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <CreditCard className="text-white" size={30} />
                </div>
                <h5 className="fw-bold">Flexible Payment</h5>
                <p className="text-muted">Multiple payment options available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #00bcd4 0%, #004d40 100%)' }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Ready to Streamline Your Accounting?</h2>
              <p className="lead mb-4">
                Let us handle your accounting needs while you focus on growing your business. <br />
                Contact us today for a free consultation.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/contact" className="btn btn-outline-light btn-lg shadow">
                  Get Free Consultation
                </Link>
                <a href="/contact" className="btn btn-outline-light btn-lg shadow">
                  Subcribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounting;
