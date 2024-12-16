import React, { useState } from 'react'

const Testemonial = () => {
    const[currentIndex, setcurrentIndex] = useState(0);
    const testomoney =[
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
          },
          {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
          },
          {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
          },

    ]
    function handleClickPre(){
        setcurrentIndex(((currentIndex + testomoney.length-1)%testomoney.length));
    }
    function handleClickNext(){
        setcurrentIndex(((currentIndex+1)%testomoney.length));
    }
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='w-[30rem] h-[20rem] shadow-xl bg-slate-300 flex flex-col  gap-4 justify-center items-center'>
            <div className='w-[90%] h-[30%] shadow-lg flex flex-col items-center justify-center gap-2'>
                <p className='text-lg font-serif '>{testomoney[currentIndex].quote}</p>
                <span className='font-extrabold'>- {testomoney[currentIndex].author}</span>
            </div>
            <div className='w-[90%] h-[20%] shadow-lg flex gap-4 justify-center items-center'>
                <button className=' w-[6rem] h-[80%] border-2 rounded-2lg bg-slate-400 font-serif' onClick={handleClickNext}>pre</button>
                -<button className='w-[6rem] h-[80%] border-2 rounded-2lg bg-slate-400 font-serif 'onClick={handleClickPre}>next</button>
            </div>
        </div>
    </div>
  )
}

export default Testemonial