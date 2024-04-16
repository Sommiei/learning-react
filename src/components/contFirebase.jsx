
import { useState } from "react"
import { logIn, logOut, logWithGoogle, signUp } from "./firebaseUtils"



export const contFirebase = () => {
    const [email, setemail] = useState('')
  return (
    <div> Sign up</div>
    <input className="input" type="text"onChange={(e)=>{setEmail(e.target.value)}}  placeholder="email" />
   <input className="input" type="text" placeholder="password" />
   <button className="btn" onClick={()=>signUp(email, "password")}> Sign Up Email Password</button>
   <button className="btn" onClick={()=>logIn(email, "password")}> Sign In with Email Password</button>
   <button className="btn" onClick={()=>logWithGoogle()}> SignIn With Google</button>
   <button className="btn" onClick={()=>logOut()}> Sign Out</button>
       
    // <button className='btn' onClick={()=>Signup(email,'password')}>sign up Email Password</button>
   


  )
}
