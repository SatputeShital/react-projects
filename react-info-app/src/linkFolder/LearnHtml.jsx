import { NavLink } from "react-router-dom";
import "./customDiv.css";


const LearnHtml = () => {
  return (
    <>
      <h3> Html Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/html/intro">
            Html Introduction
          </NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/html/editors">
       Html Editors
          </NavLink></li>
          <li>
        <NavLink className="nav-link" to="/html/basic">
        Html Basic
          </NavLink></li>
          <li>
        <NavLink className="nav-link" to="/html/attributes">
        Html Attributes
          </NavLink></li>
        <li>Html Headings</li>
        <li>Html Paragraphs</li>
        <li>Html styles</li>
        <li>Html Formatting</li>
        <li>Html Comments</li>
        <li>Html Colors</li>
        <li>Html CSS</li>
        <li>Html Links</li>
      </ul>
    </>
  )
}

export default LearnHtml
