

import faqs from '../assets/faqs.webp';
import "../styles/faqs.css";

function FAQs() {
    return(
     <div>
      <img className='faqsimage' src={faqs} alt="" />
      <div className='faqsimgcontents'>
        <h2>FAQs</h2>
        <span>Welcome to our FAQ, we are so happy to have you here and as a client.</span>
      </div>
       
       <div className='faqslayouts'>

        <div>
        <p className='faqsp'>What is your return policy?<span className='faqs'>+</span></p>
        <p className='faqsp'>How do I track my order?<span className='faqs'>+</span></p>
        <p className='faqsp'>What payment methods do you accept?<span className='faqs'>+</span></p>
        <p className='faqsp'>What payment methods do you accept?<span className='faqs'>+</span></p>
        <p className='faqsp'>How can I contact your customer support?<span className='faqs'>+</span></p>
        <p className='faqsp'>Are the sizes true to measurements?<span className='faqs'>+</span></p>
        <p className='faqsp'>Can I modify or cancel my order after it's been placed?<span className='faqs'>+</span></p>
      </div>

      <div>
        <p className='faqsp'>Do you offer gift wrapping services?<span className='faqs+'>+</span></p>
        <p className='faqsp'>How do I care for my garments?<span className='faqs+'>+</span></p>
        <p className='faqsp'>Do you offer online ordering and shipping?<span className='faqs+'>+</span></p>
        <p className='faqsp'>Can I sign up for exclusive offers and updates?<span className='faqs+'>+</span></p>
        <p className='faqsp'>How do I create an account?<span className='faqs+'>+</span></p>
        <p className='faqsp'>What if an item I want is out of stock?<span className='faqs+'>+</span></p>
        <p className='faqsp'>Can I change my shipping address after placing an order?<span className='faqs+'>+</span></p>

      </div> 

       </div>
      
     </div>

    )
}

export default FAQs
