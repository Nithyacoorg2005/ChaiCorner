import React from "react";
import "./Process.css";
import { motion } from "framer-motion";

const Process = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.8 }}
  >
    <>
      <div className="herbal-tea-container">
        <h1 style={{marginTop:"100px",fontSize:"42px"}}>Crafting the Perfect Herbal Brew at Chai Corner</h1>
        <p>Follow these steps to brew a perfect cup of herbal tea.</p>

        <div className="step">
          <h2 style={{marginTop:'35px',fontSize:"30px"}}>Step 1:Gather Ingredients</h2>
          <img style={{width:"auto",height:"450px",marginTop:"30px"}}
            src="https://images.pexels.com/photos/8329259/pexels-photo-8329259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Herbs"
            className="animate-zoom"
          />
          <p style={{lineHeight:"30px",fontSize:"18px",padding:"50px"}}>
             At Chai Corner, we believe in
            crafting every cup with the freshest ingredients nature has to
            offer. Start by hand-picking   fresh mint,   basil  , and
              lemongrass  , each selected for its unique, refreshing qualities.
            Mint brings a cool, invigorating aroma that elevates the senses.
            Basil, with its subtle sweetness, adds a touch of calm to the mix.
            And lemongrass offers a citrusy, tangy punch that refreshes the
            soul. These herbs, when blended, create a symphony of flavors that
            soothe your body and mind. At   Chai Corner  , we ensure every sip is
            an experience. Add these ingredients to your brew, and let the magic
            of nature unfold in your cup.    This ties in your brand while
            highlighting the qualities of each ingredient for your herbal tea
            process. Would you like to refine this further?
          </p>
        </div>

    
        <div className="step">
          <h2 style={{marginTop:'35px',fontSize:"30px"}}>Step 2: Boil Water</h2>
          <img style={{width:"auto",height:"450px",marginTop:"30px"}}
            src="https://images.pexels.com/photos/10432389/pexels-photo-10432389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Boiling Water"
            className="animate-steam"
          />
          <p style={{lineHeight:"30px",fontSize:"18px",padding:"50px"}}>
            Here’s an elaboration of the sentence using the   Chai Corner   brand
            in 10 lines:    At   Chai Corner  , we understand that the perfect
            cup of tea begins with the purest water. Bring water to a gentle
            boil, allowing it to reach the ideal temperature to unlock the rich
            essence of the herbs. As the water bubbles, it prepares to draw out
            the delicate oils and flavors from the   mint  ,   basil  , and
              lemongrass  . The heat releases the refreshing coolness of mint,
            the subtle sweetness of basil, and the citrusy zest of lemongrass,
            creating a harmonious infusion. At   Chai Corner  , this step is key
            to crafting a tea that awakens your senses and nourishes your soul.
               This highlights the process and ties it into your brand’s focus
            on quality and flavor. Let me know if you need more changes!
          </p>
        </div>

        <div className="step">
          <h2 style={{marginTop:'35px',fontSize:"30px"}}>Step 3: Add the Herbs</h2>
          <img style={{width:"auto",height:"450px",marginTop:"30px"}}
            src="https://images.pexels.com/photos/6271339/pexels-photo-6271339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Herbs in Water"
            className="animate-drop"
          />
          <p style={{lineHeight:"30px",fontSize:"18px",padding:"50px"}}>
            At Chai Corner, the magic truly begins when you add the   fresh
            herbs   to the boiling water. As the   mint  ,   basil  , and
              lemongrass   touch the water, they release their vibrant flavors
            and aromatic oils, creating a soothing symphony. Let these herbs
            steep for 5 minutes, allowing the water to absorb their essence.
            During this time, the mint infuses a cooling freshness, the
              basil   adds a gentle sweetness, and the lemongrass lends a
            bright, citrusy note. This patient steeping process is key to a
            perfect cup of tea, where every sip captures the balance of nature's
            best ingredients. At   Chai Corner  , we believe in savoring this
            ritual for the ultimate tea experience. This ties in the patience
            and quality associated with the   Chai Corner   brand. Let me know if
            you’d like more adjustments!
          </p>
        </div>

        <div className="step">
          <h2 style={{marginTop:'35px',fontSize:"30px"}}>Step 4: Add Honey or Lemon (Optional)</h2>
          <img style={{width:"auto",height:"450px",marginTop:"30px"}}
            src="https://images.pexels.com/photos/1872900/pexels-photo-1872900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Honey and Lemon"
            className="animate-glow"
          />
          <p style={{lineHeight:"30px",fontSize:"18px",padding:"50px"}}>
            Here’s an expanded version of the sentence with   Chai Corner  
            branding:    At   Chai Corner  , we believe in crafting tea that’s as
            unique as your taste. After steeping the herbs, you can elevate your
            cup by adding   honey  ,   lemon  , or   ginger   for that perfect
            balance of flavor and sweetness. A drizzle of   honey   adds a rich,
            natural sweetness that complements the herbal blend.   Lemon  
            brings a zesty freshness, enhancing the bright notes of lemongrass.
            And for a warming kick, a hint of   ginger   adds spice and depth,
            turning your tea into a cozy, invigorating experience. At   Chai
            Corner  , every cup is a chance to customize your brew, making each
            sip a delightful journey of flavors.    This ties the customization
            and richness of flavors into your brand’s message. Let me know if
            you need further refinement!
          </p>
        </div>

        <div className="step">
          <h2 style={{marginTop:'35px',fontSize:"30px"}}>Step 5: Pour and Enjoy</h2>
          <img style={{width:"auto",height:"450px",marginTop:"30px"}}
            src="https://images.pexels.com/photos/3867002/pexels-photo-3867002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Pouring Tea"
            className="animate-pour"
          />
          <p style={{lineHeight:"30px",fontSize:"18px",padding:"50px"}}>
            Here’s an expanded version of the sentence with   Chai Corner  
            branding:    At   Chai Corner  , the final step in your tea-making
            ritual is pouring your perfectly steeped herbal tea into a cup. As
            the warm, aromatic brew fills your cup, the soothing scents of
              mint  ,   basil  , and   lemongrass   rise, inviting you to take a
            moment for yourself. This is where the magic truly unfolds—each sip
            offers a wave of calm and refreshment, washing over you with natural
            flavors. Whether you’re starting your day or winding down,   Chai
            Corner   delivers more than just tea; it’s a relaxing, rejuvenating
            experience crafted with care, one cup at a time.    This emphasizes
            the calm and relaxation your brand promotes. Would you like to
            adjust anything further?
          </p>
        </div>
        </div>
      <footer class="site-footer">
    <p>&copy; 2024 Nithyashree CS. All Rights Reserved.</p>
</footer>

    </>
    </motion.div>
  );
};

export default Process;
