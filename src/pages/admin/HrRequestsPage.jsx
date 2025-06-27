import React, { useEffect, useState } from 'react';

const HrRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/hr-requests", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setRequests(data))
      .catch(err => console.error("Failed to fetch HR requests", err));
  }, []);

  const handleApprove = async (id) => {
    const res = await fetch(`http://localhost:8080/api/admin/approve-hr/${id}`, {
      method: "PUT", // ✅ Use PUT as per backend
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      setRequests(requests.filter(req => req.id !== id));
    } else {
      alert("Failed to approve HR");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Pending HR Registration Requests</h3>

      {requests.length === 0 ? (
        <p className="text-muted">No pending requests.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Phone</th>
                <th>Employee ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id}>
                  <td>{req.firstName} {req.lastName}</td>
                  <td>{req.email}</td>
                  <td>{req.department}</td>
                  <td>{req.phone}</td>
                  <td>{req.employeeId}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleApprove(req.id)}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HrRequestsPage;

