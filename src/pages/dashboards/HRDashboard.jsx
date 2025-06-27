import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  FileText, 
  Award,
  TrendingUp,
  Clock,
  Mail,
  Phone,
  MapPin,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  LogOut,
  Briefcase,
  DollarSign
} from 'lucide-react';

const HRDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Employees', value: '156', icon: Users, color: 'primary' },
    { title: 'New Hires', value: '12', icon: UserPlus, color: 'success' },
    { title: 'Open Positions', value: '8', icon: Briefcase, color: 'warning' },
    { title: 'Attendance Rate', value: '94%', icon: TrendingUp, color: 'info' }
  ];

  const employees = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@infoyieldx.com', 
      department: 'Development', 
      position: 'Senior Developer',
      joinDate: '2023-01-15',
      status: 'Active',
      salary: '$75,000'
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@infoyieldx.com', 
      department: 'Design', 
      position: 'UI/UX Designer',
      joinDate: '2023-03-20',
      status: 'Active',
      salary: '$65,000'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@infoyieldx.com', 
      department: 'Marketing', 
      position: 'Marketing Manager',
      joinDate: '2023-02-10',
      status: 'On Leave',
      salary: '$70,000'
    }
  ];

  const jobOpenings = [
    { id: 1, title: 'Senior React Developer', department: 'Development', applications: 25, status: 'Active' },
    { id: 2, title: 'Digital Marketing Specialist', department: 'Marketing', applications: 18, status: 'Active' },
    { id: 3, title: 'Data Analyst', department: 'Analytics', applications: 12, status: 'Draft' }
  ];

  const leaveRequests = [
    { id: 1, employee: 'John Doe', type: 'Vacation', dates: 'Dec 25-30, 2024', status: 'Pending' },
    { id: 2, employee: 'Jane Smith', type: 'Sick Leave', dates: 'Dec 20, 2024', status: 'Approved' },
    { id: 3, employee: 'Mike Johnson', type: 'Personal', dates: 'Jan 5-7, 2025', status: 'Pending' }
  ];

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa', paddingTop: '80px' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 col-md-3 bg-white shadow-sm" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className="p-3">
              <h5 className="fw-bold text-primary mb-4">HR Panel</h5>
              <nav className="nav flex-column">
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <TrendingUp size={16} className="me-2" />
                  Overview
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'employees' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('employees')}
                >
                  <Users size={16} className="me-2" />
                  Employees
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'recruitment' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('recruitment')}
                >
                  <UserPlus size={16} className="me-2" />
                  Recruitment
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'attendance' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('attendance')}
                >
                  <Clock size={16} className="me-2" />
                  Attendance
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'leaves' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('leaves')}
                >
                  <Calendar size={16} className="me-2" />
                  Leave Management
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'payroll' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('payroll')}
                >
                  <DollarSign size={16} className="me-2" />
                  Payroll
                </button>
              </nav>
              
              <div className="mt-auto pt-4">
                <Link to="/" className="btn btn-outline-danger w-100">
                  <LogOut size={16} className="me-2" />
                  Logout
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-10 col-md-9">
            <div className="p-4">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h2 className="fw-bold mb-1">HR Dashboard</h2>
                  <p className="text-muted mb-0">Human Resources Management</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary">
                    <Download size={16} className="me-2" />
                    Export
                  </button>
                  <button className="btn btn-primary">
                    <UserPlus size={16} className="me-2" />
                    Add Employee
                  </button>
                </div>
              </div>

              {activeTab === 'overview' && (
                <>
                  {/* Stats Cards */}
                  <div className="row g-4 mb-4">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={index} className="col-lg-3 col-md-6">
                          <div className="card border-0 shadow-sm h-100 card-hover">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className={`bg-${stat.color} bg-opacity-10 rounded-circle p-3 me-3`}>
                                  <IconComponent size={24} className={`text-${stat.color}`} />
                                </div>
                                <div>
                                  <h3 className="fw-bold mb-1">{stat.value}</h3>
                                  <p className="text-muted mb-0">{stat.title}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Recent Activity */}
                  <div className="row g-4">
                    <div className="col-lg-8">
                      <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0">
                          <h5 className="fw-bold mb-0">Recent Job Applications</h5>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Position</th>
                                  <th>Department</th>
                                  <th>Applications</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {jobOpenings.map((job) => (
                                  <tr key={job.id}>
                                    <td className="fw-bold">{job.title}</td>
                                    <td>{job.department}</td>
                                    <td>{job.applications}</td>
                                    <td>
                                      <span className={`badge bg-${job.status === 'Active' ? 'success' : 'warning'}`}>
                                        {job.status}
                                      </span>
                                    </td>
                                    <td>
                                      <button className="btn btn-sm btn-outline-primary me-1">
                                        <Eye size={14} />
                                      </button>
                                      <button className="btn btn-sm btn-outline-secondary">
                                        <Edit size={14} />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card border-0 shadow-sm">
                        <div className="card-header bg-white border-0">
                          <h5 className="fw-bold mb-0">Pending Leave Requests</h5>
                        </div>
                        <div className="card-body">
                          {leaveRequests.filter(req => req.status === 'Pending').map((request) => (
                            <div key={request.id} className="d-flex align-items-center justify-content-between mb-3">
                              <div>
                                <h6 className="fw-bold mb-0">{request.employee}</h6>
                                <small className="text-muted">{request.type} - {request.dates}</small>
                              </div>
                              <div>
                                <button className="btn btn-sm btn-success me-1">✓</button>
                                <button className="btn btn-sm btn-danger">✗</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'employees' && (
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold mb-0">Employee Management</h5>
                      <div className="d-flex gap-2">
                        <div className="input-group" style={{ width: '300px' }}>
                          <span className="input-group-text">
                            <Search size={16} />
                          </span>
                          <input type="text" className="form-control" placeholder="Search employees..." />
                        </div>
                        <button className="btn btn-outline-primary">
                          <Filter size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Employee</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Join Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {employees.map((employee) => (
                            <tr key={employee.id}>
                              <td>
                                <div>
                                  <div className="fw-bold">{employee.name}</div>
                                  <small className="text-muted">{employee.email}</small>
                                </div>
                              </td>
                              <td>{employee.department}</td>
                              <td>{employee.position}</td>
                              <td>{employee.joinDate}</td>
                              <td>
                                <span className={`badge bg-${employee.status === 'Active' ? 'success' : 'warning'}`}>
                                  {employee.status}
                                </span>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-outline-primary me-1">
                                  <Eye size={14} />
                                </button>
                                <button className="btn btn-sm btn-outline-secondary">
                                  <Edit size={14} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'recruitment' && (
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0">
                        <h5 className="fw-bold mb-0">Job Openings</h5>
                      </div>
                      <div className="card-body">
                        {jobOpenings.map((job) => (
                          <div key={job.id} className="card border mb-3">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-start">
                                <div>
                                  <h6 className="fw-bold">{job.title}</h6>
                                  <p className="text-muted mb-2">Department: {job.department}</p>
                                  <p className="mb-0">Applications: {job.applications}</p>
                                </div>
                                <div>
                                  <span className={`badge bg-${job.status === 'Active' ? 'success' : 'warning'} mb-2`}>
                                    {job.status}
                                  </span>
                                  <div>
                                    <button className="btn btn-sm btn-outline-primary me-1">View</button>
                                    <button className="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0">
                        <h5 className="fw-bold mb-0">Quick Actions</h5>
                      </div>
                      <div className="card-body">
                        <button className="btn btn-primary w-100 mb-2">
                          <UserPlus size={16} className="me-2" />
                          Post New Job
                        </button>
                        <button className="btn btn-outline-primary w-100 mb-2">
                          <FileText size={16} className="me-2" />
                          View Applications
                        </button>
                        <button className="btn btn-outline-secondary w-100">
                          <Download size={16} className="me-2" />
                          Export Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'leaves' && (
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <h5 className="fw-bold mb-0">Leave Management</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Employee</th>
                            <th>Leave Type</th>
                            <th>Dates</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leaveRequests.map((request) => (
                            <tr key={request.id}>
                              <td className="fw-bold">{request.employee}</td>
                              <td>{request.type}</td>
                              <td>{request.dates}</td>
                              <td>
                                <span className={`badge bg-${request.status === 'Approved' ? 'success' : request.status === 'Pending' ? 'warning' : 'danger'}`}>
                                  {request.status}
                                </span>
                              </td>
                              <td>
                                {request.status === 'Pending' && (
                                  <>
                                    <button className="btn btn-sm btn-success me-1">Approve</button>
                                    <button className="btn btn-sm btn-danger">Reject</button>
                                  </>
                                )}
                                {request.status !== 'Pending' && (
                                  <button className="btn btn-sm btn-outline-primary">View</button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;