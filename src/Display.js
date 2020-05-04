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
      <button key={ injury.id }>
       {injury.value}
      </button>
  ))}
  </div>
  </Popup>
  </div>
)
}
}






export default Display;
