import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './style.css';

const TataCard = () => {
  return (
    <div id="tata">
        <div >
      <Card style={{marginTop:"80px",marginLeft:"50px", width: "700px", height:"370px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title style={{color:"blue" , fontFamily:"Cambria",fontSize:"30px", fontWeight:"bold"}}>Tata Motors</Card.Title>
          <Card.Text style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>
          Known for cars like Tata Nexon, Tata Harrier, and Tata Safari.
          Also produces commercial vehicles and electric cars like Tata Tiago EV.
          </Card.Text>
          <ListGroup className="list-group-flush" style={{border:"2px solid", borderRadius:"4px", backgroundColor:"rgb(175, 184, 181)"}}>
          <ListGroup.Item>Tata Nexon</ListGroup.Item>
          <ListGroup.Item>Tata Harrier</ListGroup.Item>
          <ListGroup.Item>Tata Safari</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        
        <Card.Body>
          <Card.Link href="https://www.tatamotors.com/" style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>Know More</Card.Link>
         
        </Card.Body>
      </Card>
      </div>
      <div id="tataCardImg" style={{marginTop:"55px",marginLeft:"-80px", marginBottom:"0px", width: "700px", height:"420px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        {/* <h2> Mahindra & Mahindra</h2> */}
       
      </div>
    </div>
  );
};

export default TataCard;
