import React, { useState } from "react";

const StateExample = () => {

    const [count, setCount]= useState(0);
  // State for an array of names
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);

  // State for an object containing user details
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    age: 30,
  });

// Function to update count
const updateCount=()=>
{
    setCount(count+1);
};


  // Function to add a new user to the array
  const addUser = () => {
    setUsers([...users, "JJ","YoYo"]); // Adds "New User" to the array
  };

  // Function to update user details
  const updateUserDetails = () => {
    setUserDetails({ ...userDetails, age: 40 });
    // setUserDetails({ ...userDetails, age: userDetails.age + 1 }); // Increments age
  };

  return (
    <div>
      <h1>React State Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={updateCount}>Count Increase</button>
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add User</button>

      <h2>User Details</h2>
      <p>Name: {userDetails.name}</p>
      <p>Age: {userDetails.age}</p>
      <button onClick={updateUserDetails}>Increase Age</button>
    </div>
  );
};

export default StateExample;
