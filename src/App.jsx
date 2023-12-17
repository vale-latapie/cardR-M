import { BrowserRouter,Routes, Route } from "react-router-dom"
import Navbar from "./assets/componentes/general/Navbar/Navbar"
import Principal from "./pages/principal"



function App() {
 return (
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={ <Principal/> } />
   </Routes>
  </BrowserRouter>
 )
}

export default App
