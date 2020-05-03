import React from 'react';
import Popup from "reactjs-popup";

function Display ({ injuries }) {

  function handleOnClick(injury) {}



  return (
    <div className='injury-box'>
    <Popup trigger={<button> MECHANISM</button>} position="bottom center">
    <div>
    {injuries.map(injury => (
      <button key={injury.id} type="button" onClick={() => handleOnClick(injury)}>
      <span>{injury.value}</span>
      </button>

    ))}

    </div>
    </Popup>
    </div>
  )

}







export default Display;
