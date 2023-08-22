import React from 'react'

function GrandChildComponent(props) {
  return (
    <div>
        <h3>GrandChildComponent</h3>
        <p>names from Parent: {props.names.join(', ')}</p>
    </div>
  )
}

export default GrandChildComponent