import { NavLink } from "react-router-dom";
import "./customDiv.css";

const LearnReact = () => {
  return (
    <>
      <h3> React JS Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/react/intro">
            React Introduction
          </NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/mongodb">
       Mongodb
          </NavLink></li>
          <li>
        <NavLink className="nav-link" to="/hello">
        CSS Try
          </NavLink></li>
        <li>React JSX</li>
        <li>React Components</li>
        <li>React Class Components</li>
        <li>React Functional Components</li>
        <li>React Router</li>
      </ul>
    </>
  );
};

export default LearnReact;
