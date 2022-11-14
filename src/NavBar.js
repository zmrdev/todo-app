import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
      <h1>Todo App</h1>
      <div className="links">
        <Link to="/">Sign in</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

    </nav>
  )
}

export default NavBar