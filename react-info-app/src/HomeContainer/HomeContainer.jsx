import React from "react";
// import {Form , Button} from "react";
import SearchPage from "./SearchPage";
import "./HomeContainer.css";
import HtmlContainer from "./HtmlContainer";
import BootstrapContainer from "./BootstrapContainer";
import CssContainer from "./CssContainer";
import JavaScriptContainer from "./JavaScriptContainer";
import MongoDBContainer from "./MongoDBContainer";
import ReactContainer from "./ReactContainer";
import TopClick from "./TopClick";

const HomeContainer = () => {
  return (
    <>
      {" "}<TopClick/>
      <div id="main">
        <div id="head-search">
          <h1>Code Your Future with Us</h1>
          <h4>Learn, Build, and Grow with Expert Guidance.</h4>
          <SearchPage />
        </div>
        <div id="imgBlock">
          <section id="bgimg"></section>
          <section id="bgimg1"></section>
          <div id="img1"></div>
          <div id="img2"></div>
          <div id="img3"></div>
        </div>
      </div>
      <div style={{border:"2px solid black",  backgroundColor:"rgb(206, 228, 220)"}}>
        <HtmlContainer />
        </div>
      <div  style={{border:"2px solid black",  backgroundColor:"rgb(84, 95, 91)"}}>
        <CssContainer/>
      </div>
      <div  style={{border:"2px solid black",  backgroundColor:"rgb(206, 228, 220)"}}>
        <JavaScriptContainer/>
      </div>
      <div style={{border:"2px solid black",  backgroundColor:"rgb(84, 95, 91)"}}>
        <BootstrapContainer/>
      </div>
      <div  style={{border:"2px solid black",  backgroundColor:"rgb(206, 228, 220)"}}>
        <MongoDBContainer/>
      </div>
      <div style={{border:"2px solid black",  backgroundColor:"rgb(84, 95, 91)"}}>
        <ReactContainer/>
      </div>
    </>
  );
};

export default HomeContainer;
