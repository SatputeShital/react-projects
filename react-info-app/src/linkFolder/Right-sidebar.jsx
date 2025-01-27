import NavLink from "react-bootstrap/esm/NavLink";
import './customDiv.css'

const RightSidebar = () => {
  return (
    <>
      <div id="rSidebar">
        <h3> CodeMind Tutorial </h3>
        <ul type="none" className="list">
          <li>
            <NavLink className="nav-link" to="/html">
              HTML
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/css">
              CSS
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/javascript">
             JAVASCRIPT
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/bootstrap">
             BOOTSTRAP
            </NavLink>
          </li>
          <li>
          <NavLink className="nav-link" to="/mongodb">
       Mongodb
          </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/react">
             REACT
            </NavLink>
          </li>
          
        </ul>
      </div>
    </>
  );
};
export default RightSidebar;
