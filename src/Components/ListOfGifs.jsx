import React from 'react'
import { useState, useEffect } from 'react'
import Gif from './Gif'
import fetchGifs from '../Services/fetchGifs'
import Loader from '../Components/Loader/Loader'
import './listOfGifs.css'

function ListOfGifs(params) {

  const search = params.params.keyword

  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchGifs({keyword : search}).then((gifs) => {
      setGifs(gifs)
      setLoading(false)}
    )
  },[search])

  
  if(loading) return <Loader/>

  return (<ul>{gifs.map(gif =><li>
     <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id}>
     </Gif></li>)}</ul>)
}

export default ListOfGifs