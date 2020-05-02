import React, { Component } from 'react';
import Popup from "reactjs-popup";

class Display extends Component {
  render() {
    return (
      <div className='injury-box'>
      <Popup trigger={<button> MECHANISM</button>} position="bottom">
      <div>Popup content here !!</div>
      </Popup>
      </div>

    )
  }
}

export default Display;
