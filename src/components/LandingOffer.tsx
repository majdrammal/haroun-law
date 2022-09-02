import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingOffer = () => {
    return (
        <section id="offer">
            <div className="black__cover"></div>
            <div className="offer__attorneys">
                <figure className="offer__attorney">
                    <img src="https://i0.wp.com/drmohamedkarbal.com/wp-content/uploads/2020/08/1u7a0201-1.jpg?resize=750%2C1125&ssl=1" alt="" />
                    <div className="offer__attorney--text">
                        <div className="offer__attorney--name">
                            Omar Haroun
                        </div>
                        <div className="offer__attorney--position">
                            Managing Partner
                        </div>
                    </div>
                    <div className="attorney__profile">
                        <a href="/">
                            View Lawyer Profile
                        </a>
                    </div>
                </figure>
            </div>
            {/* <div className="offer__consultation"> */}
                {/* <div className="consultation offer__consultation--wrapper">
                    <div className="consultation__upper">
                            <FontAwesomeIcon icon="fa-solid fa-phone-volume" />
                            <h4 className="consultation__title">
                                646-590-0571
                            </h4>
                        </div> 
                        <p className="consultation__sub-title">
                            Call Us For A Free Consultation
                        </p>
                </div> */}
                {/* <button>
                    Free Case Evaluation
                    <div className="btn__arrow"> ></div>
                </button>
            </div> */}
            <div className="offer__bottom">
                <h5 className="offer__bottom--text">
                    We offer&nbsp;<span className="gold"> Lawyers &#38; Consultants</span>
                </h5>
            </div>
        </section>
    );
}

export default LandingOffer;
