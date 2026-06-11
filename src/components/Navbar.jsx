import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import anagrey from '../assets/anagrey.webp';
import axis2a from '../assets/axis2a.webp';
import axis2b from '../assets/axis2b.webp';
import navcurved from '../assets/navcurved.webp';
import { BsArrowRight } from "react-icons/bs";

import "../styles/navbar.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [openDropDown, setOpenDropDown] = useState(null)

    const HomeLinks = [
        "Home v1-Modern Elegance",
        "Home v2 — Rustic Comfort",
        "Home v3 — Minimalist Chic",
        "Home v4 — Industrial Vibes",
        "Home v5 — Vintage Revival",
        "Home v6 — Kid's Playland",
    ]

    const Cataloglinks = [

        { id: 1, title: "Ana Grey Dining Chair", price: "$299.99", image: anagrey },
        { id: 2, title: "Axis 2-Piece Sectional Sofa", price: "$339.99", image: axis2a },
        { id: 3, title: "Axis 2-Seat Sofa", price: "$239.99", image: axis2b },
        { id: 4, title: "Curved Back Dining Chair", price: "$129.99", image: navcurved }

    ]

    const pageslinks = [
        {name:"About Us",path:"/about"},
          {name:"FAQs",path:"/FAQs"},
           {name:"Contact Us",path:"/contact"} 
    ]

    return (
        <nav>

            <div className="navcontainer">

                <div className="min">
                    miniture
                </div>

                <div className="navlist">

                    <div>

                        <div
                            onMouseEnter={() => setOpenDropDown(0)}
                            onMouseLeave={() => setOpenDropDown(null)}
                            className="bt"
                        >

                            <a href="/">
                                <span>Home</span>
                                <BiChevronDown />
                            </a>

                            {openDropDown === 0 && (

                                <>

                                    <div className="overlay"></div>

                                    <div className="dropdown-card">

                                        {HomeLinks.map((link) => (

                                            <a
                                                key={link}
                                                className="Sub-Nav1"
                                                href=""
                                            >
                                                {link}
                                            </a>

                                        ))}

                                    </div>

                                </>

                            )}

                        </div>

                    </div>

                    <div>

                        <div
                            onMouseEnter={() => setOpenDropDown(2)}
                            onMouseLeave={() => setOpenDropDown(null)}
                            className="bt"
                        >

                            <a href="/catalog">
                                <span>Catalog</span>
                                <BiChevronDown />
                            </a>

                            {openDropDown === 2 && (

                                <>

                                    <div className="overlay"></div>

                                
                                       
                                        <div className="sub-dropdown1">
                                           
                                          <div className="navitemsbar">
                                            <h5>Collections</h5>
                                            <span className="navitems">Accent Chairs</span><br/>
                                            <span className="navitems"> Dining  Chair <br/> Dining Room  <br/>Kid's Furniture</span>
                                            
                                        </div>

                                        <div><p>View All Products</p><BsArrowRight/>
                                        </div>
                                       
                                        <div className=" catright">
                                     <h4 className="sub-dropdown-content1">MOST POPULAR</h4>
                                     
                                    <div className="dropdown-cardcat">

                                       
                                        {Cataloglinks.map((link) => (
                                            
                                                <a className="Sub-Nav2" key={link.id}
                                                
                                                href=""
                                            >
                                                <img className="navcatimg"  src={link.image} alt={link.title} />

                                                <div className="contents"> 
                                                    <div>
                                                        <span >{link.title}</span>
                                                    </div>
                                                  
                                                <span>{link.price}</span>
                                                </div>
                                               
                                            </a>
                                         
                                           
                                        ))}
                                          </div>
                                          </div>
                                          </div>
                                         
                                  

                                </>

                            )}

                        </div>

                    </div>




                    <div>

                        <div
                            onMouseEnter={() => setOpenDropDown(1)}
                            onMouseLeave={() => setOpenDropDown(null)}
                            className="bt"
                        >

                            <a href="">
                                <span>Pages</span>
                                <BiChevronDown />
                            </a>

                            {openDropDown === 1 && (

                                <>

                                    <div className="overlay"></div>

                                    <div className="dropdown-card">

                                        {pageslinks.map((link) => (

                                            <Link
                                                key={link.name}
                                                className="Sub-Nav1"
                                                to={link.path}
                                            >
                                                {link.name}
                                            </Link>

                                        ))}

                                    </div>

                                </>

                            )}

                        </div>

                    </div>



                    <a href="/blog" className="special">
                        Blog
                    </a>

                    <a href="/contact" className="special">
                        Contact
                    </a>

                </div>

                <div className="navicons">

                    <IoSearchSharp className='navicon' />

                    <IoPersonOutline className='navicon' />

                    <AiOutlineShopping className='navicon' />

                </div>

            </div>

        </nav>
    )
}

export default Navbar;