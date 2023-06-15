import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "./UserStyle.css"

export default function LoginPage() {
  
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const navigate=useNavigate()

  const handleSubmit= async(e)=>{
   e.preventDefault()
   try{
    const res=await axios.post("http://localhost:5000/login",
    {email:email,password:pass})
   if(res.data.status){ 
    console.log(res.data.checkUser.myId)
    localStorage.setItem("user", JSON.stringify(res))     
    alert(`${res.data.alert}`)
    console.log(res.data.alert)
    navigate("/")
   }else{
    alert(`${res.data.alert}`)
   }
}catch(error){
    console.log(error)
    alert(error.message) 
   }
  }
  return (
    <div className='form-container'>
        
    <form onSubmit={handleSubmit}>
    <h2>LOGIN PAGE</h2>
    <div className="mb-3">
        <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail"
          placeholder='Enter your Email'
          required
        /> 
      </div>
      <div className="mb-3">
        <input type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder='Enter your Password'
        />
      </div>
      <button type="submit" className="btn btn-primary">LOGIN</button>
    </form>
  </div>
 
  )
}
