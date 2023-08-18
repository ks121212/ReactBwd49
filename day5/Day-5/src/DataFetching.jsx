import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState([true]);
    const [error,setError]=useState(null);

    const url="https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{

   

    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        setTimeout(()=>{
            setData(data);
            setLoading(false);
        },5000)
    })
    .catch (error=>{
        console.log(error);
    });
},[]);

 if(loading){
    return<div>Loading...</div>
 }

 if(error){
    return<div>Error:{error.message}</div>;
 }
  return (
    <div>
        <ul>
            {
                data.map((note)=>{
                    <li key={note.id}>{note.username}</li>
                })
            }
        </ul>
    </div>
  )
};

export default DataFetching;