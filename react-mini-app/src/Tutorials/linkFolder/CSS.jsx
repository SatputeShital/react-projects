import React from "react";
import LeftSidebarCss from "./Left-sidebarCss";
import RightSidebar from "./Right-sidebar";

const CSS =()=>
{
    return(
        <>
        <div>
            <h2>
            <div id="main">
        <div id="left-sidebar">
          <LeftSidebarCss />
        </div>
        <div id="info" style={{ backgroundColor: "pink" }}>
          <h2 style={{ color: "black" }}>React Component</h2>
          <ul type="none" className="list">
            <li>React is a JavaScript library for building user interfaces.</li>
            <li>React is used to build single-page applications.</li>
            <li>React allows us to create reusable UI components.</li>
          </ul>
        </div>

        <div id="right-sidebar">
          <h2>Hello</h2>
          <RightSidebar />
        </div>
      </div>
            </h2>
        </div>
        </>
    )
    
}
export default CSS;
