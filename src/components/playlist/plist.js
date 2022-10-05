import React from 'react'
import './playlist.css'
import { useEffect,useState } from 'react'
import { API_KEY } from '../constants/constants'
import axios from 'axios'
export default function Playlist() {
    const[vid,setVid]=useState([])
    useEffect(()=>{
        axios.get(`videos?key=${API_KEY}&chart=mostPopular&part=snippet&maxResults=50&regionCode=US`).then((response)=>{

            setVid(response.data.items)
        })
    },[])
  return (
    <div>
        {vid.map((vi,index)=>{
            return(

                
                <div className="box1">
            <div className="thumbnail">
                <img key={index} src={vid ? vi.snippet.thumbnails.medium.url : ''} alt="" />
            </div>
            <div className="text">

            <div className="vidtitle">
                this is title of the video
            </div>
            <div className="vidis">
                <p>u</p> heklo
            </div>
            </div>
        </div>
            )
})}
    </div>
  )
}
