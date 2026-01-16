import React from 'react'
import './Nav.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
         <img src="/Nike.png" alt="logo" />

        </div>

        <div>
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div>
          <button>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
