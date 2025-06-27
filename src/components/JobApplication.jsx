import React, { useState } from 'react';
import { ArrowLeft, Upload, User, Mail, Phone, MapPin, FileText, Briefcase } from 'lucide-react';

const JobApplication = ({ jobTitle, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    coverLetter: '',
    linkedIn: '',
    portfolio: ''
  });
  const [files, setFiles] = useState({
    resume: null,
    coverLetterFile: null
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, value);
  });

  data.append("resume", files.resume);
  if (files.coverLetterFile) {
    data.append("coverLetterFile", files.coverLetterFile);
  }

  try {
    const res = await fetch("http://localhost:8080/api/careers/apply", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    alert(result.message || "Application submitted successfully!");
    setLoading(false);
    onBack(); // go back to job list
  } catch (err) {
    console.error("Error submitting application:", err);
    alert("Something went wrong. Please try again.");
    setLoading(false);
  }
};


  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-primary text-white">
              <div className="d-flex align-items-center">
                <button 
                  className="btn btn-outline-light btn-sm me-3"
                  onClick={onBack}
                >
                  <ArrowLeft size={16} />
                </button>
                <div>
                  <h4 className="mb-0">Job Application</h4>
                  <p className="mb-0 opacity-75">Applying for: {jobTitle}</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3 text-primary">Personal Information</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email Address *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone Number *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address *</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <MapPin size={16} />
                      </span>
                      <textarea
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="2"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3 text-primary">Professional Information</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Years of Experience *</label>
                      <select
                        className="form-control"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Notice Period</label>
                      <select
                        className="form-control"
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleChange}
                      >
                        <option value="">Select Notice Period</option>
                        <option value="immediate">Immediate</option>
                        <option value="15-days">15 days</option>
                        <option value="1-month">1 month</option>
                        <option value="2-months">2 months</option>
                        <option value="3-months">3 months</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Current Salary (Optional)</label>
                      <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input
                          type="number"
                          className="form-control"
                          name="currentSalary"
                          value={formData.currentSalary}
                          onChange={handleChange}
                          placeholder="Current salary"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Expected Salary</label>
                      <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input
                          type="number"
                          className="form-control"
                          name="expectedSalary"
                          value={formData.expectedSalary}
                          onChange={handleChange}
                          placeholder="Expected salary"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3 text-primary">Documents</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Resume/CV *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Upload size={16} />
                        </span>
                        <input
                          type="file"
                          className="form-control"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                        />
                      </div>
                      <small className="text-muted">Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Cover Letter (Optional)</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FileText size={16} />
                        </span>
                        <input
                          type="file"
                          className="form-control"
                          name="coverLetterFile"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3 text-primary">Additional Information</h5>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">LinkedIn Profile</label>
                      <input
                        type="url"
                        className="form-control"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Portfolio/Website</label>
                      <input
                        type="url"
                        className="form-control"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Cover Letter</label>
                    <textarea
                      className="form-control"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    ></textarea>
                  </div>
                </div>

                {/* Terms */}
                <div className="mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="agreeTerms" required />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      I agree to the processing of my personal data and <a href="#" className="text-decoration-none">Terms & Conditions</a>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Briefcase size={20} className="me-2" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;