import React, { useState } from 'react'

const Calculator = () => {
    const[input, setInput]=useState();
    function display(value){
        
        setInput(input + value );
    }
    function calc(){
        const ans=eval(input);
        setInput(ans);

    }
    function clear(){
        setInput("");
    }
  return (
    <div className=''>
        <div className='h-[100vh] w-[100vw] object-fit: cover bg-my-image flex items-center  justify-center '>
            <form className='p-2 w-64 h-96  bg-black grid grid-rows-6 grid-cols-4 gap-4 border-4 border-gray-800 rounded-lg place-items-center'>
                
                <input 
                className='col-span-4   border-4 border-black w-[15.2rem] h-[2.9rem] p-2'
                type='text'
                value={input}
                onChange={(e)=>e.target.value}
                placeholder='calculate....'
                />
                
                <span 
                onClick={()=>clear()}
                className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center'
                >C</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('-')}
                >-</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('+')}
                >+</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('*')}
                >*</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('1')}
                >1</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('2')}
                >2</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('3')}
                >3</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('/')}
                >/</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('4')}
                >4</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('5')}
                >5</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('6')}
                >6</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('%')}
                >%</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('7')}
                >7</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('8')}
                >8</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('9')}
                >9</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>calc()}
                >=</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('0')}
                >0</span>
                <span className='w-full h-full border-2 rounded-md bg-gray-500  flex items-center justify-center' 
                        onClick={()=>display('00')}
                >00</span>

            </form>
        </div>
    </div>
  )
}

export default Calculator