import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  Clock, 
  FileText, 
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Edit,
  LogOut,
  Briefcase,
  Target,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const employeeInfo = {
    name: 'John Doe',
    employeeId: 'EMP001',
    email: 'john@infoyieldx.com',
    phone: '+1 (555) 123-4567',
    department: 'Development',
    position: 'Senior Developer',
    joinDate: '2023-01-15',
    manager: 'Sarah Johnson',
    location: 'New York Office'
  };

  const stats = [
    { title: 'Projects Completed', value: '24', icon: CheckCircle, color: 'success' },
    { title: 'Hours This Month', value: '168', icon: Clock, color: 'primary' },
    { title: 'Leave Balance', value: '12 days', icon: Calendar, color: 'info' },
    { title: 'Performance Score', value: '4.8/5', icon: Award, color: 'warning' }
  ];

  const recentProjects = [
    { id: 1, name: 'E-commerce Platform', status: 'Completed', progress: 100, deadline: '2024-12-15' },
    { id: 2, name: 'Mobile App UI', status: 'In Progress', progress: 75, deadline: '2024-12-30' },
    { id: 3, name: 'Database Migration', status: 'Planning', progress: 25, deadline: '2025-01-15' }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Code Review - Payment Module', priority: 'High', dueDate: '2024-12-22' },
    { id: 2, task: 'Team Meeting - Sprint Planning', priority: 'Medium', dueDate: '2024-12-23' },
    { id: 3, task: 'Documentation Update', priority: 'Low', dueDate: '2024-12-25' }
  ];

  const leaveHistory = [
    { id: 1, type: 'Vacation', dates: 'Nov 25-30, 2024', status: 'Approved', days: 5 },
    { id: 2, type: 'Sick Leave', dates: 'Oct 15, 2024', status: 'Approved', days: 1 },
    { id: 3, type: 'Personal', dates: 'Sep 10-12, 2024', status: 'Approved', days: 3 }
  ];

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa', paddingTop: '80px' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 col-md-3 bg-white shadow-sm" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className="p-3">
              <h5 className="fw-bold text-primary mb-4">Employee Portal</h5>
              <nav className="nav flex-column">
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <TrendingUp size={16} className="me-2" />
                  Dashboard
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'profile' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={16} className="me-2" />
                  My Profile
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'projects' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('projects')}
                >
                  <Briefcase size={16} className="me-2" />
                  My Projects
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'tasks' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('tasks')}
                >
                  <Target size={16} className="me-2" />
                  Tasks
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
                  <h2 className="fw-bold mb-1">Welcome back, {employeeInfo.name}!</h2>
                  <p className="text-muted mb-0">{employeeInfo.position} • {employeeInfo.department}</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary">
                    <Clock size={16} className="me-2" />
                    Clock In
                  </button>
                  <button className="btn btn-primary">
                    <Calendar size={16} className="me-2" />
                    Request Leave
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
                          <h5 className="fw-bold mb-0">My Projects</h5>
                        </div>
                        <div className="card-body">
                          {recentProjects.map((project) => (
                            <div key={project.id} className="d-flex align-items-center justify-content-between mb-3 p-3 bg-light rounded">
                              <div>
                                <h6 className="fw-bold mb-1">{project.name}</h6>
                                <small className="text-muted">Deadline: {project.deadline}</small>
                              </div>
                              <div className="text-end">
                                <span className={`badge bg-${project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'primary' : 'warning'} mb-2`}>
                                  {project.status}
                                </span>
                                <div className="progress" style={{ width: '100px', height: '6px' }}>
                                  <div 
                                    className="progress-bar" 
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
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
                          <h5 className="fw-bold mb-0">Upcoming Tasks</h5>
                        </div>
                        <div className="card-body">
                          {upcomingTasks.map((task) => (
                            <div key={task.id} className="d-flex align-items-start mb-3">
                              <div className={`bg-${task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'success'} bg-opacity-10 rounded-circle p-2 me-3 mt-1`}>
                                <AlertCircle size={12} className={`text-${task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'success'}`} />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="fw-bold mb-1">{task.task}</h6>
                                <small className="text-muted">Due: {task.dueDate}</small>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'profile' && (
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="fw-bold mb-0">Personal Information</h5>
                          <button className="btn btn-outline-primary">
                            <Edit size={16} className="me-2" />
                            Edit Profile
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Full Name</label>
                            <input type="text" className="form-control" value={employeeInfo.name} readOnly />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Employee ID</label>
                            <input type="text" className="form-control" value={employeeInfo.employeeId} readOnly />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Email</label>
                            <input type="email" className="form-control" value={employeeInfo.email} readOnly />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Phone</label>
                            <input type="tel" className="form-control" value={employeeInfo.phone} readOnly />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Department</label>
                            <input type="text" className="form-control" value={employeeInfo.department} readOnly />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Position</label>
                            <input type="text" className="form-control" value={employeeInfo.position} readOnly />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Join Date</label>
                            <input type="text" className="form-control" value={employeeInfo.joinDate} readOnly />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label fw-bold">Manager</label>
                            <input type="text" className="form-control" value={employeeInfo.manager} readOnly />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0">
                        <h5 className="fw-bold mb-0">Quick Info</h5>
                      </div>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Mail size={16} className="text-primary me-2" />
                          <span>{employeeInfo.email}</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <Phone size={16} className="text-primary me-2" />
                          <span>{employeeInfo.phone}</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <MapPin size={16} className="text-primary me-2" />
                          <span>{employeeInfo.location}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <Briefcase size={16} className="text-primary me-2" />
                          <span>{employeeInfo.department}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <h5 className="fw-bold mb-0">My Projects</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="col-lg-4">
                          <div className="card border-0 shadow-sm card-hover">
                            <div className="card-body">
                              <h6 className="fw-bold">{project.name}</h6>
                              <p className="text-muted mb-2">Deadline: {project.deadline}</p>
                              <div className="progress mb-2" style={{ height: '8px' }}>
                                <div 
                                  className="progress-bar" 
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className={`badge bg-${project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'primary' : 'warning'}`}>
                                  {project.status}
                                </span>
                                <span className="small text-muted">{project.progress}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tasks' && (
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <h5 className="fw-bold mb-0">My Tasks</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {upcomingTasks.map((task) => (
                            <tr key={task.id}>
                              <td className="fw-bold">{task.task}</td>
                              <td>
                                <span className={`badge bg-${task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'success'}`}>
                                  {task.priority}
                                </span>
                              </td>
                              <td>{task.dueDate}</td>
                              <td>
                                <span className="badge bg-warning">Pending</span>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-outline-primary me-1">View</button>
                                <button className="btn btn-sm btn-success">Complete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'leaves' && (
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0">
                        <h5 className="fw-bold mb-0">Leave History</h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Leave Type</th>
                                <th>Dates</th>
                                <th>Days</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {leaveHistory.map((leave) => (
                                <tr key={leave.id}>
                                  <td className="fw-bold">{leave.type}</td>
                                  <td>{leave.dates}</td>
                                  <td>{leave.days}</td>
                                  <td>
                                    <span className="badge bg-success">{leave.status}</span>
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
                        <h5 className="fw-bold mb-0">Leave Balance</h5>
                      </div>
                      <div className="card-body">
                        <div className="mb-3">
                          <div className="d-flex justify-content-between">
                            <span>Annual Leave</span>
                            <span className="fw-bold">12 days</span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex justify-content-between">
                            <span>Sick Leave</span>
                            <span className="fw-bold">8 days</span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="d-flex justify-content-between">
                            <span>Personal Leave</span>
                            <span className="fw-bold">5 days</span>
                          </div>
                        </div>
                        <button className="btn btn-primary w-100">
                          <Calendar size={16} className="me-2" />
                          Request Leave
                        </button>
                      </div>
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

export default EmployeeDashboard;