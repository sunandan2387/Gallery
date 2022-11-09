import axios from 'axios'
import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


const SignUp = () => {

  const navigate = useNavigate()
  const [error, setError] = useState("")
    
    const handleChange = e => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const url = "httm://localhost:8080/api/users"
        const { data: res } = await axios.post(url, data)
        navigate("/login")
        console.log(res.message)
      } catch (error) {
        if (error.response && error.response.status >= 400
          && error.response.status <= 500) {
          setError(error.response.data.message)
            }
      }
      alert("Sign Up success")
    }

  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  

  return (
    <div className="container">
        <div className="form">
            <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <Link to="/login">
            <h5>go to login</h5>
          </Link>
                  <input type="text" value={data.name} name='name' required placeholder='Name' onChange={handleChange}/>
                  <input type="text" value={data.lastName} name='lastName' placeholder='Last name' onChange={handleChange}/>
                  <input type="email" value={data.email} name='email' required placeholder='Email' onChange={handleChange}/>
                  <input type="text" value={data.password} name='password' required placeholder='Password' onChange={handleChange}/>
                  <input type="password" value={data.confirmPassword} name='confirmPassword' required placeholder='Confirm Password' onChange={handleChange}/>
                  {error && <div className='error_msg'>{error}</div>}
                  <button type='submit'>Signup</button>
            </form>    
        </div>  
    </div>
  )
}

export default SignUp
