import React from 'react'
import "../css/login.css"
import cloudyLogo from '../images/cloudy.png'
import { Navigate } from 'react-router-dom'

const Login = () => {


  return (
    <div className= "container">
        <div className= "center">
            
            <img src= {cloudyLogo} className= "img"></img>
            <a href= 'https://discord.com/api/oauth2/authorize?client_id=960271837365956638&redirect_uri=https%3A%2F%2F6309a83a6be883350f605e2a--merry-beijinho-86d210.netlify.app%2Fsubscriptions&response_type=code&scope=identify%20email'>
              <button className= "button">
                Login
              </button>
            </a>
            
        </div>

    </div>
  )
}

export default Login