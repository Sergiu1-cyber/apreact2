import React, { useState } from 'react'

function Comp3() {
  
  const [val, setVal] = useState()
  
  function inpModel(e) {
    setVal(e.target.value)
  }
  
  return(
    <>
    <p>{val}</p>
    <input type="text" onChange={inpModel} />
    </>
    );
}

export default Comp3
