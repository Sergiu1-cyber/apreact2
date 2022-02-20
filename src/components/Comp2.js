import React, {useState, useEffect} from 'react'

function Comp2(){
  
  const [state, setState] = useState()
  
  useEffect( () => {
    setInterval( () => {
      const t = new Date();
      setState(t.toLocaleTimeString());
    }, 1000 )
  },[] )
  
  return(
    <>
      <h2>Component2</h2>
      <p>Ora: {state}</p><br />
    < />
    );
}

export default Comp2;