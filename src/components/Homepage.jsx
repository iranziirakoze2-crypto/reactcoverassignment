import { LiaBedSolid } from "react-icons/lia";
import h1Image from '../assets/h1Image.webp';
import livingroomimg from '../assets/livingroomimg.jpg';
import bedroomimg from '../assets/bedroomimg.webp';
import kitchenimg from '../assets/kitchenimg.webp';
import kidroomimg from '../assets/kidroomimg.webp';
import { BiChevronDown } from "react-icons/bi";
import anaimg from '../assets/anaimg.webp';
import natural from '../assets/natural.webp';
import paolo from '../assets/paolo.webp';
import curvedback from '../assets/curvedback.webp';
import paliblack from '../assets/paliblack.webp';
import paolonatural from '../assets/paolonatural.webp';
import muirfield from '../assets/muirfield.webp';
import wellsrenew from '../assets/wellsrenew.webp';
import video from '../assets/video.webp';
import fourthimg from '../assets/fourthimg.webp';
import launge from '../assets/launge.webp';
import polly from '../assets/polly.webp';
import axis from '../assets/axis.webp';
import medoc from '../assets/medoc.webp';
import sixthimg1 from '../assets/sixthimg1.png';
import sixthimg2 from '../assets/sixthimg2.png';
import { BsTruck } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import eighthimg1 from '../assets/eighthimg1.webp';
import eighthimg2 from '../assets/eighthimg2.webp';
import eighthimg3 from '../assets/eighthimg3.webp';
import eighthimg4 from '../assets/eighthimg4.webp';
import eighthimg5 from '../assets/eighthimg5.webp';
import eighthimg6 from '../assets/eighthimg6.webp';
import { PiInstagramLogoThin } from "react-icons/pi";
import "../styles/home.css";

function Home() {
  const rooms = [
    { id: 1, title: "LIVING ROOM", image: livingroomimg },
    { id: 2, title: "BED ROOM", image: bedroomimg },
    { id: 3, title: "KITCHEN", image: kitchenimg },
    { id: 4, title: "KID ROOM", image: kidroomimg }
  ];

  const firstclass = [
    { id: 1, title: "Ana Grey Dining Chair", price: "$299.99", image: anaimg },
    { id: 2, title: "Natural Wood Dining Chair", price: "$199.99", image: natural },
    { id: 3, title: "Paolo Black Wood Dining Chair", price: "$249.99", image: paolo },
    { id: 4, title: "Curved Back Dining Chair", price: "$100.00", image: curvedback }
  ];

  const secondclass = [
    { id: 1, title: "Pali Black Hardwood Dining Chair", price: "$139.99", image: paliblack },
    { id: 2, title: "Paolo Natural Wood Dining Chair", price: "$299.99", image: paolonatural },
    { id: 3, title: "Muirfield Sculptural Metal Accent Chair", price: "$299.99", image: muirfield },
    { id: 4, title: "Wells Renew Vegan Leather Chair", price: "$299.99", image: wellsrenew }
  ];

  const third = [
    { title: "top deal today", discount: "Up to 30% off The Living Room Event", image: video }
  ];

  const fourth = [
    {
      title: "CRAFT OWN FUTURE", advertise: "your new forever favorites are Here", image: fourthimg
    }
  ];

  const fifth = [
    { id: 1, title: "Lounge Deep Chaise Lounge", price:"$299.99", image: launge },
    { id: 2, title: "Polly Sand Brown Accent Chair", price:"$439.99", image: polly },
    { id: 3, title: "Axis 2-Seat Sofa", price:"$239.99", image: axis },
    { id: 4, title: "Medoc Swivel Chair", price:"$299.99", image: medoc }
  ];

  const sixth1 = [
    {title:"even more special", advertise:"The personalisation shop", image: sixthimg1}
  ];

  const sixth2 = [
    {title:"crate exclusive", advertise:"New thyme hue from le crueset", image: sixthimg2}
  ]

  const eighth = [
    {id:1, icon:{ PiInstagramLogoThin }, image:eighthimg1},
    {id:2, icon: {PiInstagramLogoThin} , image:eighthimg2},
    {id:3, icon:{ PiInstagramLogoThin }, image:eighthimg3},
    {id:4, icon:{ PiInstagramLogoThin }, image:eighthimg4},
    {id:5, icon:{ PiInstagramLogoThin }, image:eighthimg5},
    {id:6, icon:{ PiInstagramLogoThin }, image:eighthimg6}
  ]
  

  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <div className="home1">
        <h1 className="h1home">
          <LiaBedSolid className="home1bed"/>
          Elevate Your Lifestyle<br/>
          with Our Furniture<br/>
          Creations <span><button className="home1shop">shop now</button></span>
        </h1>
        <img className="h1image" src={h1Image} alt="Heading Decoration" />
      </div>

      {/* Main Grid Container */}
     <div className="rooms-section">
        {rooms.map((item) => (
          <div key={item.id} className={"room-item room-" + item.id}>
            <img src={item.image} className="image-room" alt={item.title} />
            <div className="itemname">{item.title}</div>
          </div>
        ))}
      </div> 

      <div className="tobe">you are in <span className="kit"> kitchen</span><BiChevronDown/></div> 
      
      {/* First Class Row */}
      <div className="firstclasscontainer">
        {firstclass.map((item) => (
          <div key={item.id} className="product-card"> {/* Added unique key */}
            <div>
              <img src={item.image} className="image-product" alt={item.title} />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
     
      {/* Second Class Row */}
      <div className="firstclasscontainer">
        {secondclass.map((item) => (
          <div key={item.id} className="product-card"> {/* Added unique key */}
            <div>
              <img src={item.image} className="image-product" alt={item.title} />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>

      <button className="all">shop all products</button>

      {/* Deal and Durations Banner */}
      <section className="thirddurations">
        {third.map((item) => (
          <div className="dealcontainer" key={item.title}>
            <img className="dealimage" src={item.image} alt={item.title} />
            {/* Wrapped texts into a single info block to stop overlapping */}
            <div className="deal-text-badge">
              <p className="dealtitle">{item.title}</p>
              <h2 className="dealdiscount">{item.discount}</h2>
            </div>
          </div>
        ))}

        {/* Fixed unclosed className quotes below */}
        <div className="durations">
          <div className="time">LIMITED TIME ONLY</div>
          <div className="discount">The living room event up to<br/> 30% off</div>
          <div className="announce">
            Use this text to share information about your brand with your customers.<br/> Describe a product, share announcements, or welcome customers to your <br/>store.
          </div>

          <div className="period">
           <div className="periods">220<br/> days</div>
          <div className="periods">9<br/> hours</div>
          <div className="periods">9<br/>mins</div>
          <div className="periods">30<br/> secs</div>
    
          </div>
           <button className="sale">shop the sale</button>
        </div>
      </section>

      {fourth.map((item) => (
          <div className="fourthcontainer" key={item.title}>
            <img className="fourthimg" src={item.image} alt={item.title} />
            {/* Wrapped texts into a single info block to stop overlapping */}
            <div className="fourthtext">
              <p className="fourthtitle">{item.title}</p>
              <h2 className="fourthadvertise">{item.advertise}</h2>
            </div>
          </div>
        ))}

        <div className="sellers">Top sellers</div>

          <div className="firstclasscontainer">
        {fifth.map((item) => (
          <div key={item.id} className="product-card"> {/* Added unique key */}
            <div>
              <img src={item.image} className="image-product" alt={item.title} />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>

      <div className="sixth">
       
         {sixth1.map((item) => (
          <div className="sixth1container" key={item.title}>
            <img className="sixth1img" src={item.image} alt={item.title} />
            {/* Wrapped texts into a single info block to stop overlapping */}
            <div className="sixth1text">
              <p className="sixth1title">{item.title}</p>
              <h2 className="sixth1advertise">{item.advertise}</h2>
            </div>
          </div>
        ))}

          {sixth2.map((item) => (
          <div className="sixth2container" key={item.title}>
            <img className="sixth2img" src={item.image} alt={item.title} />
            {/* Wrapped texts into a single info block to stop overlapping */}
            <div className="sixth2text">
              <p className="sixth2title">{item.title}</p>
              <h2 className="sixth2advertise">{item.advertise}</h2>
            </div>
          </div>
        ))}

      </div>

      <div className="seventh">
        <div >
         <h4 className="seventhh2"><BsTruck />Free Shipping<br/><span className="seventhspan">Free Shipping for orders</span></h4>
        
        </div>
        
        <div>
          <h4 className="seventhh2"><BsWallet2/>Money Guarantee<br/><span  className="seventhspan">Within 30 days</span></h4>
        
        </div>
           
            <div>
               <h4 className="seventhh2"><BsLifePreserver/>Online Support<br/><span  className="seventhspan">24 hours a day, 7 days a week</span></h4>
        
            </div>
         
              <div>
                 <h4 className="seventhh2"><BsCreditCard/>Flexible Payment<br/><span  className="seventhspan">Pay with Multiple Credit Cards</span></h4>
        
              </div>
           
      </div>

<div className="eighth">
     <div className="eighth1">
        <h2 className="eighthh2">Instagram shop</h2>
        <p className="eighthp">Tag @miniture in your Instagram photos for<br/>
a chance to be featured here.</p>
<button className="eighthbtn">Visit Our Instagram</button>
      </div>

  <div className="eighthgrid">
  {eighth.map((item) => (
    <div className="eighthcontainer" key={item.id}>
      <img className="eighthimg" src={item.image} alt="instagram" />
      <div className="eighthicon">
        <PiInstagramLogoThin />
      </div>
    </div>
  ))}
</div>
 
</div>

      
    </div> 
  );
}

export default Home;