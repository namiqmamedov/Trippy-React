import React from 'react'
import heroImage from '../../assets/images/hero-image.jpg'
import '../../styles/home.css'
const Home = () => {
    return (
         <div className='hero-section' >
            <img src={heroImage} alt="hero image" />
            <div className='hero-text'>
                <h1>Your Journey Your Story</h1>
                <h5>Choose Your Favourite Destination</h5>
                <div className="travel-btn">
                    <a href="#" className='btn btn-main'>
                        Travel Plan
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home