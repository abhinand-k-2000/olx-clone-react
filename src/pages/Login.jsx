import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGO_URL } from '../utilities/constants'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';

const Login = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignIn = async() => {
    console.log(email, password)
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
    console.log("THE USER", user.user)
    navigate("/")


  }

  return (
    <div>
        <div className='bg-gray-100 h-screen grid grid-cols-12 pb-5'>
      
      <span className='col-span-4'></span>
      <div className='col-span-4 m-10 bg-white my-auto rounded-xl h-3/3'>

        <Link to={'/'}>
            <img className='w-14 mt-8 mx-auto text-center' src={LOGO_URL}/>
         
        </Link>
        
        <div className='mx-auto text-center'>
          <img className='p-2 w-24 mx-auto' src="/olx-logo.png" alt="" />

          <h1 className='font-bold text-xl mt-6'>Enter Email and Password </h1>

          <input  ref={emailRef} value={email} onChange={(e)=>setEmail(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-10 border-black' type="text" placeholder='Email' />
          <input  ref={passwordRef} value={password} onChange={(e)=> setPassword(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="password" placeholder='Password' />

          <button onClick={handleSignIn} className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-10'>Login</button>

          {/* <p className='mt-6 font-semibold text-red-500'>{errorMessage}</p>   */}

          <Link to={'/signup'}><p className='underline my-14'>Create an account</p></Link>

        </div>
   

      </div>
      <span className='col-span-4'></span>


    </div>
    </div>
  )
}

export default Login