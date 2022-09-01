import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    img: any
    title: string
    para: string
}

const LandingHighlight = ({ img, title, para}: Props) => {
    return (
        <div className="highlight">
            <FontAwesomeIcon icon={img}/>
            <div className="highlight__text">
                <h4 className="highlight__title">{title}</h4>
                <p className="highlight__para">{para}</p>
            </div>
        </div>
    );
}

export default LandingHighlight;
