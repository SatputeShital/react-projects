import LearnHtml from '../LearnHtml';
import code from './h-i.png'

const HtmlBasic = () => {
  return (
    <>
    <div className="row">
        <div class="col-md-2 customDiv">
       <LearnHtml/>
        </div>
        <div class="col-md-8">
        <h2>HTML Basic Examples</h2>
      <h5>HTML Documents</h5>
      <h3>What is HTML?</h3>
      <p>
      All HTML documents must start with a document type declaration.
      The HTML document itself begins with html and ends with /html..
      The visible part of the HTML document is between body and /body.
      </p>
      <h3>How to View HTML Source</h3>
      <p>Have you ever seen a Web page and wondered "Hey! How did they do that?"
      View HTML Source Code:
      Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.

      Inspect an HTML Element:
      Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.</p>
      <img src={code} alt="" style={{width:"700px", height:"200px"}}/>
      <br />
        </div>
      </div>
      
    </>
  )
}

export default HtmlBasic
