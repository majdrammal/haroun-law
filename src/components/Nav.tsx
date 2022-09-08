import React from 'react';
import Logo from '../assets/logo.png'
import bars from '../assets/bars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
    return (
        <div className="nav__container">
            <nav>
                <div className="nav__upper">
                    <a className="nav__logo--wrapper" href="/">
                        <img className="nav__logo" src={ Logo } alt="" />
                    </a>
                    <div className="nav__upper--right">
                        <a className="social__link--wrapper">                        
                            <FontAwesomeIcon icon={["fab", "square-facebook"]} className="social__link"/>
                        </a>
                        <a className="social__link--wrapper">                        
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="social__link"/>
                        </a>
                        <a className="social__link--wrapper">                        
                            <img src={bars} alt="" className="social__link" />
                        </a>
                    </div>
                </div>
                <div className="nav__lower">
                    <ul className="nav__links">
                        <a href="/" className="nav__link">Home</a>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <a href="/about" className="nav__link">About the Firm</a>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <a href="/industries" className="nav__link">Industries</a>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <a href="#highlights" className="nav__link">Highlights</a>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <a className="nav__link">Contact Us</a>
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <a href="#testimonials" className="nav__link">Testimonials</a>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
