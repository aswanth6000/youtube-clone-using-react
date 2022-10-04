import './sidebar.css'
import React from 'react'



export default function Sidebar() {
  return (
    <div className='main2'>
       <div className="home">
       <i className="bi bi-house-door" id='home'></i>
       <p>Home</p>
       </div>
       <div className="trending">
       <i className="bi bi-compass"></i>
       <p>Explore</p>
       </div>
       <div className="plist">
       <i className="bi bi-collection-play"></i>
       <p>Playlist</p>
       </div>
       <div className="download">
       <i className="bi bi-download"></i>
       <p>Downloads</p>
       </div>
    </div>
  )
}
