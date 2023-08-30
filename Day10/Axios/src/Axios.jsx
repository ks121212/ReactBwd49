import React, { useEffect } from 'react'

function Axios() {

    const [post,setPost]=useState([]);

    useEffect = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')

.then(response => {
  const post=response.json()
  setPost(post)

},[])

.catch(error => {
 console.error('Error:', error);
});
    }
  return (
    <div>
   <ul>
    {post.map((response,index)=>(
<li key={index}>{response.name}</li>
    ))}
   </ul>
    </div>
  )
}

export default Axios