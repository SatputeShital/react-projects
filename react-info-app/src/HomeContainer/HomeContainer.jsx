import React from "react";
// import {Form , Button} from "react";
import SearchPage from "./SearchPage";
import "./HomeContainer.css";

const HomeContainer = () => {
  return (
    <>
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
    </>
  );
};

export default HomeContainer;
