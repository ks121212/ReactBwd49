import React from 'react'

function Home() {
  let x=1;
  let y=2;
  let name=Kuppusamy;
  return (
    <div>
    {/* <div>Welcom to Home Component</div>
    <button>Add</button>
    <div>
        <span>Name</span><br />
        <span>Age</span>
        <p>My name is Kuppusamy</p>
    </div> */}
    <div className='Name'>Given name</div>
    <label htmlFor='name'>Name:</label><br />
    <input id="name" type='text' placeholder='Type Here' defaultValue={x+y}></input>
    </div>
  )
}

export default Home;