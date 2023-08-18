import React from 'react'
import "./GrandChildComponent"
import GrandChildComponent from './GrandChildComponent'

function ChildComponent(props) {

  const sendToParent=()=>{
    const data='Hello from Child!!!';
    props.onDataFromChild(data)
  }
  return (
    <div>
        <h2>ChildComponent</h2>
        <ul>
            {props.names.map((name, index)=>(
             <li key={index}>{name}</li>
            ))}
        </ul>
        <button onClick={sendToParent}>send Data to Parent!!!</button>
        <GrandChildComponent names={props.names}/>
    </div>
  )
}

export default ChildComponent