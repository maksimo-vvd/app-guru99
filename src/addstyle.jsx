import React from 'react';
import ReactDOM from 'react-dom';

const h1Style = {
  color: 'red'
};

function Hello(props) {
  return <h1 style={h1Style}>{props.msg}</h1>;
}
const Hello_comp = <Hello msg="Hello, from Guru99 Tutorials!" />;
export default Hello_comp;
