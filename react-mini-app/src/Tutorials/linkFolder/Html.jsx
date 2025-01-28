import React from "react";
import "./main.css";
import LeftSidebar from "./Left-sidebarHtml";
import RightSidebar from "./Right-sidebar";
import NavLink from "react-bootstrap/esm/NavLink";
const Html = () => {
  return (
    <>
      <div id="main">
        <div id="left-sidebar">
          <LeftSidebar />
        </div>
        <div id="info" style={{ backgroundColor: "pink" }}>
          <h2 style={{ color: "black" }}>HTML Component</h2>

          <ul type="none" className="list">
            <li>
              <NavLink className="nav-link" to="/html/html_Intro"   onClick={() => console.log('Navigating to HTML Introduction')}>
                HTML Introduction
              </NavLink>
            </li>
            <li> HTML</li>
            {/* <li>React JSX</li>
        <li>React Components</li>
        <li>React Class Components</li>
        <li>React Functional Components</li>
        <li>React Router</li> */}
          </ul>
        </div>

        <div id="right-sidebar">
          <h2>Hello</h2>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};
export default Html;
