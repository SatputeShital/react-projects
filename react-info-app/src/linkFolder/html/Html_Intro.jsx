import LearnHtml from '../LearnHtml';
import code from './h-i.png'

const HtmlIntro = () => {
  return (
    <>
    <div className="row">
        <div class="col-md-2 customDiv">
       <LearnHtml/>
        </div>
        <div class="col-md-8">
        <h2>HTML Introduction</h2>
      <h5>HTML is the standard markup language for creating Web pages.</h5>
      <h3>What is HTML?</h3>
      <p>
         HTML stands for Hyper Text Markup Language
         HTML is the standard markup language for creating Web pages
         HTML describes the structure of a Web page 
         HTML consists of a series of elements 
         HTML elements tell the browser how to display the content 
         HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
      </p>
      <h3>A Simple HTML Document</h3>
      <img src={code} alt="" style={{width:"700px", height:"200px"}}/>
      <br />
        </div>
      </div>
      
    </>
  );
};

export default HtmlIntro;
