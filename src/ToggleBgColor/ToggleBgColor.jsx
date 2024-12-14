import React, { useState } from 'react'

const ToggleBgColor = () => {
    const[text, setText] = useState('yellow');
    const[bg, setBg]=useState('black');
    function handleClick(){
        setBg((p)=>p==='black'?'white':'black');
        setText((p)=>p==='yellow'?'black':'yellow');
    }
    
  return (
    <>
        <div className=' w-[100vw] h-[100vh]  flex'
            style={{
                background:bg,
                color:text
            }}>
            <h1 className='m-auto font-extrabold text-[9rem] '>
                Welcome <br/>to Reality!
            </h1>
            <button className=' h-[3rem]  p-2 mt-2 mr-2 font-extrabold'
                    style={{
                        border:`4px solid ${text}`,
                    }}
                    onClick={handleClick}>
                Toggle!
            </button>

        </div>
    </>
  )
}

export default ToggleBgColor