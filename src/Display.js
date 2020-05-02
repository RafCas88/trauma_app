import React from 'react';
import Popup from "reactjs-popup";

function Display ({ title, items = [], multiSelect = false }) {
// const [selection, setSelection] = useState([]);


function handleOnClick(item) {}

return (
  <div className='injury-box'>
  <Popup trigger={<button> MECHANISM</button>} position="bottom center">
  <div>
  {items.map(item => (
             <div className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>
</div>
          ))}

  </div>
  </Popup>
  </div>
)

}




export default Display;
