import React, { useRef, useState } from 'react'

function Ref() {

const [count,setCount]=useState(0);
const countRef=useRef(0);
console.log(countRef);
function handleIncreament(){
    // setCount(count+1);
    // console.log(count);
    countRef.current++;
    console.log(countRef.current)
}


    return (
        <div>
            <h1>UseRef Demo:</h1>
            {/* <p>State: {count}</p> */}
            <p>Ref: {countRef.current}</p>
            <button onClick={handleIncreament}>Increament</button>
        </div>
    )
}

export default Ref