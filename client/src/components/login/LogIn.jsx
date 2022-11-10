import axios from 'axios'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const SignUp = () => {

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
        const url = "httm://localhost:8080/api/auth"
        const { data: res } = await axios.post(url, data)
          localStorage.setItem("token", res.data)
          window.location = "/"
   
       } catch (error) {
        if (error.response && error.response.status >= 400
          && error.response.status <= 500) {
          setError(error.response.data.message)
            }
      }
    }

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  

  return (
    <div className="container">
        <div className="form">
            <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <Link to="/signup">
            <h5>go to signup</h5>
          </Link>
                  <input type="email" value={data.email} name='email' required placeholder='Email' onChange={handleChange}/>
                  <input type="text" value={data.password} name='password' required placeholder='Password' onChange={handleChange}/>
                  {error && <div className='error_msg'>{error}</div>}
                  <button type='submit'>Login</button>
            </form>    
        </div>  
    </div>
  )
}

export default SignUp
