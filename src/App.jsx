import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./components/homePage"
import About from "./components/Aboutus"
import Catalog from "./components/Catalog"



function App () {
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}> 
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      </Route>
    </Routes>
    
    
    
    </BrowserRouter>
   

   
  )
}

export default App
