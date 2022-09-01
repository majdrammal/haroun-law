import React from 'react';
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import bars from '../assets/bars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <img src={Logo} alt="" className="footer__logo" />
                    <p className="footer__left--para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sit amet nesciunt aut recusandae repellat ipsa at debitis aliquam aliquid.</p>
                    <div className="footer__social--links--wrapper">
                        <figure className="footer__social--link--wrapper social__link--wrapper">                        
                            <FontAwesomeIcon icon={["fab", "square-facebook"]} className="social__link"/>
                        </figure>
                        <figure className="footer__social--link--wrapper social__link--wrapper">                        
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="social__link"/>
                        </figure>
                        <figure className="footer__social--link--wrapper social__link--wrapper">                        
                            <img src={bars} alt="" className="social__link" />
                        </figure>
                    </div>
                    <p className="copyright__text">
                        &copy; 2022 Haroun Law Firm | Created by 
                        <a href="https://www.majdrammal.com" target="_blank"> Majd Rammal</a>
                    </p>
                </div>
                <div className="footer__middle">
                    <div className="sitemap__upper">
                        <FontAwesomeIcon icon={["fas", "link"]} />
                        <h5 className="sitemap__title">Sitemap</h5>
                    </div>
                    <p className="sitemap__para">Quickly navigate our site through our sitemap below!</p>
                    <div className="sitemap__links">
                        <ul className="sitemap__links--left">
                            <a href="#" className="sitemap__link">Home</a>
                            <a href="#offer" className="sitemap__link">About</a>
                            <a href="#results" className="sitemap__link">Industries</a>
                            <a href="#highlights" className="sitemap__link">Highlights</a>
                            <a href="#map" className="sitemap__link">Location</a>
                            <a href="/" className="sitemap__link">Terms &amp; Conditions</a>
                        </ul>
                        <ul className="sitemap__links--right">
                            <a href="/" className="sitemap__link">Home</a>
                            <a href="/about" className="sitemap__link">About the Firm</a>
                            <a href="/industries" className="sitemap__link">Industries</a>
                            <a href="/highlights" className="sitemap__link">Highlights</a>
                            <a href="/contact" className="sitemap__link">Contact Us</a>
                            <a href="/privacy" className="sitemap__link">Privacy Policy</a>
                        </ul> 
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer__right--title">
                        <FontAwesomeIcon icon={["fas", "phone-volume"]} className="footer__right--img"/>
                        <h5 className="footer__right--title">Got A Question?</h5>
                    </div>
                    <form action="https://formsubmit.co/your@email.com" method="POST"className="contact__form footer__right--form" >
                        <div className="form__item">
                            <label className="form__item--label">Email</label>
                            <input type="email" name="user_email" className="input" required></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item--label">Message</label>
                            <textarea data-type="text" name="message" className="input" required></textarea>
                        </div>
                        <button className="form__btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
