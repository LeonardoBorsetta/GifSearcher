import React, {useEffect}from 'react'
import logoImg from '../assets/logo.jpg'
import "./header.css"
import {Link} from 'wouter'

function Header() {

  useEffect(()=>{
    document.getElementById("logoImg").src=logoImg
  })

  return (
    <Link to='/home'>
        <img id='logoImg'/>
        <h1>Buscador de Gifs</h1>
    </Link>
  )
}

export default Header