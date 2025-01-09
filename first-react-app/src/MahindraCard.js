import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './style.css';

const MahindraCard= ()=>
{
    return(
        <div id="mahindra">
        
      <Card style={{marginTop:"50px",marginLeft:"50px", marginBottom:"50px", width: "700px", height:"370px" , border:"2px solid black", borderRadius:"10px" ,backgroundColor:"rgb(180, 206, 197)", boxShadow:"5px 5px 5px black" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title style={{color:"blue" , fontFamily:"Cambria",fontSize:"30px", fontWeight:"bold"}}>Mahindra & Mahindra</Card.Title>
          <Card.Text style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>
          Popular models include Mahindra Thar, Mahindra Scorpio, and Mahindra XUV700.
          Also a major player in electric vehicles and SUVs.
          </Card.Text>
          <ListGroup className="list-group-flush" style={{border:"2px solid", borderRadius:"4px", backgroundColor:"rgb(175, 184, 181)"}}>
          <ListGroup.Item>Mahindra Thar</ListGroup.Item>
          <ListGroup.Item>Mahindra Scorpio</ListGroup.Item>
          <ListGroup.Item>Mahindra XUV7OO</ListGroup.Item>
        </ListGroup>
        </Card.Body>
        
        <Card.Body>
          <Card.Link href="https://www.tatamotors.com/" style={{color:"blueviolet", fontFamily:"Cambria", fontSize:"20px"}}>Know More</Card.Link>
         
        </Card.Body>
      </Card>
    </div>
    );
}
export default MahindraCard;


