import React from "react"
import { Link } from "wouter"
import './gif.css'

export default function Gif({title, id, url}){
  return <Link to={`/gif/${id}`}>
          <h5>{title}</h5>
          <img src={url} alt={title}/>
         </Link>
}