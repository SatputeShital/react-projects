import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIIntegrationInFunctionComp = () => {
  // State to store user data
  const [users, setUsers] = useState([]);

  // Fetch user details from the API
  const fetchUserDetails = async () => {
    try {
      const userData = await axios.get('https://fakestoreapi.com/users');
      console.log(userData.data);
      setUsers(userData.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  // useEffect to fetch data once after the component mounts
  useEffect(() => {
    console.log('componentDidMount called');
    fetchUserDetails();
  }, []);  // Empty dependency array ensures this runs once after the initial render

  return (
    <div>
      <h1>API Integration in Functional Component</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}> {user.username} - {user.email} </li>
        ))}
      </ul>
    </div>
  );
};

export default APIIntegrationInFunctionComp;
