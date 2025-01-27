import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import "./Navbar.css";
// import Html from "./linkFolder/Html";
// import Html from './linkFolder/Html.jsx';
// import CSS from './linkFolder/CSS.jsx';
// import JavaScript from './linkFolder/JavaScript.jsx';
// import BootStrap from './linkFolder/BootStrap.jsx';
// import MongoDB from './linkFolder/MongoDB.jsx';
// import HomeContainer from './HomeContainer/HomeContainer.jsx';
// import "./HomeContainer/HomeContainer.css";
// import Navbar from './../../react-practice-app/src/Navbar';


const NavbarPage = () => {
  return (
    <>
      <div id="header1">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <div className="navbar-logo">
              {/* <img src="./logo192.png" alt="Logo" /> */}
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">
                  <NavDropdown title="Tutorial" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/html">HTML</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/css"> CSS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/javascript">
                      JavaScript
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/bootstrap">
                      BootStrap
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Mongodb">MongoDB</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <NavDropdown title="Exercise" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      HTML Exercise & Quiz
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                    
                      CSS Exercise & Quiz
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      JavaScript Exercise & Quiz
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      BootStrap Exercise & Quiz
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      MongoDB Exercise & Quiz
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#action3">
                  <NavDropdown
                    title="Certificates"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      HTML Certificate Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      {" "}
                      CSS Certificate Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      JavaScript Certificate Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      BootStrap Certificate Course
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      MongoDB Certificate Course
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#action4">
                  <NavDropdown title="Services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Free Tutorial
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Exercises
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Cetificate Courses
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Free Services
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Free SignUP
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Contact US
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />

                <Button id="search-icon"></Button>
              </Form>
              {/* <div id="search2">
           <input type='search' placeholder='search'></input>
           <image src="search-icon.png"></image>
         </div> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarPage;
