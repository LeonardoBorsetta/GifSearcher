import React, { useEffect } from 'react'
import { useLocation} from 'wouter'
import './trend.css'

function Trend({trend}) {

  const [location, setLocation] = useLocation("");

  function handleClick(){
      setLocation(`/gif/${trend.id}`, {replace: true})
  }

  return (
  <>
    <div className='trend-container' onClick={handleClick}><p>{trend.title}</p></div>
    </>
  )
}

export default Trend