import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Not working
// const display = "Hello, from Guru99 Tutorials!";
// const h1tag = "<h1>{display}</h1>";

// Working
// import h1tag from './test.jsx';
// or
// const h1tag = (<h1>{display}</h1>);

// import h1tag from './test.jsx';

// Function - export default <Hello />;
// import Hello from './test-func.jsx';

// Class - export default Hello;
import Hello from './test-class-component.jsx';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <h1>Hello, from Guru99 Tutorials!</h1>,
  // h1tag,
  // Hello, // Function - export default <Hello />;
  <Hello />, // Class - export default Hello;
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
