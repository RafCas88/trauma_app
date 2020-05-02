import React from 'react';
import Popup from "reactjs-popup";

function Display ({ items }) {

  function handleOnClick(item) {}



  return (
    <div className='injury-box'>
    <Popup trigger={<button> MECHANISM</button>} position="bottom center">
    <div>
    {items.map(item => (
      <button key={item.id} type="button" onClick={() => handleOnClick(item)}>
      <span>{item.value}</span>
      </button>

    ))}

    </div>
    </Popup>
    </div>
  )

}







export default Display;
