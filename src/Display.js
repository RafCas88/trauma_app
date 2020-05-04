import React from 'react';
import Popup from "reactjs-popup";

class Display extends React.Component{
  state = {
    injuries: this.props.injuries,
    selectedInjury: this.props.injuries
  }

  selectInjury = (injury) => this.setState({
    selectedInjury: injury
  })

  render() {
    return (
      <>
      <div className='select-box-selected-injury'>{this.state.selectedInjury.value }</div>
      <div className='injury-box'>
      <Popup trigger={<button> MECHANISM</button>} position="bottom center">
      <div>
      {this.state.injuries.map (injury => (
        <button key={ injury.id }
        onClick={() => this.selectInjury(injury)}
        className={this.state.selectedInjury === injury ? 'selected' : ''}
        >
        {injury.value}
        </button>
      ))}
      </div>
      </Popup>
      </div>
      </>
    )
  }
}






export default Display;
