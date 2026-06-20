import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { IoPersonOutline, IoSearchSharp } from "react-icons/io5";
import anagrey from "../assets/anagrey.webp";
import axis2a from "../assets/axis2a.webp";
import axis2b from "../assets/axis2b.webp";
import navcurved from "../assets/navcurved.webp";
import "../styles/navbar.css";

function Navbar() {
    const [openDropDown, setOpenDropDown] = useState(null);

    const HomeLinks = [
        "Home v1 - Modern Elegance",
        "Home v2 - Rustic Comfort",
        "Home v3 - Minimalist Chic",
        "Home v4 - Industrial Vibes",
        "Home v5 - Vintage Revival",
        "Home v6 - Kid's Playland",
    ];

    const Cataloglinks = [
        { id: 1, title: "Ana Grey Dining Chair", price: "$299.99", image: anagrey },
        { id: 2, title: "Axis 2-Piece Sectional Sofa", price: "$339.99", image: axis2a },
        { id: 3, title: "Axis 2-Seat Sofa", price: "$239.99", image: axis2b },
        { id: 4, title: "Curved Back Dining Chair", price: "$129.99", image: navcurved },
    ];

    const pageslinks = [
        { name: "About Us", path: "/about" },
        { name: "FAQs", path: "/FAQs" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav>
            <div className="navcontainer">
                <div className="min">miniture</div>

                <div className="navlist">
                    <div>
                        <div
                            onMouseEnter={() => setOpenDropDown(0)}
                            onMouseLeave={() => setOpenDropDown(null)}
                            className="bt"
                        >
                            <Link to="/">
                                <span>Home</span>
                                <BiChevronDown />
                            </Link>

                            {openDropDown === 0 && (
                                <>
                                    <div className="overlay"></div>
                                    <div className="dropdown-card">
                                        {HomeLinks.map((link) => (
                                            <Link key={link} className="Sub-Nav1" to="/">
                                                {link}
                                            </Link>
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
                            <Link to="/catalog">
                                <span>Catalog</span>
                                <BiChevronDown />
                            </Link>

                            {openDropDown === 2 && (
                                <>
                                    <div className="overlay"></div>

                                    <div className="sub-dropdown1">
                                        <div className="navitemsbar">
                                            <h5>Collections</h5>
                                            <span className="navitems">Accent Chairs</span>
                                            <br />
                                            <span className="navitems">
                                                Dining Chair <br /> Dining Room <br /> Kid's Furniture
                                            </span>
                                        </div>

                                        <Link to="/catalog" className="view-products-link">
                                            <span>View All Products</span>
                                            <BsArrowRight />
                                        </Link>

                                        <div className="catright">
                                            <h4 className="sub-dropdown-content1">MOST POPULAR</h4>

                                            <div className="dropdown-cardcat">
                                                {Cataloglinks.map((link) => (
                                                    <Link className="Sub-Nav2" key={link.id} to="/catalog">
                                                        <img className="navcatimg" src={link.image} alt={link.title} />

                                                        <div className="contents">
                                                            <div>
                                                                <span>{link.title}</span>
                                                            </div>

                                                            <span>{link.price}</span>
                                                        </div>
                                                    </Link>
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
                            <Link to="/">
                                <span>Pages</span>
                                <BiChevronDown />
                            </Link>

                            {openDropDown === 1 && (
                                <>
                                    <div className="overlay"></div>
                                    <div className="dropdown-card">
                                        {pageslinks.map((link) => (
                                            <Link key={link.name} className="Sub-Nav1" to={link.path}>
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <Link to="/blog" className="special">
                        Blog
                    </Link>

                    <Link to="/contact" className="special">
                        Contact
                    </Link>
                </div>

                <div className="navicons">
                    <IoSearchSharp className="navicon" />

                    <Link to="/login">
                        <IoPersonOutline className="navicon" />
                    </Link>

                    <AiOutlineShopping className="navicon" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
