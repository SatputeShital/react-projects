import React from "react";
import "./main.css";

import RightSidebar from "./Right-sidebar";

import LearnHtml from "./LearnHtml";

const Html = () => {
  return (
    <>
      <div id="main">
        <div id="left-sidebar" style={{ color: "black",backgroundColor: "#c4cfd1",  width:"300px"}}>
       <LearnHtml/>
        </div>
        <div id="info" style={{ backgroundColor: "white" }}>
          <h2 style={{ color: "black" }}>HTML Component</h2>
          <hr />
          <p style={{ color: "black" }}>HTML (HyperText Markup Language) is the standard language used to 
            create and structure content on the web. It serves as the foundation
             for web pages and applications by defining elements such as headings,
              paragraphs, links, images, and more.</p>
          
              <h3 style={{ color: "black" }}>Key Features of HTML</h3>
              <p style={{ color: "black" }}>Markup Language: HTML uses tags to structure and format content.
                 Browser Compatibility: HTML files can be opened in any web browser.
                 Foundation for Web Development: It works alongside CSS (for styling) and JavaScript (for interactivity) to create dynamic and visually appealing web pages.</p>
        
             <h3 style={{ color: "black" }}>Why Learn HTML?</h3>
             <p style={{ color: "black" }}>It is beginner-friendly and essential for anyone entering web development.
              Understanding HTML allows you to create and modify web pages.
              It is the starting point for learning web technologies.</p>
        </div>

        <div id="right-sidebar" style={{ color: "black",backgroundColor: "#c4cfd1" , textAlign:"left", padding:"20px"}}>
         
          <RightSidebar />
        </div>
      </div>
    </>
  );
};
export default Html;
