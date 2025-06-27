import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Calculator, ShoppingCart, Brain, Database, Server, ArrowRight, Star, Users, Award, TrendingUp, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ChatBot from '../components/ChatBot';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      path: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      path: '/services/app-development'
    },
    {
      icon: Calculator,
      title: 'Accounting',
      description: 'Professional accounting services with Tally integration',
      path: '/services/accounting'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions for your business',
      path: '/services/ecommerce'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered applications',
      path: '/services/ai-solutions'
    },
    {
      icon: Server,
      title: 'Oracle EPS',
      description: 'Enterprise planning solutions with Oracle systems',
      path: '/services/oracle-eps'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Secure and efficient database solutions',
      path: '/services/database-management'
    }
  ];
  useEffect(() => {
  const fetchSecureData = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch("http://localhost:8080/api/secure/data", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.text();
      console.log("Secure data:", result);
      // You can store it in state if needed
    } catch (error) {
      console.error("JWT error:", error);
    }
  };

  fetchSecureData();
}, []);


  return (
    <div>
      <section className="position-relative vh-100 d-flex align-items-center">
      {/* ✅ 3D Background */}
      <spline-viewer
        url="https://prod.spline.design/KA-h0k12nY3ds0sg/scene.splinecode"
        class="spline-bg"
      ></spline-viewer>

      {/* ✅ Left-Aligned Floating Content */}
      <div className="container-fluid z-2 position-relative">
        <div className="row">
          <div className="col-lg-6 hero-floating-content">
            <h1 className="display-3 fw-bold mb-3 text-shadow" style={{ color: '#222' }}>
              Transforming Ideas into
              <span className="d-block" style={{ color: '#00bcd4' }}>Digital Reality</span>
            </h1>
            <p className="lead mb-4" style={{ color: '#333' }}>
              We are InfoYieldX, your trusted partner in digital transformation.
              From web development to AI solutions, we deliver excellence in every project.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/services" className="btn btn-info btn-lg fw-bold shadow">
                Explore Services <ArrowRight className="ms-2" size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline-info btn-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  


      {/* About Section */}
<section className="section-padding section-3d-bg position-relative">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Image Side */}
      <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
          alt="About InfoYieldX" 
          className="img-fluid rounded-4 shadow-lg"
        />
      </div>

      {/* Text Side */}
      <div className="col-lg-6" data-aos="fade-left">
        <h2 className="display-5 fw-bold mb-4 text-dark">
          About <span className="text-accent">InfoYieldX</span>
        </h2>
        
        <p className="mb-4 text-muted style={{ color: '#333' }}">
          We are a leading technology company specializing in comprehensive digital solutions. 
          Our team of experts combines innovation with reliability to deliver exceptional results.
        </p>
        
        <p className="mb-4 text-muted style={{ color: '#333' }}">
          From startups to enterprises, we've helped businesses transform their operations 
          through cutting-edge technology solutions. Our commitment to excellence and 
          customer satisfaction sets us apart in the industry.
        </p>

        {/* Stats */}
        <div className="row mb-4">
          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <Users className="text-accent me-3" size={24} />
              <div>
                <h5 className="mb-0 fw-semibold text-dark">50+</h5>
                <small className="text-muted">Expert Team</small>
              </div>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="d-flex align-items-center">
              <Award className="text-accent me-3" size={24} />
              <div>
                <h5 className="mb-0 fw-semibold text-dark">100+</h5>
                <small className="text-muted">Projects Delivered</small>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/about" className="btn btn-primary-custom shadow-sm">
          Learn More <ArrowRight className="ms-2" size={16} />
        </Link>
      </div>
    </div>
  </div>
</section>



     {/* Services Section */}
<section className="section-padding section-3d-bg">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-5 fw-bold mb-3">Our Services</h2>
      <p className="lead text-muted">
        Comprehensive digital solutions tailored to your business needs
      </p>
    </div>

    <div className="row g-4">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <div key={index} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={index * 100}>
            <Link to={service.path} className="text-decoration-none">
              <div className="card service-card-custom h-100 text-center p-4">
                <div className="icon-circle mb-3 mx-auto">
                  <IconComponent size={28} />
                </div>
                <h6 className="fw-semibold mb-1">{service.title}</h6>
                <p className="text-muted small">{service.description}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
</section>



    {/* Stats Section */}
<section className="section-padding section-3d-bg text-gray">
  <div className="container">
    <div className="row text-center">
      {[
        { icon: <TrendingUp size={40} />, number: "500+", label: "Satisfied Clients", delay: 0 },
        { icon: <Award size={40} />, number: "100+", label: "Projects Completed", delay: 100 },
        { icon: <Users size={40} />, number: "50+", label: "Team Members", delay: 200 },
        { icon: <Star size={40} />, number: "5 Years", label: "Experience", delay: 300 },
      ].map((stat, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-6 mb-4"
          data-aos="zoom-in"
          data-aos-delay={stat.delay}
        >
          <div className="stats-card-custom p-4 h-100 shadow-lg rounded-4">
            <div className="icon-glow mb-3">{stat.icon}</div>
            <h3 className="fw-bold display-6">{stat.number}</h3>
            <p className="mb-0">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
       
       {/* Careers Teaser */}
<section className="section-padding section-3d-bg text-gray">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
        <h2 className="display-5 fw-bold mb-4">Join Our Team</h2>
        <p className="lead mb-4">
          Be part of an innovative team that's shaping the future of technology. 
          We offer exciting career opportunities in a dynamic work environment.
        </p>
        <Link to="/careers" className="btn btn-primary-custom btn-glass">
          View Opportunities <ArrowRight className="ms-2" size={16} />
        </Link>
      </div>
      <div className="col-lg-6" data-aos="fade-left">
        <div className="career-img-wrapper rounded-4 shadow-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg" 
            alt="Join Our Team" 
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>




     {/* Contact Section */}
<section className="section-padding section-3d-bg ">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
      <p className="lead text-muted">Get in touch with our team for your next project</p>
    </div>

    <div className="row g-4">
      {/* Visit Us */}
      <div className="col-lg-4" data-aos="fade-up">
        <a
          href="https://www.google.com/maps/place/Infoyieldx/@11.3098445,77.7493258,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba9651d811f56cd:0xb21477d4c2eb3561!8m2!3d11.3098445!4d77.7493258!16s%2Fg%2F11yc__n5pw?hl=en-GB"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <div className="card contact-card border-0 shadow h-100 text-center">
            <div className="card-body p-4">
              <div className="contact-icon mb-3">
                <MapPin size={28} />
              </div>
              <h5 className="fw-bold mb-3">Visit Our Office</h5>
              <p className="text-muted mb-0">
                MGK Complex, No:267<br />
                VIP Garden, Solar<br />
                Erode, Tamil Nadu 638002
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Call Us */}
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <a href="tel:+9080349031" className="text-decoration-none">
          <div className="card contact-card border-0 shadow h-100 text-center">
            <div className="card-body p-4">
              <div className="contact-icon mb-3">
                <Phone size={28} />
              </div>
              <h5 className="fw-bold mb-3">Call Us</h5>
              <p className="text-muted mb-0">
                +1 (555) 123-4567<br />
                +1 (555) 987-6543
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Email Us */}
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
        <a href="mailto:dvasanth7812@gmail.com" className="text-decoration-none">
          <div className="card contact-card border-0 shadow h-100 text-center">
            <div className="card-body p-4">
              <div className="contact-icon mb-3">
                <Mail size={28} />
              </div>
              <h5 className="fw-bold mb-3">Email Us</h5>
              <p className="text-muted mb-0">
                info@infoyieldx.com<br />
                support@infoyieldx.com
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div className="text-center mt-5" data-aos="fade-up">
      <Link to="/contact" className="btn btn-primary-custom btn-lg">
        <MessageCircle className="me-2" size={20} />
        Get In Touch
      </Link>
    </div>
  </div>
</section>




      {/* Final CTA Section */}
<section className="section-padding gradient-bg text-center section-3d-bg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8" data-aos="zoom-in">
        <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
        <p className="lead mb-4">
          Let's discuss your project and turn your ideas into reality. <br />
          Contact us today for a free consultation.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/contact" className="btn btn-cta-primary btn-lg shadow">
            Get In Touch <ArrowRight className="ms-2" size={20} />
          </Link>
          <Link to="/portfolio" className="btn btn-cta-outline btn-lg shadow-sm">
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;