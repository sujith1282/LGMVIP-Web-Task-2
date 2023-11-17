import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // You can use custom CSS or import styled-components here.
import Navbar from './Navbar';
import UserCard from './UserCard';
import Loader from './Loader';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      <div className="user-card-grid">
        {loading ? (
          <Loader />
        ) : (
          users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
