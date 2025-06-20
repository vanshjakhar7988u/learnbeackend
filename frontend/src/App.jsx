import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes,setJokes]=useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((err)=>{
      console.log("ERROR");
    })
  },[])



  return (
    <>
      <h1>VANSH JAKHAR FULLSTACK</h1>
      <p>JOKES : {jokes.length}</p>

      {jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ) )}
    </>
  )
}

export default App
