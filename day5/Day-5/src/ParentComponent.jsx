import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const names=['Alice','Barbie','Charlie','Jhon']
    const [receiveData,setReceiveData]=useState("");

    const handleDataFromChild=(data)=>{
      setReceiveData(data);
    }
  return (
    <div>ParentComponent
        <h1>List of Names</h1>
        <p>Data from child: {receiveData}</p>
        <ChildComponent onDataFromChild={handleDataFromChild} names={names}/>
        {/* <ChildComponent names={names}/> */}
    </div>
  )
}

export default ParentComponent