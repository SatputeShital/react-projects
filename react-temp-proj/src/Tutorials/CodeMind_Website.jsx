import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from "react-router-dom";
  
  import HomePage from "./HomePage";
  import HTML from "./HTML";
  import JavaScript from "./JavaScript";
  import CSSLang from "./CSSLang";
  import React from "./React";
  import logo from "./logo.jpg";
  import React_Intro from "./React_Tutorial/React_Intro";
 
import ReRender from "./React_Tutorial/ReRender";

  const CodeMind = () => {
  
    return (
      <>
        <Router>
          <nav class="navbar navbar-expand-lg navigationBar">
            <div class="container-fluid">
              <img
                src={logo}
                alt="Logo"
                height={50}
                width={70}
                className="image"
              />
              <NavLink className="navbar-brand" to="/">CODEMIND_TECHNOLOGY </NavLink>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="navbar-brand">
                  <NavLink className="nav-link " to="/HTML">HTML</NavLink>
                </li>
                <li class="navbar-brand">
                  <NavLink className="nav-link " to="/CSSLang"> CSS</NavLink>
                </li>
                <li class="navbar-brand">
                  <NavLink className="nav-link" to="/JavaScript">JAVASCRIPT </NavLink>
                </li>
                <li class="navbar-brand">
                  <NavLink className="nav-link"  to="/React"> REACT JS</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/HTML" element={<HTML />}></Route>
                <Route exact path="/CSSLang" element={<CSSLang />}></Route>
                <Route exact path="/JavaScript" element={<JavaScript />}></Route>
                <Route exact path="/React" element={<React />}></Route>
                <Route exact path="/React/Introduction" element={<React_Intro />}></Route>
                <Route exact path="/React/render" element={<ReRender/>}></Route>
              </Routes>
        </Router>
      </>
    );
  };
  
  export default CodeMind;
  