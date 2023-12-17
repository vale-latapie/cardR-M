import { useEffect, useState } from "react"
import axios from 'axios'


const Principal = () => {
    const[characters, setCharacters] = useState([]);

    const handleRequest = async () => {
      try{
        const {data: {results} } = await axios.get("https://rickandmortyapi.com/api/character")
        setCharacters(results)
      }catch (error) {
        console.log(error)
      }
    };
    useEffect(() => {
      handleRequest();
    }, [])
    
   console.log(characters)
  
  
}

export default Principal