import React, { useState } from 'react'
import { Auth } from '../config/firebase';
import Swal from 'sweetalert2'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
    const userCredentials =  await signInWithEmailAndPassword(Auth, email, password)
    const user = userCredentials.user

    if (!user.emailVerified) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Email not verified",
        text: "Please verify your email before logging in",
        showConfirmButton: true,
        timer: 1500
      });
    }else{
      setError("") 
      Swal.fire({
        title: "Congratulations!",
        text: "You have successfully Logged in!",
        icon: "success",
        timer: 2000,  
        timerProgressBar: true,
        didClose: () => {
            navigate('/login');
        }
    });
    }
       
    } catch (error) {
      // interpret the firebase error
      switch (error.code) {
        case "auth/invalid-credential":
          setError('invalid Credentials! please enter a valid credentials.');
          break;
      
        default:
          setError('An error occurred! Please try again later.');
          break;
      }  
  
    }
  }

  return (
    <>
      <Link to= '/'><div className="logo"><img src="/img/logo.png" alt="" /></div></Link>
      <form className="form" onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className="title">Login </p>
        <p className="message">Signin now to continue with the app. </p>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path
                d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
              ></path>
            </g>
          </svg>
          <input type="text" className="input" placeholder="Enter your Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
          </svg>
          <input type="password" className="input" placeholder="Enter your Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="button-submit" >Sign in</button>

      </form>
    </>
  )
}

export default Login
