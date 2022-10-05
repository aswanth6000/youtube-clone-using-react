import './sidebar.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className='main2'>
       <Link to="/"><div className="home">
       <i className="bi bi-house-door" id='home'></i>
       <p>Home</p>
       </div></Link>
       <Link to="/Explore"> <div className="trending">
       <i className="bi bi-compass"></i>
       <p>Explore</p>
       </div></Link>
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
