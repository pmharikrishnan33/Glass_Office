import React from 'react'
import LandingPage from './pages/Landing/LandingPage'
import Signin from './pages/Auth/Signin/Signin'
import Signup from './pages/Auth/Signup/Signup'
import UserDashboard from './pages/UserDashboard/UserDashboard'

const App = () => {
  return (
    <div>
      {/* <LandingPage/> */}
      {/* <Signin/> */}
      <Signup/>
      {/* <UserDashboard/> */}
    </div>
  )
}

export default App
