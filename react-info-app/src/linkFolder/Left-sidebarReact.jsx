import NavLink from "react-bootstrap/esm/NavLink";

// import HtmlIntro from './html/Html_Intro.jsx';


const LeftSidebar=()=>
{

    return(
        <>
        
        <div id="lsidebar">
        <h3> REACT Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/React/Introduction" >
           React Introduction
          </NavLink>
          <NavLink className="nav-link" to="/css/intro">hiio</NavLink>
        </li>
        <li>React Render HTML</li>
        <li>React JSX</li>
        <li>React Components</li>
        <li>React Class Components</li>
        <li>React Functional Components</li>
        <li>React Router</li>
      </ul>
      
    </div>
        </>
    );

}
export default LeftSidebar;