import React from 'react'
import heroImage from "../assets/hero-section-image.png"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const homeHandler = ()=> {
        navigate("/products")
    }
    return (
        <div className='home-container'>
            <div className='home-text'>
                <h1>Ocean-Fresh Premium Fish Delivered Straight to Your Doorstep</h1>
                <p>Experience premium quality seafood sourced daily from trusted fishermen.
                   From juicy salmon to fresh pomfret — we ensure hygiene-packed,
                   farm-fresh delivery so you enjoy the true taste of the ocean at home.</p>
                <button onClick={homeHandler}>Shop Fresh Fish Now</button>
            </div>
            <div className='home-hero-image'>
                <img src={heroImage} alt="hero-fish-image" />
            </div>
        </div>
    )
}

export default Home