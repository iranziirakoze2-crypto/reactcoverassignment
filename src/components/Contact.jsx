
  import map from '../assets/map.png';
import { SiFacebook } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { CgYoutube } from "react-icons/cg";
import "../styles/contact.css";

function Contact(){
    return(
        
                <div>
                    <div className='contact1'>
                      <h3>We're here for you</h3>
                 <p className='paragraph1'>Our friendly team is always here to chat.</p>  
                    </div>
                 
        
                 <img className='map' src={map} alt="" />
                  
                  <div className='contactcontents'>
        
                    <div className='contactcontents1'>
                      
                    <div>  
                  <div className='inputs'>
                    <div className='input1'>
                    <input className='contactinputaddresses' type="text" placeholder='Name'/>
                 <input className='contactinputaddresses' type="text" placeholder='Email'/>
                  </div>
                 
                 <div className='input2'>
                     <input className='contactinputaddresses' type="text" placeholder='Phone number'/>
                 <input className='contactinputaddresses' type="text" placeholder='Subject'/>
                 </div>
                  </div>
                  
                
                  <input className='input3' type="text" placeholder='Message'/>
                  </div>
        
                  <button className='messagebtn'>Send message</button>
                  <p className='paragraph2'>This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>
                    </div>
        
        
                  <div className='addresses'>
                    <h6>ADDRESS</h6>
                    <p className='paragraph3'>12/A, New Boston Tower, New York<br/>
        United States, NY</p>
        
                     <h6>EMAIL</h6>
                    <p className='paragraph3'>contact@yourstore.com<br/>
        sales@yourstore.com</p>
        
                     <h6>PHONE</h6>
                    <p className='paragraph3'>+888 999 777 66<br/>
        
        +999 555 666 00</p>
        
                     <h6>FOLLOW US</h6>
                    <div className="footericon">
                  <div className="footericons"><SiFacebook/></div>
                 <div className="footericons"><RiTwitterXFill /></div>
                  <div className="footericons"><  IoLogoInstagram /></div>
                   <div className="footericons">< CgYoutube/></div>
                </div>
                  </div>
        
                  </div>
        
                  
        
                </div>
    )
}

export default Contact