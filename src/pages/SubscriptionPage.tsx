import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../css/subscription.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const baseUrl = 'https://Tools.gohanpeixe.repl.co'


const SubscriptionPage = () => {

  const navigate = useNavigate()

  const parameters = new URLSearchParams(window.location.search)
  const code = parameters.get('code')

  if(!code){
    return(
      <div>
        <h1 style= {{color: 'white'}}>
          You're not supposed to be here
        </h1>
      </div>
    )
  }

  const [post, setPost] = useState(null) 
  const [id, setId] = useState(null)
  const [img, setImg] = useState(null)
  const [Responsed, setResponsed] = useState(false)
  const [Failed, setFailed] = useState(String)

  if(Failed === ""){
    setFailed('Manage Subscriptions')
  }

  axios.post(baseUrl + '/api/auth', {'code': code}).then((response) => {

  

      if(response.status === 200){

        setPost(response.data['username'])
        setId(response.data['id'])
        setImg(response.data['avatar'])
        setResponsed(true)
      }
      if(response.status === 400){
        return(
          <div>
            Please login again.
          </div>
        )
      }

  })

  if(Responsed){
    return (
      <div>
        <Navbar/>
        <div className= 'center2'>
          <p className= "txt2">Welcome {post}</p>
          <img src= {`https://cdn.discordapp.com/avatars/${id}/${img}.png`}></img>
        </div>
        <div className= 'center2'>
          <button className = "button3" onClick={() => {{axios.post(baseUrl + "/api/create-customer-portal-session", {'userId': id}).then((response) => {
                if(response.status === 200 ){
                  window.open(response.data.toString())
                }
              },
              () => {
                setFailed('You dont have any subscriptions')
              }
              )}

          }}
          >
            {Failed}
          </button>          
        </div>
        <Footer/>
      </div>
      
    )
  }
  else{
    return(
      <div className='center2'>
        <h1 style= {{color: 'white'}}>Please login again.</h1>
        <button className= "button2" onClick={() => {navigate('/')}}>
          Click here
        </button>
      </div>
    )
  }
    



  
}

export default SubscriptionPage