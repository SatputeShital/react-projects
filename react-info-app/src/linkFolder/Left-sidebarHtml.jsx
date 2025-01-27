import NavLink from "react-bootstrap/esm/NavLink";

// import HtmlIntro from './html/Html_Intro.jsx';


const LeftSidebar=()=>
{

    return(
        <>
        
        <div id="lsidebar">
        <h3> HTML Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/html/html_Intro" >
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
        </>
    );

}
export default LeftSidebar;