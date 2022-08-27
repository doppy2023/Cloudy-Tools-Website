import React from 'react'
import logo from '../images/cloudy.png'
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className= 'main'>
        <div className = 'main2' >
            <img src= {logo} alt= "Cloudy img" className= 'image' onClick={() => {navigate('/')}}></img>
            <p className= 'mainText' onClick={() => {navigate('/')}}>
                Cloudy Dashboard
            </p>
        </div>
        
    </div>
  )
}

export default Navbar