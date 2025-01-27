import React from "react";
import NavLink from "react-bootstrap/esm/NavLink";

const BootStrap =()=>
{
    return(
        <>
        <div>
            <h2>
                BootStrap Component

            </h2>
            <NavLink className="nav-link" to="/bootstrap/intro">
            Bootstrap Introduction
          </NavLink>
          <a href="./bootstrap/BootstrapIntro.jsx">Bootstrap Introduction </a>
        </div>
        </>
    )
    
}
export default BootStrap;
