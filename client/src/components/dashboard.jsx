import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Dashboard.css';  

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8000/dashboard');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Submissions</h1>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-handle">@{user.handle}</p>
          <div className="image-grid">
            {user.images.map((image, index) => (
              <img
                key={index}
                src={`http://localhost:8000/uploads${image.fileName}`}
                alt={`Uploaded by ${user.name}`}
                className="user-image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
