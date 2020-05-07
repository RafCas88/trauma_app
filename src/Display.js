import React, { useState } from 'react';
import Popup from "reactjs-popup";

function Display ({ injuries, multiSelect = false, subtitle}){
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
    <div>
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
      {injury.value} {isInjuryInSelection(injury) && subtitle}
      </button>
    ))}
    </div>
    </Popup>
    </div>
  )
}

export default Display;
