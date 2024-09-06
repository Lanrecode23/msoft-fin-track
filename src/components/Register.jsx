import React, { useState } from 'react';
import '../css/register.css'
import Swal from 'sweetalert2'
import { Auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, sendEmailVerification } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(true)



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const navigate = useNavigate()
    // Add form submission handler if needed
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("")

        // Create a new user with email and password
        try {
            const userCredentials = await createUserWithEmailAndPassword(Auth, email, password)

            // Update user profile with display name
            const user = userCredentials.user
            await updateProfile(user, { displayName })
            await sendEmailVerification(user)

            Swal.fire({
                title: "Congratulations!",
                text: `${user.displayName}, you have successfully registered!`,
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didClose: () => {
                    navigate('/login');
                }
            });


            // Reset the form
            handleReset()
        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError('The Email is already in use. Please try again')
                    break;

                case "auth/weak-password":
                    setError('The password is too weak. It must be at least 6 characters long.');
                    break;

                default:
                    setError('An error occurred! Please try again later.');
                    break;
            }
        }
    };


    // Add Google Sign-In button handler
    const handleGoogle = async () => {
        setError("")
        try {
            await signInWithPopup(Auth, googleProvider)
            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleReset = () => {
        // Reset the form
        setDisplayName("")
        setEmail("")
        setPassword("")
        setError(null)
    }

    return (
        <div>
            <Link to='/'><div className="logo"><img src="/img/logo.png" alt="" /></div></Link>
            <form className="form" onSubmit={handleSubmit}>
                {error && <h6 style={{ color: 'red' }}>{error}</h6>}
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex-column">
                    <label>Name</label>
                </div>
                <div className="inputForm">
                    <svg
                        height="60"
                        viewBox="0 -9 32 32"
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_3" data-name="Layer 3">
                            <path
                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
                            ></path>
                        </g>
                    </svg>
                    <input type="text" className="input" placeholder="Enter your Name"
                        value={displayName} onChange={(e) => setDisplayName(e.target.value)}
                        required
                    />
                </div>
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
                    <input type="email" className="input" placeholder="Enter your Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        required
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
                    <input type={showPassword ? "password" : "text"} className="input" placeholder="Enter your Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <i
                        className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                        onClick={togglePasswordVisibility}
                    ></i>
                </div>

                <button type="submit" className="button-submit" >Sign Up</button>
                <p className="p">Already have an account? <span className="span"><Link to='/login'>login</Link></span></p>
                <div className="flex-row">
                    <button className="btn google" onClick={handleGoogle}>
                        <svg
                            version="1.1"
                            width="20"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: 'new 0 0 512 512' }}
                        >
                            <path
                                style={{ fill: '#FBBB00' }}
                                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                            ></path>
                            <path
                                style={{ fill: '#518EF8' }}
                                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                            ></path>
                            <path
                                style={{ fill: '#28B446' }}
                                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                            ></path>
                            <path
                                style={{ fill: '#F14336' }}
                                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                            ></path>
                        </svg>
                        Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
