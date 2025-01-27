import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './style.css';

const ReactContainer = () => {
  return (
    <>
    <div id="react" >
          <div>
      
        {/* <img src={lamp} alt="Mahindra" style={{width:"100px", height:"100px"}}/> */}
      <Card class="reactCard" style={{marginTop:"80px",marginLeft:"50px", marginBottom:"50px", width: "700px", height:"370px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title style={{color:"blue" , fontFamily:"Cambria",fontSize:"30px", fontWeight:"bold"}}>React</Card.Title>
          <Card.Text style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>
          React is a JavaScript library for building user interfaces.
          React is used to build single-page applications.
          </Card.Text>
          <ListGroup className="list-group-flush" style={{border:"2px solid", borderRadius:"4px", backgroundColor:"rgb(175, 184, 181)"}}>
          <ListGroup.Item>Learn Bootstrap</ListGroup.Item>
          <ListGroup.Item>Tutorial</ListGroup.Item>
          <ListGroup.Item>Get Certified</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        
        <Card.Body>
          <Card.Link href="#main" style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>Know More</Card.Link>
         
        </Card.Body>
      </Card>
      </div>
      <div id="reactCardImg" style={{marginTop:"55px",marginLeft:"-80px", marginBottom:"50px", width: "700px", height:"420px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
       
       
      </div>
    </div>
    </>
  )
}

export default ReactContainer
