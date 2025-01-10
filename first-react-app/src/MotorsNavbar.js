import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import HomeIcon from './HomeIcon';
// import style from './../node_modules/dom-helpers/esm/css';


function MotorsNavbar() {
    return(
       <>
       
           <Navbar id="home" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontFamily:"cambria"}}> Indian Motoring Marvels </Navbar.Brand>
          <Nav className="me-auto" style={{fontFamily:"cambria"}}>
            <Nav.Link href="#home" style={{marginLeft:"40px" , marginRight:"30px"}}><i className="bi bi-house"></i> Home </Nav.Link>
            {/* <HomeIcon/> */}
            <Nav.Link href="#tata" style={{ marginRight:"30px"}}> Tata </Nav.Link>
            <Nav.Link href="#mahindra" style={{ marginRight:"30px"}}> Mahindra & Mahindra </Nav.Link>
            <Nav.Link href="#maruti" style={{ marginRight:"30px"}}> Maruti Suzuki </Nav.Link>
            <Nav.Link href="#ashok" style={{ marginRight:"30px"}}> Ashok Leyland </Nav.Link>
            <Nav.Link href="#force" style={{ marginRight:"30px"}}> Force Motors </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
       </>
    );
}
export default MotorsNavbar;