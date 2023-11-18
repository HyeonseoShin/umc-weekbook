import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <p>
        <button className={buttonClass} onClick={handleClick}>
          {buttonText}
        </button>
      </p>
      </div>
    )
  }
}

function Login()
{
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogin = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return(
    <div
      style={
        {
          color : "white"
        }
      }
    >
      <p>
        <button
          style={
            {
              margin : "1vw", borderRadius : "20px", width : "5vw", height : "5vh"
            }
          }
        
          onClick={handleLogin}
        >
          {
            isLoggedIn ? "Log-out" : "Log-in"
          }
        </button>

          {isLoggedIn ? "Welcome!" : "Login!"}
      </p>
    </div>
  )
}

export default Login
