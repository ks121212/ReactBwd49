import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import './App.css'
import Home from'./Home'
import About from'./About'
import Contact from'./Contact'
import FbLink from './FbLink'
import Animal from './Animal'

function App() {
  
  return (
   
<>
<Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to='/animal/dog'>Dog</Link>
          {/* <Link to='/'>Home</Link> */}
        </li>
        <li>
        <Link to='/animal/cat'>Cat</Link>
          {/* <Link to='/About'>About</Link> */}
        </li>
        {/* <li>
          <Link to='/Contact'>Contact</Link> 
        </li> */}
        <li>
        <Link to='/animal/rabbit'>Rabbit</Link>
          {/* <Link to='/FbLink'>FbLink</Link> */}
        </li>
      </ul>
    </nav>
    <Routes>
      {/* <Route path='/' exact Component={Home}></Route>
      <Route path='/About' exact Component={About}></Route>
      <Route path='/Contact' exact Component={Contact}></Route>
      <Route path='/FbLink' exact Component={FbLink}></Route> */}
      <Route path='/animal/:name' Component={Animal}></Route>
    </Routes>
  </div>
</Router>
</>
    
  )
}

export default App
