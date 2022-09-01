import React from 'react';

type Props = {
    img: string
    name: string
}

const LandingResult = ({ img, name }: Props) => {
    return (
        <div className="result">
            <img src={img} alt="" className="result__img" />
            <div className="result__name">{name}</div>
            <div className="result__more">
                <a href="/">
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default LandingResult;
