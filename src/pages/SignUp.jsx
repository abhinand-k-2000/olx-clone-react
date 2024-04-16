import { Link, useNavigate } from "react-router-dom"
import { LOGO_URL } from "../utilities/constants"
import { useState, useContext } from "react"
import { FirebaseContext } from "../store/Context"
import { auth, db } from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"; 


const SignUP = () => {

  const [userName, setUserName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const {app} = useContext(FirebaseContext)

  const handleSignUp = async() =>{
    const user = await createUserWithEmailAndPassword(auth, email, password)
    const docRef = await addDoc(collection(db, "users"), {
      id: user.user.uid,
      username: userName,
      mobile: mobile,
      email: email
    });
    console.log("documetn", docRef)
    navigate("/login")


  }


    return (
        <div className='bg-gray-100 grid grid-cols-12 h-screen pb-5'>

        <span className='col-span-4'></span>
        <div className='col-span-4 m-10 bg-white h-3/3 my-auto rounded-xl'>
  
        <Link to={'/'}>
            <img className="w-14 mt-8 mx-auto text-center" src={LOGO_URL}/>
          </Link>

          <div className='mx-auto text-center'>
            <img className='p-2 w-24 mx-auto' src="/olx-logo.png" alt="" />
  
            <h1 className='font-bold text-xl mt-6'>Create your Account </h1>
  
            <input value={userName} onChange={(e)=> setUserName(e.target.value)}  className='py-2 px-2 border-2 w-3/4 rounded-md mt-10 border-black' type="text" placeholder='Username' />
            <input value={mobile} onChange={(e)=> setMobile(e.target.value)}   className='py-2 px-2 border-2 w-3/4 rounded-md mt-5 border-black' type="text" placeholder='Phone Number' />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-md mt-5 border-black' type="text" placeholder='Email' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='py-2 px-2 border-2 w-3/4 rounded-md mt-5 border-black' type="password" placeholder='Password' />
  
            <button onClick={handleSignUp}  className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-6'>Create</button>
  
            <Link to={'/login'}><p className='underline my-5'>Login with Account</p></Link>
  
          </div>
  
  
        </div>
        {/* <span className='col-span-4'></span> */}
  
  
      </div>
    )
}

export default SignUP