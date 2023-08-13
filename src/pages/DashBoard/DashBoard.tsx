import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { useAuth0 } from '@auth0/auth0-react';



const DashBoard = () => {
    const {user, isAuthenticated } = useAuth0();

  return (
    <div>
      <NavBar/>
      {isAuthenticated ? 
      <h1>Welcome, {user?.name}!</h1>:
      <h1>please login first</h1>
      }
    </div>
  )
}

export default DashBoard
