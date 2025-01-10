import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './style.css';

const ForceCard = () => {
  return (
    <div id="force">
        <div>
      <Card style={{marginTop:"80px",marginLeft:"50px", marginBottom:"50px", width: "700px", height:"370px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title style={{color:"blue" , fontFamily:"Cambria",fontSize:"30px", fontWeight:"bold"}}>Force Motors</Card.Title>
          <Card.Text style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>
          Known for SUVs like Force Gurkha and commercial vehicles.
          Provides vehicles for specialized purposes, including off-roading.
          </Card.Text>
          <ListGroup className="list-group-flush" style={{border:"2px solid", borderRadius:"4px", backgroundColor:"rgb(175, 184, 181)"}}>
          <ListGroup.Item>Force Gurkha</ListGroup.Item>
          <ListGroup.Item>Urbania</ListGroup.Item>
          
        </ListGroup>
        </Card.Body>
        
        <Card.Body>
          <Card.Link href="https://forcemotors.com/" style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>Know More</Card.Link>
         
        </Card.Body>
      </Card>
      </div>
      <div id="forceCardImg" style={{marginTop:"55px",marginLeft:"-80px", marginBottom:"0px", width: "700px", height:"420px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        {/* <h2> Mahindra & Mahindra</h2> */}
       
      </div>
    </div>
  );
};

export default ForceCard;
