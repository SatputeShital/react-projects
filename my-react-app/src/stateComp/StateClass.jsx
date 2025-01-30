import React, { Component } from "react";

class StateClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0, // State for count
      users: ["Alice", "Bob", "Charlie"], // State for array of users
      userDetails: { name: "John Doe", age: 30 }, // State for user details
    };
  }

  // Function to update count
  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Function to add new users to the array
  addUser = () => {
    this.setState({ users: [...this.state.users, "JJ", "YoYo"] });
  };

  // Function to update user details
  updateUserDetails = () => {
    this.setState({ userDetails: { ...this.state.userDetails, age:this.state.userDetails.age + 1 } });
  };

  render() {
    return (
      <div>
        <h1>React State Example (Class Component)</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.updateCount}>Count Increase</button>

        <h2>Users List</h2>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <button onClick={this.addUser}>Add User</button>

        <h2>User Details</h2>
        <p>Name: {this.state.userDetails.name}</p>
        <p>Age: {this.state.userDetails.age}</p>
        <button onClick={this.updateUserDetails}>Increase Age</button>
      </div>
    );
  }
}

export default StateClass;
