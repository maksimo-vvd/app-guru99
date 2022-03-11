import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './test-state-class-component.jsx';
// import Hello_func_component from './test-state-function-component.jsx';
// import Props_to_Class_Component from './test-props-to-class-component';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  //   Hello_func_component,
  // <Props_to_Class_Component msg="Hello, from Guru99 Tutorials! State in ReactJS! Class component. Props to Class Component."/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
