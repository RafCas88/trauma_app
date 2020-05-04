import React from 'react';
import Popup from "reactjs-popup";

class Display extends React.Component{
  state = {
    injuries: this.props.injuries
  }

render() {
  return (
       <div className='injury-box'>
       <Popup trigger={<button> MECHANISM</button>} position="bottom center">
       <div>
    {this.state.injuries.map (injury => (
      <div key={ injury.id }>
       {injury.value}
      </div>
  ))}
  </div>
  </Popup>
  </div>
)
}
}






export default Display;
