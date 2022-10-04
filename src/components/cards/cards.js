import React,{useState,useEffect} from 'react'
import './cards.css'
import { API_KEY } from '../constants/constants'
import axios from '../../axios'

export default function Body() {
  const [video, setVideo] = useState([])
  useEffect(() => {
    axios.get(`videos?key=${API_KEY}&chart=mostPopular&part=snippet&maxResults=50&regionCode=IN`).then((response)=>{
      setVideo(response.data.items);
      console.log(response.data.items);
    })
  },[])
  return (
    <>
    
    {video.map((obj,index)=>
    <div className='main3'>
        <div className="thumb">
            <img key={obj.id} src={video ? obj.snippet.thumbnails.medium.url : ''} alt="" />

        </div>
        <div className="ti">
          <p>{video ? obj.snippet.title : ''}</p>
          </div>
          <div className="chimg">
          <p>c</p>
        </div>
        <div className="chtitle">
        <p>{video ? obj.snippet.channelTitle : ''}</p>
        
      </div>
        
    </div>
          )}
      </>
  )
}
