import cat1img from '../Images/cat1img.webp';
import { PiHouseFill, PiHouseLight } from "react-icons/pi";
import anagrey from '../assets/anagrey.webp';
import axis2a from '../assets/axis2a.webp';
import axis2b from '../assets/axis2b.webp';
import navcurved from '../assets/navcurved.webp';
import dotkidslight from '../assets/dotkidslight.webp';
import everslipcovered from '../assets/everslipcovered.webp';
import fawnanimalkids from '../assets/fawnanimalkids.webp';
import gathersofa from '../assets/gathersofa.webp';
import janodalphabet from '../assets/janodalphabet.webp';
import janodrainbow from '../assets/janodrainbow.webp';
import loungedeep from '../assets/loungedeep.webp';
import medocswivel from '../assets/medocswivel.webp';
import "../styles/catalog.css";


 const catalog1array = [

        { id: 1, title: "Ana Grey Dining Chair", price: "$299.99", image: anagrey },
        { id: 2, title: "Axis 2-Piece Sectional Sofa", price: "$339.99", image: axis2a },
        { id: 3, title: "Axis 2-Seat Sofa", price: "$239.99", image: axis2b },
       

    ]

     const catalog2array = [

        { id: 1, title: "Curved Back Dining Chair", price: "$129.99", image: navcurved },
        { id: 2, title: "Dot Kids Light Brown Play Stool", price: "$149.99", image:dotkidslight },
        { id: 3, title: "Ever Slipcovered Striped Nursery", price: "$299.99", image: everslipcovered },
       

    ]

     const catalog3array = [

        { id: 1, title: "Fawn Animal Kids Play Chair", price: "$299.99", image: fawnanimalkids },
        { id: 2, title: "Gather Sofa", price: "$139.99", image: gathersofa },
        { id: 3, title: "Janod Alphabet Wooden Baby Puzzle", price: "$29.99", image: janodalphabet },
       

    ]

      

     const catalog4array = [

        { id: 1, title: "Janod Rainbow Turtle Wooden Baby Pull Toy", price: "$299.99", image: janodrainbow },
        { id: 2, title: "Lounge Deep Chaise Lounge", price: "$299.99", image: loungedeep },
        { id: 3, title: "Medoc Swivel Chair", price: "$299.99", image: medocswivel },
       

    ]
function Catalog(){
return(
  <div>
  <img className='cat1img' src={cat1img} alt="" />
  <div className='divcat1'> 
    <h2 className='h2cat1'>Products</h2>
     <div className='divcat2'>
    
    <span className='cat1icon'>  <PiHouseFill /></span> <span className='pcat1'>Collections</span> <span className='pcat1'>Products</span>
  </div>
  </div>









  <div className='catalogcards'>

     <div className="catalogcontainer">
        {catalog1array.map((item) => (
          <div key={item.id} className="catalogcard"> {/* Added unique key */}
            <div>
              <img src={item.image} className='catalogimage' alt={item.title} />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>

         <div className="catalogcontainer">
        {catalog2array.map((item) => (
          <div key={item.id} className="catalogcard"> {/* Added unique key */}
            <div>
              <img src={item.image} className='catalogimage' alt={item.title} />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>

       <div className="catalogcontainer">
        {catalog3array.map((item) => (
          <div key={item.id} className="catalogcard"> {/* Added unique key */}
            <div>
              <img src={item.image}  className='catalogimage' alt={item.title} />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>

        <div className="catalogcontainer">
        {catalog4array.map((item) => (
          <div key={item.id} className="catalogcard"> {/* Added unique key */}
            <div>
              <img src={item.image} className='catalogimage' alt={item.title} />
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>

  </div>
    
  </div>


)

}

export default Catalog