import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState([])
  {fetch('https://just-testing-75uf.vercel.app/about')
    .then(ress => ress.json())
    .then(data => setName(data.namee))}
  return (
    <>
      <h3>
        Hii, I am here
      </h3>
        <h1>{name}</h1>
        
    </>
  )
}

export default App
