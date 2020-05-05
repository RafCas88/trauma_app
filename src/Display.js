import React, { useState } from 'react';
import Popup from "reactjs-popup";

function Display ({ injuries, multiSelect = false}){
 const [selection, setSelection] = useState([]);

function selectInjury (injury) {
  if(!selection.some(current=> current.id ===injury.id)) {
    if(!multiSelect) {
      setSelection([injury]);
    } else if (multiSelect) {
      setSelection([...selection, injury]);
    }
  }
}

 function isInjuryInSelection(injury) {
   if (selection.some(current => current.id === injury.id))

   {
     return true;
   }
   return false;
 }

    return (
      <div className='select-box-container'>
      <p className='select-box-selected-injury'>{injuries.value}
      {injuries.subtitle}
      </p>
      <div className='injury-box'>
      <Popup
      trigger={<button> MECHANISM </button>}
      position="bottom center">
      <div>
      {injuries.map (injury => (
        <button
        key={ injury.id }
        onClick={() => selectInjury(injury)}
        className= {isInjuryInSelection(injury) && 'selected'}
        >
        {injury.value}
        </button>
      ))}
      </div>
      </Popup>
      </div>
      </div>
    )
  }


export default Display;
