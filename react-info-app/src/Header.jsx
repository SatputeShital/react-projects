
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import NavbarPage from './Navbar.jsx';
import './Header.css';
import Html from './linkFolder/Html.jsx';
import CSS from './linkFolder/CSS.jsx';
import JavaScript from './linkFolder/JavaScript.jsx';
import BootStrap from './linkFolder/BootStrap.jsx';
import MongoDB from './linkFolder/MongoDB.jsx';
import ReactComponent from './linkFolder/React.jsx';
import HomeContainer from './HomeContainer/HomeContainer.jsx';
import './HomeContainer/HomeContainer.css';
import HtmlIntro from './linkFolder/html/Html_Intro.jsx';
import React_Intro from './linkFolder/react/React_Intro.jsx';
import CssIntro from './linkFolder/css/CssIntro.jsx';


const Header =()=>
{
    return (
        
      <>
      {/* Custom Navbar Component */}
      <NavbarPage />

      {/* Main Navigation and Routing */}
      <Router>
        <div id="header2">
          <Navbar bg="dark" variant="dark">
           
              {/* Navigation Links */}
              <Nav id="head2Link" className="me-auto">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ marginLeft: '80px' }}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/html"
                  className="nav-link"
                  style={{ marginLeft: '80px' }}
                >
                  HTML
                </NavLink>
                <NavLink
                  to="/css"
                  className="nav-link"
                  style={{ marginLeft: '80px' }}
                >
                  CSS
                </NavLink>
                <NavLink
                  to="/javascript"
                  className="nav-link"
                  style={{ marginLeft: '80px' }}
                >
                  JAVASCRIPT
                </NavLink>
                <NavLink
                  to="/bootstrap"
                  className="nav-link"
                  style={{ marginLeft: '80px' }}
                >
                  BOOTSTRAP
                </NavLink>
                <NavLink
                  to="/mongodb"
                  className="nav-link"
                  style={{ marginLeft: '80px' }}
                >
                  MONGODB
                </NavLink>
                <NavLink
                  to="/react"
                  className="nav-link"
                  style={{ marginLeft: '80px' }}
                >
                  REACT
                </NavLink>
              </Nav>
            
          </Navbar>

          {/* Routes for Pages */}
          
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/html" element={<Html />} />
              <Route exact path="/html/html_Intro" element={<HtmlIntro />} />
              <Route path="/css" element={<CSS />} />
              <Route path="/javascript" element={<JavaScript />} />
              <Route path="/bootstrap" element={<BootStrap />} />
              <Route path="/mongodb" element={<MongoDB />} />
              {/* <Route exact path="/html/html_Intro" element={<HtmlIntro />} /> */}
               <Route exact path="/react" element={<ReactComponent />}></Route>
               <Route exact path="/react/intro" element={<React_Intro />}></Route>
               <Route exact path="/css/intro" element={<CssIntro />}></Route>
            </Routes>
         
        </div>
      </Router>
      </>
       
      
      
    );  
    }
    
   export default Header;