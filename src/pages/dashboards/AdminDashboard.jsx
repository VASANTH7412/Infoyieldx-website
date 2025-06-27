import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Shield, 
  Database,
  UserCheck,
  Calendar,
  Mail,
  Bell,
  Search,
  Plus,
  Download,
  Filter,
  Eye,
  Edit,
  Trash2,
  LogOut
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [userInfo, setUserInfo] = useState(null);

 useEffect(() => {
  let isMounted = true;

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // 🔐 Check if token is present
  if (!token) {
    alert("❌ Unauthorized. Please log in.");
    navigate("/admin-login");
    return;
  }

  // 🔍 Normalize and check admin role
  const normalizedRole = role?.toLowerCase();
  if (normalizedRole !== "admin" && normalizedRole !== "super_admin") {
    alert("❌ Access Denied. You are not authorized to access this dashboard.");
    navigate("/");
    return;
  }

  // ✅ Use correct endpoint for admin
  const endpoint = "http://localhost:8080/api/auth/me";

  
  axios.get(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((res) => {
    if (isMounted) {
      setUserInfo(res.data);
    }
  })
  .catch((err) => {
    console.error("❌ Auth failed:", err);
    console.log("✅ Stored Token:", token);
    alert("❌ Session expired or unauthorized access. Please log in again.");
    // localStorage.clear();
    navigate("/admin-login");
  });

  return () => {
    isMounted = false;
  };
}, []);




  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, color: 'primary' },
    { title: 'Active Projects', value: '56', icon: FileText, color: 'success' },
    { title: 'Revenue', value: '$125,000', icon: BarChart3, color: 'warning' },
    { title: 'System Health', value: '99.9%', icon: Shield, color: 'info' }
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Employee', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'HR', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Employee', status: 'Pending' }
  ];

  const recentProjects = [
    { id: 1, name: 'E-commerce Platform', client: 'TechCorp', status: 'In Progress', progress: 75 },
    { id: 2, name: 'Mobile App', client: 'StartupXYZ', status: 'Completed', progress: 100 },
    { id: 3, name: 'Database Migration', client: 'Enterprise Ltd', status: 'Planning', progress: 25 }
  ];

  return  (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f9fa', paddingTop: '80px' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 col-md-3 bg-white shadow-sm" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className="p-3">
              <h5 className="fw-bold text-primary mb-4">Admin Panel</h5>
              <nav className="nav flex-column">
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <BarChart3 size={16} className="me-2" />
                  Overview
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'users' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('users')}
                >
                  <Users size={16} className="me-2" />
                  User Management
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'projects' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('projects')}
                >
                  <FileText size={16} className="me-2" />
                  Projects
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'system' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('system')}
                >
                  <Settings size={16} className="me-2" />
                  System Settings
                </button>
                <button 
                  className={`nav-link btn text-start mb-2 ${activeTab === 'security' ? 'btn-primary' : 'btn-outline-light text-dark'}`}
                  onClick={() => setActiveTab('security')}
                >
                  <Shield size={16} className="me-2" />
                  Security
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
                  <h2 className="fw-bold mb-1">Admin Dashboard</h2>
                  <p className="text-muted mb-0">Welcome back, Administrator</p>
                </div>
                <div className="d-flex gap-2">
                  <button
  className="btn btn-outline-primary"
  onClick={() => navigate("/admin/hr-requests")}
>
  <Bell size={16} />
</button>
                  <button className="btn btn-primary">
                    <Plus size={16} className="me-2" />
                    New Project
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
                          <h5 className="fw-bold mb-0">Recent Projects</h5>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Project</th>
                                  <th>Client</th>
                                  <th>Status</th>
                                  <th>Progress</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {recentProjects.map((project) => (
                                  <tr key={project.id}>
                                    <td className="fw-bold">{project.name}</td>
                                    <td>{project.client}</td>
                                    <td>
                                      <span className={`badge bg-${project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'primary' : 'warning'}`}>
                                        {project.status}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="progress" style={{ height: '6px' }}>
                                        <div 
                                          className="progress-bar" 
                                          style={{ width: `${project.progress}%` }}
                                        ></div>
                                      </div>
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
                          <h5 className="fw-bold mb-0">Recent Users</h5>
                        </div>
                        <div className="card-body">
                          {recentUsers.map((user) => (
                            <div key={user.id} className="d-flex align-items-center mb-3">
                              <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                                <Users size={16} className="text-primary" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="fw-bold mb-0">{user.name}</h6>
                                <small className="text-muted">{user.email}</small>
                              </div>
                              <span className={`badge bg-${user.status === 'Active' ? 'success' : 'warning'}`}>
                                {user.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'users' && (
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold mb-0">User Management</h5>
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary">
                          <Filter size={16} className="me-2" />
                          Filter
                        </button>
                        <button className="btn btn-primary">
                          <Plus size={16} className="me-2" />
                          Add User
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentUsers.map((user) => (
                            <tr key={user.id}>
                              <td className="fw-bold">{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.role}</td>
                              <td>
                                <span className={`badge bg-${user.status === 'Active' ? 'success' : 'warning'}`}>
                                  {user.status}
                                </span>
                              </td>
                              <td>2 hours ago</td>
                              <td>
                                <button className="btn btn-sm btn-outline-primary me-1">
                                  <Eye size={14} />
                                </button>
                                <button className="btn btn-sm btn-outline-secondary me-1">
                                  <Edit size={14} />
                                </button>
                                <button className="btn btn-sm btn-outline-danger">
                                  <Trash2 size={14} />
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

              {activeTab === 'projects' && (
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fw-bold mb-0">Project Management</h5>
                      <button className="btn btn-primary">
                        <Plus size={16} className="me-2" />
                        New Project
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="col-lg-4">
                          <div className="card border-0 shadow-sm card-hover">
                            <div className="card-body">
                              <h6 className="fw-bold">{project.name}</h6>
                              <p className="text-muted mb-2">Client: {project.client}</p>
                              <div className="progress mb-2" style={{ height: '6px' }}>
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

              {activeTab === 'system' && (
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0">
                        <h5 className="fw-bold mb-0">System Configuration</h5>
                      </div>
                      <div className="card-body">
                        <div className="mb-3">
                          <label className="form-label">Company Name</label>
                          <input type="text" className="form-control" value="InfoYieldX" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email Settings</label>
                          <input type="email" className="form-control" value="admin@infoyieldx.com" />
                        </div>
                        <button className="btn btn-primary">Save Settings</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card border-0 shadow-sm">
                      <div className="card-header bg-white border-0">
                        <h5 className="fw-bold mb-0">Database Status</h5>
                      </div>
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Database size={20} className="text-success me-2" />
                          <span>Database: Connected</span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <Shield size={20} className="text-success me-2" />
                          <span>Security: Active</span>
                        </div>
                        <button className="btn btn-outline-primary">Run Diagnostics</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <h5 className="fw-bold mb-0">Security Settings</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <h6 className="fw-bold">Access Control</h6>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" checked />
                          <label className="form-check-label">Two-Factor Authentication</label>
                        </div>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" checked />
                          <label className="form-check-label">Password Complexity</label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">Session Timeout</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h6 className="fw-bold">Audit Logs</h6>
                        <p className="text-muted">Last 5 security events:</p>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                            <small className="text-muted">2 hours ago</small><br />
                            Admin login from 192.168.1.1
                          </li>
                          <li className="mb-2">
                            <small className="text-muted">5 hours ago</small><br />
                            Password changed for user john@example.com
                          </li>
                        </ul>
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

export default AdminDashboard;