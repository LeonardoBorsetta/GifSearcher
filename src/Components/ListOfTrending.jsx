import React, { useEffect, useState } from 'react'
import fetchTrending from '../Services/fetchTrending'
import Trend from './Trend'
import './listOfTrending.css'
import Loader from './Loader/Loader'


function ListOfTrending() {

  const [trend, setTrend] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetchTrending()
      .then((res)=> {
        setTrend(res)
        setLoading(false)
      })
      
    },[])
  
  if (loading) return <Loader/>
  if(trend){
    return (<div className='trend-section'>
              {trend.map(singleTrend => <Trend trend={singleTrend} key={singleTrend.id}></Trend>)}
              </div>)
  }
}

export default ListOfTrending