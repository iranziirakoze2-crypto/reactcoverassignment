import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./components/homePage"
import About from "./components/Aboutus"
import Catalog from "./components/Catalog"
import FAQs from "./components/FAQs"
import Contactus from "./components/contactus"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Login from "./components/login"
import Signup from "./components/signup"
import DashbaordLayout from "./dashboard/dashboardsetting/DashboardLayout"
import IndexDashboard from "./dashboard/dashboardPages/indexDashboard"
import Orders from "./dashboard/dashboardPages/Orders"
import Products from "./dashboard/dashboardPages/Products"
import Categories from "./dashboard/dashboardPages/Categories"



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
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/dashboard" element={<DashbaordLayout />}>
      <Route index element={<IndexDashboard />}/>
      <Route path="orders" element={<Orders />}/>
      <Route path="products" element={<Products />}/>
      <Route path="categories" element={<Categories />}/>
      </Route>
    </Routes>
    
    
    
    </BrowserRouter>
   

   
  )
}

export default App
