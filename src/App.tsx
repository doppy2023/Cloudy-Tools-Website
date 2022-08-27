import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./css/App.css"
import Home from './pages/HomePage'
import Subscription from './pages/SubscriptionPage'

const App = () => {

  return (
    
      <Router>
        <Routes>
          <Route path= "/" element= {<Home/>}  />
          <Route path= "/subscriptions" element= {<Subscription/>}  />
        </Routes>
      </Router>
    
  )
}

export default App