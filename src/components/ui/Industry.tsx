import React from 'react';

type Props = {
    img: string
    title: string
    para: string
}

const Industry = ({ img, title, para }: Props) => {
    return (
        // <div class="industry">
        //     <figure className="industry__img--wrapper">
        //         <img src={img} alt="" className="industry__img" />
        //     </figure>
        //     <div className="industry__text">
        //         <h4 className="industry__title">
        //             {title}
        //         </h4>
        //         <p className="industry__para"> 
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id eligendi veniam fuga labore omnis quasi ipsa. Nisi, fuga minus.
        //         </p>
        //         <button className="industry__button">
        //             Read More
        //         </button>
        //     </div>
        // </div>

        <div className="industry">
            <img src={img} alt="" className="industry__img" />
            <div className="industry__title">{title}</div>
            <p className="industry__para">{para}</p>
        </div>
    );
}

export default Industry;
