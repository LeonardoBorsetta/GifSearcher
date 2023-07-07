import './App.css'
import { useEffect, useState } from 'react'
import ListOfGifs from './Components/ListOfGifs'
import GifInfo from './Pages/GifInfo'
import Header from './Components/Header'
import {Link, Route, useLocation } from "wouter"
import ListOfTrending from './Components/ListOfTrending'


function App() {

  const [search, setSearch] = useState("Argentina")
  const [input, setInput] = useState("")
  const [location, setLocation] = useLocation("");

  useEffect(()=>{
    const prev = localStorage.getItem("keyword")
    setLocation(`/search/${prev}`, {replace: true})
  },[])

  function handleSubmit(event){
    event.preventDefault()
    setSearch(input)
    setLocation(`/search/${input}`, {replace: true})
    localStorage.setItem("keyword",input)
  }

  function handleChange(event){
    setInput(event.target.value)
  }

  return (
    <>
      <Header/>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder='Search something..'/>
        <button>Go!</button>
      </form>
      <h3>Trending:</h3>
      <ListOfTrending/>
      <Route path="/search/:keyword" component={ListOfGifs}/> 
      <Route path="/gif/:id" component={GifInfo}/>
    </>
  )
}

export default App
