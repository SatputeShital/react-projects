import React from "react";
import LearnJs from "./LearnJs";
import RightSidebar from "./Right-sidebar";
import './main.css'


const JavaScript =()=>
{
    return(
        <>
       <div id="main">
        <div id="left-sidebar" style={{ color: "black",backgroundColor: "#c4cfd1",  width:"300px"}}>
       <LearnJs/>
        </div>
        <div id="info" style={{ backgroundColor: "white" }}>
          <h2 style={{ color: "black" }}>JavaScript </h2>
          <hr />
          <p style={{ color: "black" }}>JavaScript is a versatile, high-level programming language that allows developers to add interactivity and dynamic behavior to websites. It is a cornerstone of modern web development, along with HTML and CSS.</p>
          
              <h3 style={{ color: "black" }}>Key Features of JavaScript</h3>
              <p style={{ color: "black" }}>Client-Side Scripting: Runs directly in the browser, enabling dynamic content without server interaction.
               Versatility: Can be used for front-end and back-end development (e.g., Node.js for server-side scripting)..
               Interactive: Enables functionalities like form validation, animations, and user-triggered
               Asynchronous: Supports asynchronous operations like fetching data from APIs.
               Cross-Platform: Runs in all modern browsers and supports numerous environments.</p>
        
             <h3 style={{ color: "black" }}>What JavaScript Can Do</h3>
             <p style={{ color: "black" }}>Dynamic Updates: Modify HTML and CSS on-the-fly.
                Event Handling: Respond to user actions like clicks, keystrokes, and mouse movements.
Form Validation: Ensure data integrity before sending to the server.
Fetch Data: Interact with servers using APIs and handle responses asynchronously.
Animation and Graphics: Create visual effects using libraries like Three.js or frameworks like GSAP.</p>
        </div>

        <div id="right-sidebar" style={{ color: "black",backgroundColor: "#c4cfd1" , textAlign:"left", padding:"20px"}}>
         
          <RightSidebar />
        </div>
      
        </div>
        
        </>
    )
    
}
export default JavaScript;
