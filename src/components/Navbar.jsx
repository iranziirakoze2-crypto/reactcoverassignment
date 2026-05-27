import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

import "../styles/navbar.css"
function Navbar()
{
    return(
<nav>
    <div className="navcontainer">
        <div className="min">
    miniture
        </div>
       
        <div className="navlist">
<a href=""><span>Home</span><BiChevronDown/></a>
<a href=""><span>Catalog</span><BiChevronDown/></a>
<a href=""><span>Pages</span><BiChevronDown/></a>
<a href=""  className="special">Blog</a>
 <a href="" className="special">Contact</a>
    </div>

    <div className ="navicons">
        <IoSearchSharp className ='navicon'/>
        <IoPersonOutline className ='navicon'/>
        <AiOutlineShopping className ='navicon'/>
    </div>
    
    </div>


</nav>
    )
}

export default Navbar
