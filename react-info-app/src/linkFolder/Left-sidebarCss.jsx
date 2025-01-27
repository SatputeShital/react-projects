import React from "react";
import NavLink from "react-bootstrap/esm/NavLink";

const LeftSidebarCss = () => {
  return (
    <div>
      <div id="lsidebar">
        <h3> REACT Tutorial </h3>
        <ul type="none" className="list">
          <li>
            <NavLink className="nav-link" to="/html/html_Intro">
              HTML Introduction
            </NavLink>
          </li>
          <li>React Render HTML</li>
          <li>React JSX</li>
          <li>React Components</li>
          <li>React Class Components</li>
          <li>React Functional Components</li>
          <li>React Router</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebarCss;
