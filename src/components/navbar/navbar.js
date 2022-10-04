import React from 'react'
import './navbar.css'
import Logo from './images/logo.png'

export default function Navbar() {
  return (
    <div className='main'>
       <div className="menu">
        <i className="bi bi-list"></i>
        </div>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="search">
            <input type="text" placeholder='Search' />
            <div className="box">
            <i className="bi bi-search"></i>
            </div>
        </div>
        <div className="mic">
        <i className="bi bi-mic"></i>
        </div>
        <div className="video">
        <i className="bi bi-camera-reels"></i>
        </div>
        <div className="noti">
        <i className="bi bi-bell"></i>
        </div>
        <div className="user">
            <p>u</p>
        </div>

    </div>
  )
}
