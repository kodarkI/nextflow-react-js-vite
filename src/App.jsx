import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let city = 'bangkok'
  return (
    <div>
      <h1 id="header" className='danger'>Hello, {city}</h1>
    </div>
  );  
}

export default App
