import React from 'react';
import LandingResult from './ui/LandingResult';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shipping from '../assets/shipping.jpeg'
import logistics from '../assets/logistics.jpeg'
import insurance from '../assets/insurance.jpg'
import oilGas from '../assets/oil and gas.jpeg'
import finance from '../assets/finance.jpeg'
import construction from '../assets/construction.jpeg'
import realEstate from '../assets/real estate.jpeg'
import pharmaceuticals from '../assets/pharmaceuticals.jpeg'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const LandingResults = () => {
    return (
        <div id="results">
            <div className="results__container">
                <h2 className="results__title">Our Areas of <span className="gold">Practice</span></h2>
                <h3 className="results__sub-title">Budget-Conscious Results-Driven Lawfirm</h3>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
                    <div className="result__wrapper">
                        <LandingResult img={shipping} name={'Shipping'}/>
                        <LandingResult img={logistics} name={'Logistics'}/>
                        <LandingResult img={insurance} name={'Insurance'}/>
                        <LandingResult img={oilGas} name={'Oil & Gas'}/>
                        <LandingResult img={finance} name={'Banking & Finance'}/>
                        <LandingResult img={construction} name={'Construction'}/>
                        <LandingResult img={realEstate} name={'Real Estate'}/>
                        <LandingResult img={pharmaceuticals} name={'Pharmaceuticals'}/>
                        {/* <LandingResult img={<FontAwesomeIcon icon="fa-solid fa-briefcase" className="result__img"/>} name={'Telecommunication'}/> */}
                    </div>
                </AnimationOnScroll>
            </div>
            <div className="results__bottom">
                <p className="results__bottom--text">Got a legal question? Get in touch today!</p>
                <button className="results__bottom--btn">
                    Contact Us Now
                    <div className="btn__arrow"> {'>'}</div>
                </button>
            </div>
        </div>
        // {<FontAwesomeIcon icon="fa-solid fa-briefcase" className="result__img"/>}
        // {<FontAwesomeIcon icon="fa-solid fa-building" className="result__img"/>}
        // {<FontAwesomeIcon icon="fa-solid fa-globe" className="result__img"/>}
        // {<FontAwesomeIcon icon="fa-solid fa-briefcase" className="result__img"/>}
        // {<FontAwesomeIcon icon="fa-solid fa-user-tie" className="result__img"/>}
        // {<FontAwesomeIcon icon="fa-solid fa-briefcase" className="result__img"/>}
        // {<FontAwesomeIcon icon="fa-solid fa-briefcase" className="result__img"/>}
        // {<FontAwesomeIcon icon="fa-solid fa-briefcase" className="result__img"/>}
    );
}

export default LandingResults;
