import React, { useState } from 'react'

const Accordion = ({title, content}) => {
    const[isActive,setisActive] = useState(false);
    function handlePlus(){
        setisActive((isActive)=>!isActive);
    }
    function handleMinus(){
        setisActive((isActive)=>!isActive);
    }
  return (
    <div className='max-w-[60%] min-h-[60%]'>
        <div className='flex  gap-4 justify-around leading-[4rem]'>
            <div className=''>
                <p className='font-serif text-[2rem] '>
                    {title}
                </p> 
                
            </div>
            <div className='mxx-4'>
                {
                    isActive?(<button 
                        onClick={handlePlus} 
                        className='font-extrabold text-[2rem] '
                    
                    >-</button>):(<button 
                        onClick={handleMinus}
                        className='font-extrabold text-[2rem] '    
                    >+</button>)
                }
            </div>
        </div>
        <div className='bg-white text-black'>
            {
                isActive && <p>{content}</p>
            }
        </div>
    </div>
  )
}

export default Accordion