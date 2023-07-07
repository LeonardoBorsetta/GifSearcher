import React, { useEffect, useState } from 'react'
import fetchById from '../Services/fetchById'
import './gifInfo.css'

function GifInfo(params) {

  const [gif, setGif] = useState([])

  const id = params.params.id
  

  useEffect(()=>{
    fetchById(id).then(gif => setGif(gif))
  },[id])

  return (
    <div>
      <h2>{gif.title}</h2>
      <img src={gif.url} alt={gif.title}/>
      <p>Created By : {gif.username}</p>
      <p>Rating : {gif.rating}</p>
    </div>
  )
}

export default GifInfo