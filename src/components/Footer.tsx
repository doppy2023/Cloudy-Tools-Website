import React from 'react'
import '../css/footer.css'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (

    <div className='footer'>
        <div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a href= "https://discord.gg/mHCt69xYfE">

                <p className='txt2'>
                    <FaDiscord size= {'30px'} className='img2'/> Cloudy Tools
                </p>
            
            </a>
        </div>
        
      
    </div>
  )
}

export default Footer