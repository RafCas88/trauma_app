import React, { Component } from 'react';

class Display extends Component {
  render() {
  return (
    <div className='injury-box'>
    <h1>{this.props.title}</h1>
    </div>
  )
}
}

export default Display;
