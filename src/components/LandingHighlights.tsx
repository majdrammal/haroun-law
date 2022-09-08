import React from 'react';
import LandingHighlight from './ui/LandingHighlight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const LandingHighlights = () => {
    return (
        <div id="highlights">
            <div className="black__cover" ></div>
            <div className="highlights__container">
                <div className="highlights__img--wrapper">
                    <hr className="highlights__hr" />
                    <FontAwesomeIcon icon={["fas", "scale-balanced"]} className="highlights__img"/>
                    <hr className="highlights__hr" />
                </div>
                <h2 className="highlights__title"><span className="gold">Haroun Law Firm </span>Highlights</h2>
                <p className="highlights__para">
                    Haroun Law Firm was established on the idea that legal services should be convenient, modern and affordable. State-of-the-art practice technology allows us to serve our clients efficiently. We put our clients first and achieve tremendous results. Experience how law can be done better.
                </p>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
                    <div className="highlight__wrapper">
                        <LandingHighlight img={["fas", "user-group"]} title='Client Comes First'para="We aim at providing world-class services to our clients. At Haroun Law Firm, the client's needs will always be front and center."/>
                        <LandingHighlight img={["fas", "wallet"]} title='Fair &amp; Transparent Pricing'para="We pride ourselves on our minimized and transparent prices that allow our clients to receive top notch legal services at an affordable price."/>
                        <LandingHighlight img={["fas", "medal"]} title='Unmatched Results'para="We stand by our promise to deliver the best outcomes for our clients regardless of the obstacles we face on the journey."/>
                        <LandingHighlight img={["fas", "tv"]} title='Availabilty &amp; Communication'para="Our clients are always able to contact us whenever they feel the need to. At Haroun Law Firm, clients will never be left in the blind."/>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    );
}

export default LandingHighlights;
