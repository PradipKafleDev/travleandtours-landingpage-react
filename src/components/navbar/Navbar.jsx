import React from 'react'
import './navbar.css'



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
          <img className="logo" src='../img/logo.jpeg' alt="" />
            <span className='title'>नेपाल टुर्स एण्ड ट्राभल</span>
            <div className="navItems">
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>

        </div>

    </div>
  )
}

export default Navbar