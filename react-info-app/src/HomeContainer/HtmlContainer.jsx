import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";

const HtmlContainer = () => {
  return (
    <>
      <div id="html">
        <div>
          
          <Card
            class="htmlCard"
            style={{
              marginTop: "80px",
              marginLeft: "50px",
              marginBottom: "50px",
              width: "700px",
              height: "370px",
              border: "2px solid black",
              borderRadius: "10px",
              backgroundColor: "rgb(160, 225, 225)",
              boxShadow: "5px 5px 5px black",
            }}
          >
            
            <Card.Body>
              <Card.Title
                style={{
                  color: "blue",
                  fontFamily: "Cambria",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                HTML Tutorial
              </Card.Title>
              <Card.Text
                style={{
                  color: "blueviolet",
                  fontFamily: "Cambria",
                  fontSize: "20px",
                }}
              >
                HTML is the standard markup language for Web pages. With HTML
                you can create your own Website. HTML is easy to learn - You
                will enjoy it!
              </Card.Text>
              <ListGroup
                className="list-group-flush"
                style={{
                  border: "2px solid",
                  borderRadius: "4px",
                  backgroundColor: "rgb(175, 184, 181)",
                }}
              >
                <ListGroup.Item>Learn Html</ListGroup.Item>
                <ListGroup.Item>Tutorial</ListGroup.Item>
                <ListGroup.Item>Get Certified</ListGroup.Item>
              </ListGroup>
            </Card.Body>

            <Card.Body>
              <Card.Link
                href="./src/linkfolder/"
                style={{
                  color: "blueviolet",
                  fontFamily: "Cambria",
                  fontSize: "20px",
                }}
              >
                Know More
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div
          id="htmlCardImg"
          style={{
            marginTop: "55px",
            marginLeft: "-80px",
            marginBottom: "50px",
            width: "700px",
            height: "420px",
            border: "2px solid black",
            borderRadius: "10px",
            backgroundColor: "rgb(180, 206, 197)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          
        </div>
      </div>
    </>
  );
};

export default HtmlContainer;
