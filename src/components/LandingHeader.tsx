import React from 'react';
import video from '../assets/video.mp4'

const LandingHeader = () => {
    return (
        <header>
            <video muted autoPlay className="header__img">
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="header__text">
                <h1 className="header__title--upper">
                    70 Years
                </h1>       
                <h2 className="header__title--middle">of dedication</h2>
                <h2 className="header__title--lower">and service</h2> 
            </div>
            <button className="contact__btn">
                Contact Us Now
                <div className="btn__arrow"> {'>'}</div>
            </button>
        </header>
    );
}

export default LandingHeader;
