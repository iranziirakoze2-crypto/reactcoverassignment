import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./components/homePage"
import About from "./components/Aboutus"
import Catalog from "./components/Catalog"
import FAQs from "./components/FAQs"
import Contactus from "./components/contactus"
import Contact from "./components/Contact"
import Blog from "./components/Blog"



function App () {
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}> 
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/faqs" element={<FAQs />}/>
      <Route path="/contactus" element={<Contactus />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/blog" element={<Blog />}/>
      </Route>
    </Routes>
    
    
    
    </BrowserRouter>
   

   
  )
}

export default App
