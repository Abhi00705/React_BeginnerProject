import React, { useState } from 'react'
import {Card_Img} from '../assets/helper';


const FormValidation = () => {
    const[userName, setUserName]=useState("");
    const[userNameColor, setUserNameColor]=useState("");
    const[ErrorUserName, setErrorUserName]=useState("");

    const[email, setEmail]=useState("");
    const[emailColor, setEmailColor]=useState("");
    const[ErrorEmail, setErrorEmail]=useState("");


    const[password, setPassword]= useState("");
    const[passwordColor, setPasswordColor]=useState("");
    const[ErrorPassword, setErrorPassword]= useState("");


    const[conformPassword, setConformPassword]=useState("");
    const[conformPasswordColor, setConformPasswordColor]=useState("");
    const[ErrorConformPassword, setErrorConformPassword]=useState("");

    function handleValidation(e){
      e.preventDefault();
      if(userName.length > 8){
        setErrorUserName("");
        setUserNameColor("green");
      }else{
        setErrorUserName("userName length is less then 8");
        setUserNameColor("red");
      }

      if(email.includes("@gmail.com")){
        setErrorEmail("")
        setEmailColor("green")

      }
      else{
        setErrorEmail("@gmail.com in included")
        setEmailColor("red")
      }

      if(password.length > 8){
        setErrorPassword("")
        setPasswordColor("green")
      }
      else {
        setErrorPassword("password length is less then 8 ")
        setPasswordColor("red")
      }

      if(conformPassword === password){
        setErrorConformPassword("")
        setConformPasswordColor("green")
      }
      else{
        setErrorConformPassword("password not match")
        setConformPasswordColor("red")

      }



    }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-red-400 flex justify-center items-center'>
        <div className='w-[50%] h-[70%] flex shadow-md'>
            <div className='w-[50%] h-[100%]'>
                <img src={Card_Img} alt="img" className='w-[100%] h-[100%]'/>
            </div>

            <form className="bg-white w-[50%] h-[100%] flex flex-col justify-center items-center gap-6 p-4">
                    <input 
                    type="text" 
                    placeholder='user name' 
                    value={userName} 
                    onChange={(e)=>setUserName(e.target.value)}
                    className='p-2 w-[90%] font-serif font-semibold'
                    style={{
                      border:`2px solid ${userNameColor}`
                    }}
                    
                    />
                    <p className='text-red-700'>{ErrorUserName}</p>
                    
                    <input 
                    type="text" 
                    placeholder='enter email' 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)
                   }  
                    className='p-2 w-[90%] font-serif font-semibold'
                    style={{
                      border:`2px solid ${emailColor}`
                    }}
                    />
                    <p className='text-red-700'>{ErrorEmail}</p>

                    <input 
                    type="text" 
                    placeholder='enter password' 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)
                    }  
                    className='p-2 w-[90%] font-serif font-semibold'
                    style={{
                      border:`2px solid ${passwordColor}`
                    }}
                    />
                    <p className='text-red-700'>{ErrorPassword}</p> 

                    <input 
                    type="text" 
                    placeholder='Re-enter password' 
                    value={conformPassword} 
                    onChange={(e)=>setConformPassword(e.target.value)
                    }  
                    className='p-2 w-[90%] font-serif font-semibold '
                    style={{
                      border:`2px solid ${conformPasswordColor}`
                    }}
                    
                    />
                    <p className='text-red-700'>{ErrorConformPassword}</p> 

                    <button onClick={handleValidation} className='bg-green-400 p-2 w-[8rem] rounded-sm font-bold'>submit</button>
            </form> 
        </div>  
    </div>
  )
}

export default FormValidation