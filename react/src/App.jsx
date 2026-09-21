import React from 'react'
import { useState } from 'react';
import './index.css'
// import Self from './Self'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);
  return (
      <div className={color?"theme":"theme1"}>
      <div id="box" style={{"--accent":`${count}5`}}>
      <h2>Color</h2>
      <button
      className='btns'
      onClick={()=>setColor((color)=>!color)}> 
      {color? "☀️ Light Mode":"🌑 Dark Mode"}
      </button>
        <br></br>
      <div id='display'>
      <h2>Count</h2>
      <h1>{count}</h1>
      </div>
      <button className='btns' onClick={()=>setCount(count+1)}>+ Increment</button>
      <br></br>
      <button className='btns' onClick={()=>setCount(0)}>◌ Reset</button>
      <br></br>
      <button className='btns' onClick={()=>setCount(count-1)}>- Decrement</button>
      {console.log(count)}
      {/* <Self/> */}
     </div>
    </div>
  );
}