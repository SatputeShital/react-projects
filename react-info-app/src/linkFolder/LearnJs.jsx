import { NavLink } from "react-router-dom";
import "./customDiv.css";

const LearnJs = () => {
  return (
    <>
      <h3>JavaScript Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/javascript/intro">
          JS Introduction
          </NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/html/editors">
       Js Statement
          </NavLink></li>
          <li>
        <NavLink className="nav-link" to="/html/basic">
        Js Basic
          </NavLink></li>
          <li>
        <NavLink className="nav-link" to="/html/attributes">
        Js Syntax
          </NavLink></li>
        <li>Js Comments</li>
        <li>JS Variable</li>
        <li>Js Operators</li>
        
        {/* <li>Html Formatting</li>
        <li>Html Comments</li>
        <li>Html Colors</li>
        <li>Html CSS</li>
        <li>Html Links</li> */}
      </ul>
    </>
  )
}

export default LearnJs
