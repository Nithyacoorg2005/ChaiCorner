import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"

const Home = () => {
    const navigate=useNavigate();
    const handlenaviagte1=()=>{
        navigate('./Menu');
    };
    const handlenavigate2=()=>{
        navigate('./MorePage');
    }



  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.8 }}
  >
    <>
      <div className="main">
        <div className="herosection">
          <h1>100% NATURAL HERBAL TEA</h1>
          <p>
            Chai Corner is a cozy online destination for chai lovers, offering a
            wide variety of tea blends inspired by traditional flavors. It
            celebrates the art of chai-making with carefully curated recipes,
            ranging from classic masala chai to unique fusion brews. The
            platform fosters a sense of community, encouraging visitors to
            explore new chai experiences and share their love for tea. With a
            focus on quality ingredients and authentic brewing techniques,
             Chai Corner  delivers an immersive experience for every chai
            enthusiast. It's the perfect spot to discover, sip, and savor the
            magic of chai.
          </p>
          <button  onClick={handlenaviagte1}style={{fontFamily:"outfit"}}>BUY NOW</button>
        </div>
      </div>
      <div className="hero2">
        <h2
          style={{ marginTop: "100px", fontSize: "50px", marginLeft: "50px" }}
        >
          Why Chai Corner??
        </h2>
        <div className="video">
          <video controls={false} autoPlay muted loop>
            <source
              src="https://videos.pexels.com/video-files/7615781/7615781-hd_1080_1920_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="why">
            <h5 style={{ padding: "20px" }}>
              {" "}
              Chai Corner evokes a sense of warmth and hospitality. The name
              suggests a space where guests can feel at home, making it a
              perfect retreat for tea lovers looking for a comforting cup of
              chai. The term “Corner” implies a cozy nook or a snug spot,
              reminiscent of a favorite, welcoming hideaway.{" "}
            </h5>
            <h5 style={{ padding: "20px" }}>
              Community Focus: The name captures the essence of a communal
              gathering place, reminiscent of local tea stalls where people come
              together to enjoy chai. It reflects the social nature of chai
              culture, where sharing a cup often means sharing stories,
              laughter, and experiences. This community-oriented approach
              fosters a sense of togetherness and inclusivity.{" "}
            </h5>
            <h5 style={{ padding: "20px" }}>
              Chai Corner is straightforward and easy to remember, which is
              crucial for establishing a strong brand identity. Its simplicity
              ensures that it sticks in the minds of potential customers and is
              easy to recall when they think of where to enjoy a great cup of
              chai.
            </h5>
            <h5 style={{ padding: "20px" }}>
              Cultural Connection:Represents the cultural significance of chai,
              a drink often shared in social gatherings. Nostalgic Feel: Reminds
              people of traditional tea corners, creating a sense of comfort and
              belonging.
            </h5>
            <h5 style={{ padding: "20px" }}>
              Versatile Appeal: Chai Corner is inclusive, catering to both
              casual drinkers and serious chai aficionados. Whether someone is
              stopping by for a quick cup or seeking a deeper exploration of
              chai varieties, the name promises a welcoming environment for all.
            </h5>
           
            <h5 style={{ padding: "20px" }}>
              Brand Identity: The name aligns with a brand mission that goes
              beyond just serving chai. It suggests a commitment to providing an
              enriching experience, emphasizing the importance of creating a
              memorable and enjoyable environment for customers.
            </h5>
           
            
          </div>
        </div>
      </div>
      <div className="friends">
      <video controls={false} autoPlay muted loop id="background-video">
            <source src="https://videos.pexels.com/video-files/5101693/5101693-uhd_2560_1440_30fps.mp4"  type="video/mp4"/>
           
            </video>
            <div class="content-overlay">
            <h1>Gather Around at Chai Corner – Where Friends and Chai Meet</h1>
            <p>Inspired by the rich tradition of chai and the joy of togetherness, we’ve crafted a space where you can unwind, share stories, and enjoy the simple pleasure of tea with friends. </p>
            <button onClick={handlenavigate2} style={{width:"180px"}}>Discover More</button>
        </div>
      </div>
      <section class="reviews-section">
    <h2 style={{marginTop:"80px",fontSize:"40px",color:"black"}}>What People Are Saying About Chai Corner</h2>

    <div class="review">
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Rahul's photo" class="review-img"/>
        <div class="review-content">
            <p class="review-text">"Chai Corner is my go-to place for unwinding after a long day. The chai is just perfect, and the atmosphere makes it even better!"</p>
            <p class="review-author">– Rahul S.</p>
        </div>
    </div>
    
    <div class="review">
        <img src="https://images.pexels.com/photos/2896424/pexels-photo-2896424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Aditi's photo" class="review-img"/>
        <div class="review-content">
            <p class="review-text">"I’ve never felt more at home while enjoying chai. The cozy environment and friendly staff make Chai Corner truly special."</p>
            <p class="review-author">– Aditi K.</p>
        </div>
    </div>
    
    <div class="review">
        <img src="https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Vikram's photo" class="review-img"/>
        <div class="review-content">
            <p class="review-text">"The best chai experience I’ve ever had! It’s like the perfect blend of tradition and flavor in every cup."</p>
            <p class="review-author">– Vikram M.</p>
        </div>
    </div>
    
    <div class="review">
        <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Neha's photo" class="review-img"/>
        <div class="review-content">
            <p class="review-text">"Chai Corner is where I go when I want to relax with friends. The chai selection is amazing, and the vibe is unbeatable."</p>
            <p class="review-author">– Neha P.</p>
        </div>
    </div>
</section>
<footer class="site-footer">
    <p>&copy; 2024 Nithyashree CS. All Rights Reserved.</p>
</footer>



    </>
    </motion.div>
  );
};

export default Home;
