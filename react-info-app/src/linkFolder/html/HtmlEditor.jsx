import LearnHtml from '../LearnHtml';
import code from './h-i.png'
// import RightSidebar from '../Right-sidebar';

const HtmlEditor = () => {
  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
          <LearnHtml />
        </div>
        <div class="col-md-8">
          <h2>HTML Editors</h2>
          <h5>Learn HTML Using Notepad or TextEdit</h5>
          <p>
            Web pages can be created and modified by using professional HTML
            editors. However, for learning HTML we recommend a simple text
            editor like Notepad (PC) or TextEdit (Mac). We believe that using a
            simple text editor is a good way to learn HTML. Follow the steps
            below to create your first web page with Notepad or TextEdit.
          </p>
          <h3>Step 1: Open Notepad (PC)</h3>
          <h3>Step 2: Write Some HTML</h3>
          <h3>Step 3: Save the HTML Page</h3>
          <h3>Step 4: View the HTML Page in Your Browser</h3>
          <h3>A Simple HTML Document</h3>
          <img src={code} alt="" style={{ width: "700px", height: "200px" }} />
          <br />
          </div>
        {/* </div>
        <div
          id="right-sidebar"
          style={{
            width:"300px",
            color: "black",
            backgroundColor: "#c4cfd1",
            textAlign: "left",
            padding: "20px",
            position:"absolute",
            top:"132px",
            right:"0px"
          }}
        >
          <RightSidebar />
        </div> */}
      </div>
    </>
  );
}

export default HtmlEditor
