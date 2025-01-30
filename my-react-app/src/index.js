import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Test from './test';
// import ReactDetails from './reactDetails-function';
import reportWebVitals from './reportWebVitals';
// import ReactDetails1 from './ReactDetails-class';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>Hello World</h1> */}
  {/* <div>
  <Test />
    <h2>Using Function Component</h2>
    <ReactDetails />
    <h2>Using Class Component</h2>
    <ReactDetails1 />
  </div> */}

    {/* <AddTwoNumber /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
