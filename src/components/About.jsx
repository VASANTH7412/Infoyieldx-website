import React from 'react';
import { Target, Eye, Award, Users, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and success.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading technology partner, transforming industries through digital innovation.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and customer-centricity guide everything we do.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Visionary leader with 15+ years in technology and business strategy.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      bio: 'Technology expert specializing in AI and cloud solutions.'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Development',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg',
      bio: 'Full-stack developer with expertise in modern web technologies.'
    }
  ];

  return (
    <div>
      {/* Hero Section with 3D Tilt Effect */}
      <section className="section-padding gradient-bg  position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">About InfoYieldX</h1>
              <p className="mb-4">
                We are a dynamic technology company committed to delivering exceptional 
                digital solutions that transform businesses and drive innovation.
              </p>
              <p className="mb-4">
                Founded with a vision to bridge the gap between technology and business success, 
                InfoYieldX has grown into a trusted partner for companies worldwide.
              </p>
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <Users className="me-3" size={24} />
                    <div>
                      <h5 className="mb-0">50+</h5>
                      <small>Expert Team</small>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="d-flex align-items-center">
                    <Award className="me-3" size={24} />
                    <div>
                      <h5 className="mb-0">500+</h5>
                      <small>Happy Clients</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="tilt-card shadow-lg rounded-4">
                <img 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg" 
                  alt="About Us" 
                  className="img-fluid rounded-4 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Core Values</h2>
            <p className="lead text-muted">The principles that guide our work and relationships</p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 border-0 shadow-sm card-hover transition-transform">
                    <div className="card-body text-center p-5">
                      <div className="mb-4">
                        <IconComponent size={50} className="text-primary" />
                      </div>
                      <h4 className="fw-bold mb-3">{value.title}</h4>
                      <p className="text-muted">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Leadership Team</h2>
            <p className="lead text-muted">Meet the experts driving our success</p>
          </div>
          <div className="row g-4">
            {team.map((member, index) => (
              <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card team-card border-0 shadow-sm hover-lift">
                  <img 
                    src={member.image} 
                    className="card-img-top rounded-top" 
                    alt={member.name}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center p-4">
                    <h5 className="fw-bold mb-2">{member.name}</h5>
                    <p className="text-primary mb-3">{member.position}</p>
                    <p className="text-muted small">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg" 
                alt="Our Story" 
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="mb-4">
                InfoYieldX was founded in 2019 with a simple yet ambitious goal: 
                to make cutting-edge technology accessible to businesses of all sizes.
              </p>
              <p className="mb-4">
                What started as a small team of passionate developers has grown into 
                a comprehensive technology solutions provider. We've helped hundreds 
                of businesses transform their operations, improve efficiency, and 
                achieve their digital goals.
              </p>
              <p className="mb-4">
                Today, we continue to push the boundaries of what's possible, 
                embracing new technologies like AI, cloud computing, and mobile 
                development to deliver solutions that make a real difference.
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="text-center p-3 bg-light rounded shadow-sm">
                    <TrendingUp size={30} className="text-primary mb-2" />
                    <h5 className="fw-bold">2019</h5>
                    <small className="text-muted">Founded</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-light rounded shadow-sm">
                    <Award size={30} className="text-primary mb-2" />
                    <h5 className="fw-bold">500+</h5>
                    <small className="text-muted">Projects</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg ">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Ready to Work Together?</h2>
              <p className="lead mb-4">
                Let's discuss how InfoYieldX can help transform your business 
                with innovative technology solutions.
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

export default About;