import aboutimg1 from '../assets/aboutimg1.webp';
import anthony from '../assets/anthony.webp';
import elizabeth from '../assets/elizabeth.webp';
import andrew from '../assets/andrew.webp';
import claire from '../assets/claire.webp';
import eighthimg1 from '../assets/eighthimg1.webp';
import eighthimg2 from '../assets/eighthimg2.webp';
import eighthimg3 from '../assets/eighthimg3.webp';
import eighthimg4 from '../assets/eighthimg4.webp';
import eighthimg5 from '../assets/eighthimg5.webp';
import eighthimg6 from '../assets/eighthimg6.webp';
import { PiInstagramLogoThin } from "react-icons/pi";
import "../styles/aboutus.css";

const minitureteam = [
  { title: "Co Founder", name: "Anthony Martinez", image: anthony },
  { title: "Creative Director", name: "Elizabeth Johnson", image: elizabeth },
  { title: "Developer", name: "Andrew Harris", image: andrew },
  { title: "Designer", name: "Claire Thompson", image: claire }
];

const eighth = [
    {id:1, icon:{ PiInstagramLogoThin }, image:eighthimg1},
    {id:2, icon: {PiInstagramLogoThin} , image:eighthimg2},
    {id:3, icon:{ PiInstagramLogoThin }, image:eighthimg3},
    {id:4, icon:{ PiInstagramLogoThin }, image:eighthimg4},
    {id:5, icon:{ PiInstagramLogoThin }, image:eighthimg5},
    {id:6, icon:{ PiInstagramLogoThin }, image:eighthimg6}
  ]

function About() {
  return (
    <div>
      <h1>
        Transforming Your House into a Home
        <br />
        with Beautifully Crafted Furniture
        <br />
        for Every Room
      </h1>

      <img className='aboutimg1' src={aboutimg1} alt="" />

      <div className='aboutcontents'>
        <div className='aboutparagraphs'>
          <h3>Established in 2008</h3>
          <p>
            At Miniture, our journey began in 2008 with a vision to redefine how people perceive
            and<br /> experience furniture. Over the years, we have grown from a small, family-owned
            <br />
            business into a leading provider of exquisite furniture, known for our dedication
            to<br /> quality, craftsmanship, and innovation.
          </p>
        </div>

        <div className='aboutparagraphs'>
          <h3>The Early Years</h3>
          <p>
            In the early years of our company, we started as a humble workshop, crafting furniture
            <br />
            by hand with a commitment to excellence. Our founder, Dzung Nova, had a passion for
            <br />
            woodworking and a deep appreciation for the artistry that goes into creating fine
            <br />
            furniture. This dedication laid the foundation for our company's values and principles.
          </p>
        </div>

        <div className='aboutparagraphs'>
          <h3>Growth and Expansion</h3>
          <p>
            As our reputation for quality craftsmanship and unique designs grew, so did our
            <br />
            business. We expanded our operations to include a showroom where customers could
            <br />
            experience our furniture firsthand. This expansion allowed us to connect with our
            <br />
            customers on a more personal level and showcase the range of possibilities our furniture
            <br />
            offered.
          </p>
        </div>

        <div className='aboutparagraphs'>
          <h3>Innovation and Customization</h3>
          <p>
            In the 2023, we took a significant leap by embracing technology and innovation in our
            <br />
            design and manufacturing processes. This allowed us to offer a wider range of
            <br />
            customization options to our customers. Whether it was choosing different finishes,
            <br />
            fabrics, or custom dimensions, we wanted every piece to reflect the unique style and
            <br />
            personality of its owner.
          </p>
        </div>
      </div>

      <div className='aboutcontents2'>
        <div className='numbers'>
          <h1 className='h1b'>450+</h1>
          <p>Premium products</p>
        </div>

        <div>
          <h1 className='h1b'>25+</h1>
          <p>Years experiences</p>
        </div>

        <div>
          <h1 className='h1b'>3600+</h1>
          <p>Happy customers</p>
        </div>

        <div>
          <h1 className='h1b'>92+</h1>
          <p>Award gained</p>
        </div>
      </div>

      <div className='team'>Our Team</div>

      <div className='teamcards'>
        {minitureteam.map((item) => (
          <div className="teamcontainer" key={item.title}>
            <img className="teamimage" src={item.image} alt={item.title} />
            <div className="team-text-badge">
              <p className="teamtitle">{item.title}</p>
              <h2 className="teamname">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className='brandnames'>
        <span>PRADA</span>
        <span>BURBERRY</span>
        <span>ALEXANDER <br/> MQUEEN</span>
        <span>BALMAIN <br/> PARIS</span>
        <span>HERMES <br/> PARIS</span>
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

export default About;