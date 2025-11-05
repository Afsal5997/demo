import React from 'react'

function Login() {
  return (
    <div>
      <div className='pt-4 d-flex justify-content-center'>
           <div className='mx-3'>
                <label htmlFor="">email:</label>
              <input className='ms-2'  id='email' type="email" placeholder='enter email'/>
           </div>
         <div className='mx-3'>
              <label htmlFor="">pass:</label>
              <input className='ms-2'  id='pass' type="text" placeholder='enter pass'  />
         </div>
         <div><button className='ms-3'>register</button></div>
        </div>
    </div>
  )
}

export default Login
