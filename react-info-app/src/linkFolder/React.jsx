import LearnReact from "./LearnReact";
// import LeftSidebar from "./Left-sidebarReact";

import "./main.css";
import RightSidebar from "./Right-sidebar";

const React = () => {
  return (
    <>
      <div id="main">
        <div id="left-sidebar">
         <LearnReact/>
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
    </>
  );
};

export default React;
