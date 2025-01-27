import React from 'react'

import LearnJs from '../LearnJs'

const JsIntro = () => {
  return (
    <>
    <div className="row">
        <div class="col-md-2 customDiv">
       <LearnJs/>
        </div>
        <div class="col-md-8">
        <h2>JavaScript Introduction</h2>
      <h5>What is JavaScript?</h5>
      {/* <h3>HTML Attributes</h3> */}
      <p>JavaScript is the programming language of the web.

It can update and change both HTML and CSS.

It can calculate, manipulate and validate data.
</p>
      <h3>Why Study JavaScript?</h3>
      <p>JavaScript is one of the 3 languages all web developers must learn:

1. HTML to define the content of web pages

2. CSS to specify the layout of web pages

3. JavaScript to program the behavior of web pages</p>
      <h3>Did You Know?</h3>
      <p>JavaScript and Java are completely different languages, both in concept and design.

JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.</p>
      
      {/* <img src={att} alt="" style={{width:"900px", height:"130px"}}/> */}
      <br />
        </div>
      </div>
      
    </>
  )
}

export default JsIntro
