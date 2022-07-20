import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
  <div className="mail">
    <h1 className="mailTitle">Showing you the world, one country at a time</h1>
    <span className="mailDesc">Sign up and we'll send the best deals to you
    </span>
    <div className="mailInputContainer">
        <input type="text" placeholder='Your Email' />
        <button>Subscribe</button>
    </div>
  </div>
  )
}

export default MailList