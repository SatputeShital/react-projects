import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './style.css';

const AshokCard = () => {
  return (
    <div id="ashok">
        <div >
      <Card style={{marginTop:"80px",marginLeft:"50px",marginBottom:"50px", width: "700px", height:"370px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        
        <Card.Body>
          <Card.Title style={{color:"blue" , fontFamily:"Cambria",fontSize:"30px", fontWeight:"bold"}}>Ashok Leyland</Card.Title>
          <Card.Text style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>
          Renowned for manufacturing medium and heavy commercial vehicles (M&HCV).
          Offers a range of buses, trucks, light commercial vehicles (LCVs), and defense vehicles.
          </Card.Text>
          <ListGroup className="list-group-flush" style={{border:"2px solid", borderRadius:"4px", backgroundColor:"rgb(175, 184, 181)"}}>
          <ListGroup.Item>Dost+ (LCV)</ListGroup.Item>
          <ListGroup.Item>Boss (trucks)</ListGroup.Item>
          <ListGroup.Item>Viking (buses)</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        
        <Card.Body>
          <Card.Link href="https://www.ashokleyland.com/" style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>Know More</Card.Link>
         
        </Card.Body>
      </Card>
      </div>
      <div id="ashokCardImg" style={{marginTop:"55px",marginLeft:"-80px", marginBottom:"0px", width: "700px", height:"420px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        
       
      </div>
    </div>
  );
};

export default AshokCard;
