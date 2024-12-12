import React from 'react'
import { useState } from 'react'
import './Counter.css';

const Counter = () => {
    const[count, setCount] = useState(0);
  return (
    <>
    <div className='MainContainer'>

        <h1 className='counter'>count:{count}</h1>


        <div className='buttonCounter'>

        <button onClick={()=>setCount(count+1)} className='+button button'>+</button>
        <button onClick={()=>setCount(count-1)} className='-button button'>-</button>

    </div>
    </div>
    
    </>
  )
}

export default Counter