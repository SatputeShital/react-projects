import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import myimg from '/Image/logoCode.jpg';
import React from 'react';

import './Header.css';
// import Header from './Header';


const Header =()=>
{
    return (
        
       <>
       <div id='header1'>
       <Navbar expand="lg" className="bg-body-tertiary" >
          <Container fluid>
          <div className="navbar-logo">
        <img src="./logo192.png" alt="Logo" />
           </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                 
                <Nav.Link href="#action1">
                <NavDropdown title="Tutorial" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#action2">
                <NavDropdown title="Exercise" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#action3">
                <NavDropdown title="Certificates" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#action4">
                <NavDropdown title="Services" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
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
                
                <Button  id="search-icon"></Button>
              </Form>
              {/* <div id="search2">
                  <input type='search' placeholder='search'></input>
                  <image src="search-icon.png"></image>
                </div> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

       </div>
       <div id='header2'>
       <Navbar bg="dark" data-bs-theme="dark" >
        <Container style={{marginLeft:"10px"}}>
          
          <Nav id='head2Link' >
            <Nav.Link href="#home" style={{marginLeft:"80px"}}>HTML</Nav.Link>
            <Nav.Link href="#features"  style={{marginLeft:"80px"}}>CSS</Nav.Link>
            <Nav.Link href="#pricing" style={{marginLeft:"80px"}}>JAVASCRIPT</Nav.Link>
            <Nav.Link href="#home" style={{marginLeft:"80px"}}>MONGODB</Nav.Link>
            <Nav.Link href="#features" style={{marginLeft:"80px"}}>BOOTSTRAP</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br />



       </div>
       </>
    );  
    }
    
   export default Header;