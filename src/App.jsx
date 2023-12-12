
import { useEffect, useState } from "react"
import Navbar from "./assets/componentes/general/Navbar/Navbar"
import axios from 'axios'

function App() {
  const[characters, setCharacters] =useState([])
  const handleRequest = async () => {
    try{
      const data = await axios.get("https://rickandmortyapi.com/api/character")
      console.log(data)
    }catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleRequest()
  }, [])
  
 console.log(characters)


  return (
    <Navbar/>
  )
}

export default App
