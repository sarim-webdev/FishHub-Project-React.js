import React from 'react'
import aboutImage from "../assets/about-image.png"

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-text'>
            <h2>About FishHub</h2>
            <p>At FishHub, we believe that fresh seafood should be accessible to everyone. 
            Our mission is to deliver ocean-fresh fish and premium seafood directly to your doorstep with guaranteed quality, hygiene, and speed.
            We partner with trusted local fishermen and verified suppliers to source the freshest catch every day. From salmon and tuna to pomfret and prawns, every product is carefully cleaned, packed, and handled under strict safety standards to ensure you receive only the best.
            Our commitment goes beyond just selling fish — we focus on maintaining freshness, nutrition, and taste at every step of the process. With temperature-controlled packaging and quick delivery services, we make sure your seafood reaches you as fresh as it was at the shore.
            FishHub is not just a seafood store — it’s a promise of freshness, trust, and convenience. With easy online ordering, secure payments, and fast delivery, we make buying seafood simple and stress-free.
            Whether you’re cooking for your family, hosting guests, or running a restaurant, FishHub is here to bring the true taste of the ocean straight to your kitchen — fresh, fast, and reliable every single day.</p>
            <button>Learn More</button>
        </div>
        <div className='about-image'>
            <img src={aboutImage} alt="about-image" />
        </div>
    </div>
  )
}

export default About