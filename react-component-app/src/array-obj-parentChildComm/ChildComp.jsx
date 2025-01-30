import React from "react";

const ChildComp = ({ users, details }) => {
    return (
      <div style={{alignItems:"center", marginLeft:"600px"}}>
        <h1>Child</h1>
        <h2>User List</h2>
        <p>
            Object:{JSON.stringify(details)}
            {/* Object{userDetails} */}<br></br>
            Array: {users.join(" , ")}
        </p>
        {/* <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        <h2>User Details</h2>
        <p>Name: {details.name}</p>
        <p>Age: {details.age}</p> */}
      </div>
    );
  };
 export default ChildComp;