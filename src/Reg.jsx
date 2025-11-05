import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Reg() {
const [email, setemail]=useState("")
const [pass, setpass]=useState("")
const navigate= useNavigate()
   const reg=()=>{
 if(email&&pass){
    alert("success")
    navigate("/login")
 }else{
    alert("enter the data")

 }
  
useEffect(()=>{
    setemail("")
    setpass("")
},[])
  sessionStorage.getItem(email , "email")
  JSON.stringify(sessionStorage.setItem(email , "email"))
   }
  return (
   <>
        <div className='pt-4 d-flex justify-content-center'>
           <div className='mx-3'>
                <label htmlFor="">email:</label>
              <input className='ms-2'  id='email' type="email" placeholder='enter email' onChange={(e) => setemail(e.target.value)} value={email} />
           </div>
         <div className='mx-3'>
              <label htmlFor="">pass:</label>
              <input className='ms-2'  id='pass' type="text" placeholder='enter pass' value={pass} onChange={(e) => setpass(e.target.value)}  />
         </div>
         <div><button className='ms-3' onClick={reg}>login</button></div>
        </div>
        
   </>
  )
}

export default Reg

