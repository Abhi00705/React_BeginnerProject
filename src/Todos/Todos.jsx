import React, { useState } from 'react'
import './Todos.css';
function generateId(){
    
    return(Math.random().toString(36).substring(2,10));
}
const Todos = () => {
    const[input, setInput]=useState();
    const[todos, setTodos]=useState([]);
    const handleSubmit=()=>{
        setTodos((todos)=>[
            ...todos,
            {
                text:input,
                id:generateId(),
            }

        ]);
        setInput("");
    }
    const removeTodo = (id) =>
        setTodos((todos) => todos.filter((t) => t.id !== id));
  return (
    
    <div className='MainContent'>
        <div className='subMain'>

        <input
            className='input'
            type="text" 
            placeholder='Enter Todos...'
            value={input}
            onChange={(e)=>setInput(e.target.value)}

        />
        <button  className='inputButton' onClick={handleSubmit}>Add</button>

        </div>
        {
            console.log(todos)
        }
        <ol className='list'>
            <h1>Enter Todos:</h1>
        {
        
            todos.map(({text,id})=>{
                return(
                    <div className='todos'>
                        <li key={id}>{text}</li>
                        <button className='clearButton' onClick={()=>removeTodo(id)} >X</button>
                    </div>
                )
            })
        }
        </ol>
    </div>
  )
}

export default Todos