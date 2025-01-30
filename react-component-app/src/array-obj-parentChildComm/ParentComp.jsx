import React from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
    const usersArray = ["Alice", "Bob", "Charlie"];
    const userDetails = { name: "John Doe", age: 30 };
  
    console.log(`Array:`);
    console.log(usersArray);
    console.log(`Object`);
    console.log(JSON.stringify(userDetails));
    
    return (
      <div>
        <h1>Parent</h1>
        <h1>Passing Data via Props</h1>
        <p>
            Object:{JSON.stringify(userDetails)}
            {/* Object{userDetails} */}<br></br>
            Array: {usersArray.join(" , ")}
        </p>
        <ChildComp users={usersArray} details={userDetails} />
      </div>
    );
  };
  
  export default ParentComp;