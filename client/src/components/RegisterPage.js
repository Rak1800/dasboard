import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "./UserStyle.css"


export default function RegisterPage() {
    const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [address, setAddress] = useState('')
  const [position, setPosition] = useState('')
  const [refer, setRefer] = useState('')
  const navigate=useNavigate()

  useEffect(() => {
    let auth = localStorage.getItem("user")
    if (auth) {
      navigate("/login")
    }
  })

  const handleSubmit= async(e)=>{
   e.preventDefault()
   try{
    const res=await axios.post("http://localhost:5000/register",
    {name:name,gender:gender,age:age,mobile:mobile,email:email,password:pass,address:address,position:position,referId:refer})
   if(res.data.status){
    alert(`${res.data.alert}`)
    
    navigate("/login")
   }else{
    alert(`${res.data.alert}`)
   }
}catch(error){
    console.log(error)  
    alert(error.message)
   }
  }
//  useEffect(()=>{
//   localStorage.getItem("user")
//  })

  return (
    <div className='form-container'>
        
    <form onSubmit={handleSubmit}>
    <h2>REGISTER PAGE</h2>
      <div className="mb-3">
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleInputName"
          placeholder='Enter your Name'
          required
        />
      </div>
      <div className="mb-3">
        <input type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)} 
          className="form-control"
          id="exampleInputgender"
          placeholder='Enter your Gender'
          required
        />
      </div>
      <div className="mb-3">
        <input type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-control"
          id="exampleInputAge"
          placeholder='Enter your Age'
          required
        />
      </div>
      <div className="mb-3">
        <input type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-control"
          id="exampleInputMobile"
          placeholder='Enter your Mobile'
          required
        />
      </div>
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
      <div className="mb-3">
        <input type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="form-control"
          id="exampleInputAddress"
          placeholder='Enter your Address'
          required
        />
      </div>
      <div className="mb-3">
        <input type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="form-control"
          id="exampleInputPosition"
          placeholder='Add your position'
        />
      </div>
      <div className="mb-3">
        <input type="text"
          value={refer}
          onChange={(e) => setRefer(e.target.value)}
          className="form-control"
          id="exampleInputReferId"
          placeholder='Enter your ReferId'
        />
      </div>

      <button type="submit" className="btn btn-primary">REGISTER</button>
    </form>

  </div>
  )
}
