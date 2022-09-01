import React from 'react';
import LandingHighlight from './ui/LandingHighlight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <div className="highlight__wrapper">
                    <LandingHighlight img={["fas", "user-group"]} title='Unmatched Personal Attention'para="We do not believe in 'fast food' legal services. Our boutique size allows us to keep overhead low and provide our clients with a level of service large overstaffed firms simply can't match."/>
                    <LandingHighlight img={["fas", "solid fa-medal"]} title='Unmatched Personal Attention'para="At Haroun Law Firm, we return all client communications within 24 hours - day or night, weekday or weekend. All clients are given individualized access to our client portal where they can communicate securely with their attorney and receive any updates on their matter."/>
                    <LandingHighlight img={["fas", "solid fa-tv"]} title='Unmatched Personal Attention'para="We utilize today's best software and high-resolution scanners to run a 99% paperless office. What does that mean for you? Electronic copies of your documents whenever you need them and no more getting billed for your attorney searching their cluttered office."/>
                    <LandingHighlight img={["fas", "solid fa-wallet"]} title='Unmatched Personal Attention'para="Dealing with legal issues involves a lot of uncertainty...your attorney's billing practices shouldn't. At Haroun Law Firm we offer many flat-rate services and reasonable hourly rates that provide clarity to your legal expenses. We prefer to surprise you with our exceptional legal work, not bills."/>
                </div>
            </div>
        </div>
    );
}

export default LandingHighlights;
