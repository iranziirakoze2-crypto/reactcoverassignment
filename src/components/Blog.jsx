import blogimga1 from '../assets/blogimga1.webp';
import blogimga2 from '../assets/blogimga2.webp';
import blogimga3 from '../assets/blogimga3.webp';
import blogimgb1 from '../assets/blogimgb1.webp';
import blogimgb2 from '../assets/blogimgb2.webp';
import blogimgb3 from '../assets/blogimgb3.webp';
import blogimgc1 from '../assets/blogimgc1.webp';
import blogimgc2 from '../assets/blogimgc2.webp';
import blogimgc3 from '../assets/blogimgc3.webp';
import blogimgd1 from '../assets/blogimgd1.webp';
import blogimgd2 from '../assets/blogimgd2.webp';
import blogimgd3 from '../assets/blogimgd3.webp';
import blogimge1 from '../assets/blogimge1.jpg';
import blogimge2 from '../assets/blogimge2.webp';
import blogimge3 from '../assets/blogimge3.webp';
import blogimgf1 from '../assets/blogimgf1.jpg';
import blogimgf2 from '../assets/blogimgf2.webp';
import blogimgf3 from '../assets/blogimgf3.webp';
import blogimgg1 from '../assets/blogimgg1.webp';
import blogimgg2 from '../assets/blogimgg2.webp';
import blogimgg3 from '../assets/blogimgg3.webp';
import blogimgh1 from '../assets/blogimgh1.webp';
import blogimgh2 from '../assets/blogimgh2.webp';
import { CiCalendar } from "react-icons/ci";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import "../styles/blog.css";

function Blog (){
    return(
        <div>
            <div className='blogpart1'>
               <h1>Furniture</h1>
               <button className='blogbtn1a'>All</button>
               <button className='blogbtn1b'>clean</button>
               <button className='blogbtn1b'>creative</button>
               <button className='blogbtn1b'>design</button>
               <button className='blogbtn1b'>furniture</button>
               <button className='blogbtn1b'>post</button>
            </div>
         
            <div className='allset'>
                 <div className='blogpart2'>
                    <div>
                        <img className='blogimga' src={blogimga1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimga2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
              
                    <div>
                        <img className='blogimga' src={blogimga3} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtexts'>
                    <div >
                        <h4 className='blogtextsh4'>Cozy Fireplaces to Take the Chill</h4>
                        <p>From dining tables that you can extend if you have guests to<br/>
                           coffee tables with handy storage for magazines and more,<br/>
                           you can make your life a bit easier with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Which Sofa Style is Best for You?</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables
                           with handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Bring a Little Joy to Your Days With These 14<br/> Items</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables with
                           handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>

              <div>
                 <div className='blogpart2'>
                    <div>
                        <img className='blogimga' src={blogimgb1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimgb2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
              
                    <div>
                        <img className='blogimga' src={blogimgb3} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtexts'>
                    <div>
                        <h4 className='blogtextsh4'>Space-saving chairs</h4>
                        <p>From dining tables that you can extend if you have guests to<br/>
                           coffee tables with handy storage for magazines and more,<br/>
                           you can make your life a bit easier with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Furniture for a Sunny Breakfast</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables
                           with handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Storage for almost everything</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables with
                           handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>

               <div>
                 <div className='blogpart2'>
                    <div>
                        <img className='blogimga' src={blogimgc1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimgc2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
              
                    <div>
                        <img className='blogimga' src={blogimgc3} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtexts'>
                    <div>
                        <h4 className='blogtextsh4'>Performance Upholstery Fabrics</h4>
                        <p>From dining tables that you can extend if you have guests to<br/>
                           coffee tables with handy storage for magazines and more,<br/>
                           you can make your life a bit easier with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Tables and desks for an easier life</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables
                           with handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>6 Tips to Spice Up a Neutral Color</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables with
                           handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>

               <div>
                 <div className='blogpart2'>
                    <div>
                        <img className='blogimga' src={blogimgd1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimgd2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
              
                    <div>
                        <img className='blogimga' src={blogimgd3} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtexts'>
                    <div>
                        <h4 className='blogtextsh4'>How to Pick the Right Mattress</h4>
                        <p>From dining tables that you can extend if you have guests to<br/>
                           coffee tables with handy storage for magazines and more,<br/>
                           you can make your life a bit easier with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Curves are Trending in Today's</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables
                           with handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Accent Furniture to Personalize your</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables with
                           handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>

               <div>
                 <div className='blogpart2'>
                    <div>
                        <img className='blogimga' src={blogimge1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimge2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
              
                    <div>
                        <img className='blogimga' src={blogimge3} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtexts'>
                    <div>
                        <h4 className='blogtextsh4'>How to Pick the Right Mattress</h4>
                        <p>From dining tables that you can extend if you have guests to<br/>
                           coffee tables with handy storage for magazines and more,<br/>
                           you can make your life a bit easier with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Curves are Trending in Today's</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables
                           with handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Accent Furniture to Personalize your</h4>
                        <p>From dining tables that you can extend if you have guests to<br/> coffee tables with
                           handy storage for magazines and more,<br/> you can make your life a bit easier
                            with a new table or desk.<br/> Knicker lining concealed back zip...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>

              <div>
                 <div className='blogpart2'>
                    <div>
                        <img className='blogimga' src={blogimgf1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimgf2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
              
                    <div>
                        <img className='blogimga' src={blogimgf3} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtexts'>
                    <div>
                        <h4 className='blogtextsh4'>Stunning Wall Art Designs and Ideas</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>10 Best & Cheap Wooden Coffee Tables UK</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Just in Time for Fall</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>

              <div>
                 <div className='blogpart2'>
                    <div>
                        <img className='blogimga' src={blogimgg1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimgg2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
              
                    <div>
                        <img className='blogimga' src={blogimgg3} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtexts'>
                    <div>
                        <h4 className='blogtextsh4'>Super Healthy Cakes</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Accommodating Today's Lifestyles</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Corbyn Dining Table</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>

              <div>
                 <div className='blogpart2b'>
                    <div>
                        <img className='blogimga' src={blogimgh1} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span> <span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className='blogimga' src={blogimgh2} alt="" />
                        <div className='dates'>
                            <div className='calendar'>
                                <CiCalendar/><span>October 24, 2023</span><span>|</span>
                            </div>
                            <div className='blogcomment'>
                                <BiSolidMessageRoundedDetail/> <span>0 comments</span>
                            </div>
                        </div>
                    </div>
                 </div>
                
                 <div className='blogtext2'>
                    <div>
                        <h4 className='blogtextsh4'>Super Healthy Cakes</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                         <button className='blogtextbtn'>Read more</button>
                    </div>
                    <div>
                        <h4 className='blogtextsh4'>Accommodating Today's Lifestyles</h4>
                        <p>Structured gripped tape invisible moulded cups for sauppor<br/>
                           firm hold strong powermesh front liner sport detail. Warmth<br/> comfort hangs loosely from the body large pocket at the<br/> front full
                           button detail cotton blend cute functional. Bodycon<br/> skirts bright primary colours...</p>
                          <button className='blogtextbtn'>Read more</button>
                    </div>
                 </div>
              </div>
        </div>
    )
}

export default Blog;