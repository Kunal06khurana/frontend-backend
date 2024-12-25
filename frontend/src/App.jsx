import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes,setjokes]=useState([]);
  useEffect(()=>{
    axios.get('/api/jokes').then((res)=>setjokes(res.data));

  },[])

  return (
    <>
      <h1>Chai aur code</h1>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <h3>{joke.content}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
