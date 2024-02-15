import  React from 'react';
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero from '../Assets/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-icon">
                        <p>NEW</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-lastest-btn">
                    <div>Lastest Collections</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero} alt="" />
            </div>
        </div>
    );
}

export default Hero;