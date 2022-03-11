import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello, from Guru99 Tutorials! State in ReactJS! Class component."
    }
  }
  render() {
    return <h1>{this.state.msg}</h1>;
  }
}
export default Hello;
