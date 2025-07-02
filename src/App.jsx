import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const Hello = (props) => {
  if (props.username === undefined) {
    return (
      <h1 className='danger'>Hello, guest</h1>
    );
  }

  return (
  <>
  <h1 className='danger'>Hello_let {props.username}</h1>
  <p>How are you</p>
  </>
  );
}   

function Goodbye() {
  return (
    <div>
      <h1 className='danger'>Goodbye</h1>
      <p>See you later</p>
    </div>
  );
}

function App() {
  let city = 'bangkok'
  let C_name = 'Udon'
const PopA = () => {
  console.info('PopA function was called.');
  // Optionally, show a user notification here
  // alert('Sign up for our tester program!');
};

  return (
    <div>
      <Hello username={C_name} />
      <h1 id="header" className='danger'>Hello, {city}</h1>
      <Goodbye />
      <button onClick={PopA}>Click here</button>
    </div>
  );  
}

export default App
