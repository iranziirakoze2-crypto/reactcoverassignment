import { SiFacebook } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { CgYoutube } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import "../styles/footer.css";
function Footer(){
    return(
<div>
    <section className="footer">
      <div className="footer1">

        <div>
          <h3 className="footerh3">Our story</h3>
        <p className="footer1p">Miniture is one of the biggest international<br/> fashion companies, one of the world’s<br/> largest distribution groups.</p>
        
        <div className="footericon">
          <div className="footericons"><SiFacebook/></div>
         <div className="footericons"><RiTwitterXFill /></div>
          <div className="footericons"><  IoLogoInstagram /></div>
           <div className="footericons">< CgYoutube/></div>
        </div>
        
        </div>
        

           <div className="footerdiv">
            <h3 className="footerh3">Quick links</h3>
            <p className="footer1p">Accent Chairs</p>
            <p className="footer1p">Dinning Chair</p>
            <p className="footer1p">Dining Room</p>
            <p className="footer1p">Kid's Furniture</p>
           </div>

            <div>
            <h3 className="footerh3">Information</h3>
            <p className="footer1p">Privacy policy</p>
            <p className="footer1p">Refund policy</p>
            <p className="footer1p">Shipping & Return</p>
            <p className="footer1p">Term & conditions</p>
           </div>

<div>
    <h3  className="footerh3">Let’s get in touch </h3>
    <button  type="text"  className="emailbtn">Enter your email <span className="arrow"><BsArrowRight/></span></button>
</div>

      </div>

      <div className="footer2">
        <p className="footer2p">© 2026 Miniture. Powered by Shopify</p>
        <button className="englishbtn"><span className="englishperson"><BsPersonCircle/></span>English <span className="englishchevron"><BiChevronDown/></span></button>
         <button className="rwandabtn"><span  className="englishperson"><FaCoins/></span>Rwanda(USD $) <span className="englishchevron"><BiChevronDown/></span></button>
      </div>
    </section>
</div>
    )
}

export default Footer