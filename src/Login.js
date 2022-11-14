import React from 'react'
import GoogleButton from 'react-google-button'
import firebase from 'firebase'
import { useNavigate } from 'react-router-dom'
function Login() {

  const navigate = useNavigate()
  const handleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleProvider)
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