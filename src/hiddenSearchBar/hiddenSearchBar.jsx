import React, { useState } from 'react'
import { use } from 'react';
import { FaSearch } from 'react-icons/fa';

const HiddenSearchBar = () => {
    const[showSearch,setshowSearch]=useState(false);
    const[bgColor,setbgColor]=useState('gray');
    function handleFasearch(){
        setbgColor('black');
        setshowSearch(true);
    }
    function handleContainer(e){
        setbgColor('black');
        if(e.target.id === 'content'){
            setbgColor('gray');
            setshowSearch(false);
        }
    }
   
  return (
    <>
        <section
            className='flex justify-center items-center w-[100vw] h-[100vh]'
            style={{
                background:bgColor,
            }}
            id='content'
            onClick={handleContainer}
        >
            
            {
                showSearch?(
                    <input 
                        type="text"
                        placeholder='search'
                        className='w-[15rem] h-[2.5rem] rounded-md p-2 font-bold'
                    />
                ):
                (
                    <i
                        onClick={handleFasearch}
                        className='w-[4rem] h-[4rem]'
                    ><FaSearch className='font-bold'/></i>
                    
                )
            }
        </section>
    </>
  )
}

export default HiddenSearchBar