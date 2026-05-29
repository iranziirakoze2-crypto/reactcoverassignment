import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

import "../styles/navbar.css"
import { useState } from "react";

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

    const pageslinks = [
        "About Us",
         "FAQs",
          "Contact Us"
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

                            <a href="">
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

                    <a href="">
                        <span>Catalog</span>
                        <BiChevronDown />
                    </a>


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

                                        { pageslinks.map((link) => (

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

                   

                    <a href="" className="special">
                        Blog
                    </a>

                    <a href="" className="special">
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

export default Navbar