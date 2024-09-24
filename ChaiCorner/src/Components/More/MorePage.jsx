import React, { useState } from 'react';
import './MorePage.css'; 
import { motion } from 'framer-motion';

const MorePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      style={{ marginTop: '80px' }}
    >
      <div className="more-page">
      <h2>Special Offers</h2>
        <section style={{display:"-webkit-inline-flex"}} className="special-offers">
         
          <div className="offer">
            <h3>Offer 1: Buy 1 Get 1 Free</h3>
            <p>Enjoy our special offer of buy 1 cup of chai and get another cup free! Limited time only.</p>
            <img style={{width:"80%",height:"500px"}}  src="https://images.pexels.com/photos/2112749/pexels-photo-2112749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Special Offer 1" />
          </div>
          <div className="offer">
            <h3>Offer 2: 20% Off on All Snacks</h3>
            <p>Get 20% off on all our delicious snacks when you order with your chai.</p>
            <img style={{width:"80%",height:"500px"}} className="offer-image" src="https://images.pexels.com/photos/4617833/pexels-photo-4617833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Special Offer 2" />
          </div>
        </section>

        <section className="faqs">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <button onClick={() => toggleFAQ(0)} className="faq-question">
              What types of chai do you offer? {openFAQ === 0 ? '-' : '+'}
            </button>
            {openFAQ === 0 && (
              <div className="faq-answer">
                <p>We offer a variety of chai flavors including traditional Masala Chai, Green Chai, and more.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button onClick={() => toggleFAQ(1)} className="faq-question">
              Do you offer delivery? {openFAQ === 1 ? '-' : '+'}
            </button>
            {openFAQ === 1 && (
              <div className="faq-answer">
                <p>Yes, we offer delivery within a 5-mile radius of our location.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button onClick={() => toggleFAQ(2)} className="faq-question">
              What are your opening hours? {openFAQ === 2 ? '-' : '+'}
            </button>
            {openFAQ === 2 && (
              <div className="faq-answer">
                <p>We are open from 8 AM to 10 PM every day.</p>
              </div>
            )}
          </div>
          <div className="faq-item">
            <button onClick={() => toggleFAQ(3)} className="faq-question">
              Can I customize my chai? {openFAQ === 3 ? '-' : '+'}
            </button>
            {openFAQ === 3 && (
              <div className="faq-answer">
                <p>Absolutely! You can customize your chai with different spices, milk options, and sweetness levels.</p>
              </div>
            )}
          </div>
        </section>

        <section className="blogs-articles">
          <h2 style={{marginLeft:"120px",fontSize:"30px",marginTop:"30px"}}>Blogs and Articles</h2>
          <div className="scrolling-content">
            <div className="blog-post">
              <h3 style={{marginLeft:"110px",padding:"10px"}}>The Art of Chai Making</h3>
              <p style={{marginLeft:"120px",padding:"10px"}}>Discover the secrets behind making the perfect cup of chai. Learn about the spices, brewing techniques, and more,This timeless drink brings warmth and joy to every sip.</p>
              <img className="blog-image" src="https://images.pexels.com/photos/792991/pexels-photo-792991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Art of Chai Making" />
              <p style={{marginLeft:"120px"}}>With the right ingredients and method, anyone can master the art of chai making. This timeless drink brings warmth and joy to every sip.</p>
              <p style={{marginLeft:"120px"}}>From selecting the freshest tea leaves to understanding the right steeping time, our guide covers everything you need to know.The spices in chai, such as ginger and cardamom, have anti-inflammatory properties that can alleviate common ailments.</p>
            </div>
            <div className="blog-post">
              <h3 style={{marginLeft:"120px"}}>Health Benefits of Chai</h3>
              <p style={{marginLeft:"120px"}}>Explore the numerous health benefits of chai, from boosting immunity to aiding digestion.</p>
              <img  className="blog-image" src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Health Benefits of Chai" />
              <p style={{marginLeft:"120px"}}>Chai is not just a delightful beverage but also a treasure trove of health benefits. Rich in antioxidants, it helps in detoxifying the body.</p>
              <p style={{marginLeft:"120px"}}>The spices in chai, such as ginger and cardamom, have anti-inflammatory properties that can alleviate common ailments. The spices in chai, such as ginger and cardamom, have anti-inflammatory properties that can alleviate common ailments.</p>
            </div>
            <div className="blog-post">
              <h3 style={{marginLeft:"120px"}}>Chai Around the World</h3>
              <p style={{marginLeft:"120px"}}>Learn how chai is enjoyed in different cultures around the globe and discover new ways to enjoy your cup.</p>
              <img className="blog-image" src="https://images.pexels.com/photos/947898/pexels-photo-947898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Chai Around the World" />
              <p style={{marginLeft:"120px"}}>From the spicy masala chai of India to the sweet, milky chai in other countries, the variations are endless.</p>
              <p style={{marginLeft:"120px"}} >Each culture has its unique twist, showcasing the versatility of this beloved drink. The spices in chai, such as ginger and cardamom, have anti-inflammatory properties that can alleviate common ailments.</p>
            </div>
          </div>
          <p style={{ marginTop: '20px',marginLeft:"120px",marginRight:"120px"}}>
            More than just a drink, chai is a part of our culture and lifestyle. Every cup tells a story, inviting us to connect with our roots and share experiences. 
            Whether enjoyed in solitude or with friends, it has a way of warming our hearts and bringing comfort. 
            As you sip, think of the origins, the spices, and the love that goes into making each cup. 
            Let's cherish these moments and explore new flavors together. 
            Join us at Chai Corner to celebrate the joy of chai!
          </p>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Nithyashree CS. All rights reserved.</p>
        
        </footer>
      </div>
    </motion.div>
  );
};

export default MorePage;
