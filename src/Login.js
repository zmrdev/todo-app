import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from './firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
function Login() {

  const navigate = useNavigate()
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='login'>
      <h1>Login with google sso</h1>
      <div className='googlebtn'>
        <GoogleButton onClick={handleLogin} />
      </div>
    </div>
  )
}

export default Login