import React, {useRef} from 'react'
import "./login.css"

import "./login.css"
export default function Login() {

    const email = useRef();
    const password = useRef();

    const handleClick = (e) =>{

        e.preventDefault()
    }

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Socialmedia</h3>
                <span className='loginDesc'>Connect with friends and the world around you on Socialmedia</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Email' type="email" required className="loginInput" ref={email}/>
                    <input placeholder='Password' required minLength="6" type="password" className="loginInput" ref={password}/>
                    <button className='loginButton'>Log in</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className='loginRegisterButton'>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}
