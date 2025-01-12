import logo from "./logo.svg";
import "./reactDetails.css";
// import ImgTable from './../../first-react-app/src/ImgTable';

function reactDetails() {
  return (
    <div id="main">
      <div id="image">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div id="header">
        <h1>React</h1>

        <p>React is a JavaScript library for building user interfaces.</p>
      </div>
      <h2>React Features</h2>
      <ul>
        <li>
          JSX − JSX is JavaScript syntax extension. It isn't necessary to use
          JSX in React development, but it is recommended.
        </li>
        <li>
          Components − React is all about components. You need to think of
          everything as a component.
        </li>
        <li>
          Unidirectional data flow and Flux − React implements one-way data flow
          which makes it easy to reason about your app.
        </li>
        <li>
          License − React is licensed under the Facebook Inc. Documentation is
          licensed under CC BY 4.0.
        </li>
      </ul>
      {/* <h2>React Advantages</h2> */}
      <table>
        <th>React Advantages</th>
        <tr>
          &nbsp;&nbsp; 1. &nbsp;React is easy to integrate with other frameworks
          like Meteor, Angular, etc.
        </tr>
        <tr>&nbsp;&nbsp; 2. &nbsp;JSX makes code easier to read and write.</tr>
        {/* <tr>
             &nbsp;&nbsp; 3.&nbsp; Component logic is written in JavaScript instead of templates, which allows for easy passing of rich&nbsp; data through your app and keeps state out of the DOM.
             </tr> */}
        <tr>
          &nbsp;&nbsp; 4. &nbsp;React implements one-way data flow which makes
          it easy to reason about your app.
        </tr>
      </table>
    </div>
  );
}
export default reactDetails;
