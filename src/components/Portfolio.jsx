import React from 'react';
import { Star, Quote, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';


const Portfolio = () => {
  const experts = [
    {
      name: 'Dr. Sarah Mitchell',
      position: 'AI & Machine Learning Expert',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      expertise: 'PhD in Computer Science with 12+ years in AI development',
      achievements: ['Published 50+ research papers', 'Led AI projects for Fortune 500 companies', 'Speaker at international conferences']
    },
    {
      name: 'Michael Rodriguez',
      position: 'Full-Stack Development Lead',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg',
      expertise: 'Expert in React, Node.js, and cloud architecture',
      achievements: ['Built 100+ web applications', 'AWS Certified Solutions Architect', 'Open source contributor']
    },
    {
      name: 'Emily Chen',
      position: 'Database Architecture Specialist',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
      expertise: 'Oracle & MySQL expert with enterprise experience',
      achievements: ['Optimized databases for 1M+ users', 'Oracle Certified Master', '15+ years industry experience']
    },
    {
      name: 'David Kumar',
      position: 'Mobile App Development Expert',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      expertise: 'iOS & Android native and cross-platform development',
      achievements: ['50+ apps in app stores', 'React Native specialist', 'UI/UX design expertise']
    }
  ];

  const ceoQuote = {
    quote: "At InfoYieldX, we believe that technology should empower businesses, not complicate them. Our team of experts is dedicated to delivering solutions that not only meet today's needs but anticipate tomorrow's challenges. We're not just building software; we're crafting the digital future.",
    name: "John Smith",
    position: "CEO & Founder, InfoYieldX",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
  };

  const clientTestimonials = [
    {
      name: "Jennifer Walsh",
      position: "CTO, TechCorp Solutions",
      company: "TechCorp Solutions",
      rating: 5,
      comment: "InfoYieldX transformed our entire digital infrastructure. Their expertise in AI solutions helped us automate 60% of our processes, resulting in significant cost savings and improved efficiency.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      projectType: "AI Solutions & Automation"
    },
    {
      name: "Robert Kim",
      position: "Founder, StartupHub",
      company: "StartupHub",
      rating: 5,
      comment: "The mobile app they developed exceeded our expectations. The user experience is phenomenal and our downloads increased by 300%. Their attention to detail and innovative approach made all the difference.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
      projectType: "Mobile App Development"
    },
    {
      name: "Maria Santos",
      position: "CFO, RetailPlus",
      company: "RetailPlus",
      rating: 5,
      comment: "Their accounting solutions with Tally integration streamlined our financial processes completely. We now have real-time insights into our business performance. Highly recommended!",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg",
      projectType: "Accounting & ERP Solutions"
    },
    {
      name: "Alex Thompson",
      position: "VP Technology, DataFlow Inc",
      company: "DataFlow Inc",
      rating: 5,
      comment: "InfoYieldX delivered a robust e-commerce platform that handles our high-volume transactions flawlessly. Their database optimization work improved our site speed by 75%.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      projectType: "E-commerce & Database Management"
    },
    {
      name: "Lisa Chen",
      position: "Director of Operations, HealthTech Pro",
      company: "HealthTech Pro",
      rating: 5,
      comment: "The Oracle EPS implementation was seamless. InfoYieldX's team understood our complex requirements and delivered a solution that improved our operational efficiency by 40%.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      projectType: "Oracle EPS Implementation"
    },
    {
      name: "James Wilson",
      position: "CEO, InnovateCorp",
      company: "InnovateCorp",
      rating: 5,
      comment: "From web development to AI integration, InfoYieldX has been our technology partner for 3 years. Their innovative solutions have helped us stay ahead of the competition.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
      projectType: "Full-Stack Technology Solutions"
    }
  ];

  const companyStats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '100+', label: 'Projects Completed' },
    { icon: TrendingUp, number: '99%', label: 'Client Satisfaction' },
    { icon: Star, number: '5+', label: 'Years Experience' }
  ];

    return (
    <div>
      {/* Hero Section with 3D Tilt */}
      <section className="section-padding gradient-bg  position-relative overflow-hidden">
        <div className="container text-center">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="mx-auto">
            <div className="p-5 rounded-4 shadow-lg bg-opacity-10 border border-white border-opacity-25">
              <h1 className="display-4 fw-bold mb-3" data-aos="fade-up">Our Portfolio</h1>
              <p className="lead mb-0" data-aos="fade-up" data-aos-delay="100">
                Meet our experts and discover what our CEO has to say about our journey
              </p>
            </div>
          </Tilt>
        </div>
      </section>

      {/* CEO Message */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <Tilt>
                <div className="position-relative">
                  <img 
                    src={ceoQuote.image} 
                    alt={ceoQuote.name} 
                    className="img-fluid rounded-4 shadow-lg"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-10 rounded-4"></div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ps-lg-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <Quote size={40} className="text-primary" />
                </div>
                <blockquote className="blockquote">
                  <p className="lead mb-4 fst-italic">"{ceoQuote.quote}"</p>
                </blockquote>
                <div className="border-start border-primary border-4 ps-4">
                  <h5 className="fw-bold mb-1">{ceoQuote.name}</h5>
                  <p className="text-muted mb-0">{ceoQuote.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Company Stats */}
<section className="section-padding">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-5 fw-bold mb-3">Trusted by Businesses Worldwide</h2>
      <p className="text-muted lead">Our impact in numbers speaks for itself</p>
    </div>
    <div className="row text-center">
      {companyStats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="col-lg-3 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card border-0 shadow-sm h-100 transition-transform hover-scale rounded-4">
              <div className="card-body p-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #00bcd4 0%, #005d75 100%)',
                  }}
                >
                  <IconComponent size={36} className="text-white" />
                </div>
                <h3 className="fw-bold text-dark mb-2">{stat.number}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


  {/* Our Experts */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Expert Team</h2>
            <p className="lead text-muted">Meet the professionals behind our success</p>
          </div>
          <div className="row g-4">
            {experts.map((expert, index) => (
              <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.1} scale={1.02}>
                  <div className="card border-0 shadow-lg h-100 team-card rounded-4 overflow-hidden position-relative hover-scale bg-white text-dark">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={expert.image}
                          className="img-fluid rounded-start h-100"
                          alt={expert.name}
                          style={{ objectFit: 'cover', minHeight: '300px' }}
                        />
                      </div>
                      <div className="col-md-8 d-flex flex-column justify-content-between">
                        <div className="card-body p-4">
                          <h5 className="fw-bold mb-2">{expert.name}</h5>
                          <p className="text-primary fw-semibold mb-2">{expert.position}</p>
                          <p className="text-muted mb-3">{expert.expertise}</p>

                          <h6 className="fw-bold mb-2">Key Achievements:</h6>
                          <ul className="list-unstyled">
                            {expert.achievements.map((achievement, idx) => (
                              <li key={idx} className="mb-1 d-flex align-items-start">
                                <CheckCircle size={16} className="text-success me-2 mt-1 flex-shrink-0" />
                                <small className="text-muted">{achievement}</small>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="card-footer bg-transparent border-0 d-flex gap-3 ps-4 pb-3">
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-hover d-inline-flex align-items-center justify-content-center rounded-circle"
                            style={{ width: '38px', height: '38px', backgroundColor: '#e1f5fe', color: '#0a66c2' }}
                          >
                            <i className="bi bi-linkedin" style={{ fontSize: '18px' }}></i>
                          </a>
                          <a
                            href="https://infoyieldx.com/profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-hover d-inline-flex align-items-center justify-content-center rounded-circle"
                            style={{ width: '38px', height: '38px', backgroundColor: '#f5f5f5', color: '#333' }}
                          >
                            <i className="bi bi-person" style={{ fontSize: '18px' }}></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>
        {`
          .hover-scale {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-scale:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          }
          .icon-hover {
            transition: all 0.3s ease;
          }
            .card {
  transition: transform 0.4s ease-in-out;
  will-change: transform;
  transform-style: preserve-3d;
}

          .icon-hover:hover {
            transform: scale(1.15);
            background-color: #00bcd4 !important;
            color: #fff !important;
          }
        `}
      </style>

      {/* CTA Section */}
      <section className="section-padding ">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Work with Our Experts</h2>
              <p className="lead mb-4">
                Ready to leverage our expertise for your next project? Let's discuss how our team can help you achieve your goals.
              </p>
              <a href="/contact" className="btn btn-light btn-lg rounded-pill px-4 py-2">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
