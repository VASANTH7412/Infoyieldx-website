import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, Users, TrendingUp, Award, DollarSign, Heart } from 'lucide-react';
import JobApplication from './JobApplication';


const Careers = () => {
  const [showJobApplication, setShowJobApplication] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const blogs = [
  {
    id: 1,
    title: "How InfoYieldX is Revolutionizing AI Hiring",
    description: "Discover how our AI division is building the future of talent hiring.",
    imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    publishedDate: "2024-06-01"
  },
  {
    id: 2,
    title: "Meet the Minds Behind Our Innovations",
    description: "A behind-the-scenes look at the people driving our company forward.",
    imageUrl: "https://images.pexels.com/photos/3184329/pexels-photo-3184329.jpeg",
    publishedDate: "2024-06-15"
  },
  {
    id: 3,
    title: "Top 5 Reasons to Join InfoYieldX",
    description: "Why top talent chooses InfoYieldX for growth, culture, and innovation.",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    publishedDate: "2024-07-01"
  }
];

  const jobOpenings = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / On-site',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      description: 'Join our engineering team to build scalable web applications and lead development projects.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Data Science',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
      description: 'Develop cutting-edge AI solutions and machine learning models for our clients.'
    },
    {
      title: 'Mobile App Developer',
      department: 'Mobile Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['React Native', 'iOS', 'Android', 'Flutter'],
      description: 'Create amazing mobile experiences for iOS and Android platforms.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'On-site',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      description: 'Design intuitive and beautiful user interfaces for web and mobile applications.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      description: 'Manage cloud infrastructure and deployment pipelines for optimal performance.'
    },
    {
      title: 'Business Analyst',
      department: 'Consulting',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2+ years',
      skills: ['Requirements Analysis', 'Process Improvement', 'Stakeholder Management'],
      description: 'Analyze business requirements and help clients optimize their processes.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths and skill development opportunities'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative and inclusive work environment'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options'
    },
    {
      icon: Award,
      title: 'Learning & Development',
      description: 'Training programs, conferences, and certification support'
    }
  ];

  const news = [
    "InfoYieldX wins 'Best Technology Company' award for 2024!",
    "We're expanding our AI division - 10 new positions opening soon!",
    "Congratulations to our team for successfully completing 500+ projects!",
    "New office opening in Silicon Valley - Join our growing team!"
  ];

 const handleApplyNow = (jobTitle) => {
  setSelectedJob(jobTitle);
  setShowJobApplication(true);
  window.scrollTo({ top: 0, behavior: 'smooth' }); // optional: scroll to top when form shows
};

  if (showJobApplication) {
    return (
      <JobApplication 
        jobTitle={selectedJob}
        onBack={() => setShowJobApplication(false)}
      />
    );
  }

  return (
    <div>
      {/* News Ticker */}
      <div className="news-ticker">
        <div className="container">
          <div className="news-ticker-content">
            <strong>Latest News: </strong>
            {news.join(' • ')}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding gradient-bg ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">Join Our Team</h1>
              <p className="lead mb-4">
                Be part of a dynamic team that's shaping the future of technology. 
                We offer exciting career opportunities in a collaborative environment.
              </p>
              <p className="mb-4">
                At InfoYieldX, we believe our people are our greatest asset. 
                Join us and be part of innovation, growth, and success.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#openings" className="btn btn-light btn-lg">
                  View Openings
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg">
                  Contact HR
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg" 
                alt="Join Our Team" 
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Why Work With Us?</h2>
            <p className="lead text-muted">Great benefits and opportunities for our team members</p>
          </div>
          <div className="row g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card border-0 shadow-sm h-100 card-hover">
                    <div className="card-body text-center p-4">
                      <div className="mb-3">
                        <IconComponent size={40} className="text-primary" />
                      </div>
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

      {/* Job Openings */}
      <section id="openings" className="section-padding">
  <div className="container">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-5 fw-bold mb-4">Current Openings</h2>
      <p className="lead text-muted">Find your perfect role and start your journey with us</p>
    </div>
    <div className="row g-4">
      {jobOpenings.map((job, index) => (
        <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="card border-0 shadow-sm h-100 card-hover">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="fw-bold mb-0">{job.title}</h5>
                <span className="badge bg-primary">{job.type}</span>
              </div>
              <div className="mb-3">
                <small className="text-muted d-block">
                  <Briefcase size={14} className="me-1" />
                  {job.department}
                </small>
                <small className="text-muted d-block">
                  <MapPin size={14} className="me-1" />
                  {job.location}
                </small>
                <small className="text-muted d-block">
                  <Clock size={14} className="me-1" />
                  {job.experience} experience
                </small>
              </div>
              <p className="text-muted mb-3">{job.description}</p>
              <div className="mb-3">
                <small className="text-muted fw-bold">Required Skills:</small>
                <div className="mt-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="badge bg-light text-dark me-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                className="btn btn-primary-custom w-100"
                onClick={() => handleApplyNow(job.title)}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Company Culture */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">Our Culture</h2>
              <p className="lead mb-4">
                We foster a culture of innovation, collaboration, and continuous learning. 
                Our team is diverse, talented, and passionate about technology.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Innovation-driven environment
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Collaborative team approach
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Continuous learning opportunities
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Work-life balance focus
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-success me-3"></i>
                  Diversity and inclusion
                </li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg" 
                alt="Company Culture" 
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
   
      {/* Career News & Blogs */}
<section className="section-padding" id="career-blogs">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">Career News & Blogs</h2>
    <div className="row">
      {blogs.map((blog) => (
        <div className="col-md-4 mb-4" key={blog.id}>
          <div className="card h-100 shadow border-0 rounded-4">
            <img
              src={blog.imageUrl}
              className="card-img-top rounded-top-4"
              style={{ height: "200px", objectFit: "cover" }}
              alt="Blog"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-semibold">{blog.title}</h5>
              <p className="card-text text-muted small mb-2">
                {new Date(blog.publishedDate).toLocaleDateString()}
              </p>
              <p className="card-text flex-grow-1">{blog.description}</p>
              <a
                href="#"
                className="btn btn-outline-primary mt-auto"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* CTA Section */}
      <section className="section-padding ">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="lead mb-4">
                Don't see a position that fits? We're always looking for talented individuals. 
                Send us your resume and let's talk!
              </p>
              <a href="/contact" className="btn btn-light btn-lg">
                Contact Our HR Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;