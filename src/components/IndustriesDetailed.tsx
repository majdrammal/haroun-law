import React from 'react';
import Industry from './ui/Industry';
import shipping from '../assets/shipping.jpeg'
import logistics from '../assets/logistics.jpeg'
import insurance from '../assets/insurance.jpg'
import oilGas from '../assets/oil and gas.jpeg'
import finance from '../assets/finance.jpeg'
import construction from '../assets/construction.jpeg'
import realEstate from '../assets/real estate.jpeg'
import pharmaceuticals from '../assets/pharmaceuticals.jpeg'

const IndustriesDetailed = () => {
    return (
        <div id="industries">
            <div className="industries__container">
                <h2 className="industries__title">Here are our <span className="gold">Industries</span></h2>
                <p className="industries__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, pariatur.</p>
                <div className="industry__container">
                    <Industry img={shipping} title="Shipping" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                    <Industry img={logistics} title="Logistics" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                    <Industry img={insurance} title="Insurance" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                    <Industry img={oilGas} title="Oil &amp; Gas" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                    <Industry img={finance} title="Banking &amp; Finance" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                    <Industry img={construction} title="Construction" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                    <Industry img={realEstate} title="Real Estate" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                    <Industry img={pharmaceuticals} title="Pharmaceuticals" para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, debitis inventore aperiam voluptatibus neque fuga magni architecto voluptatem. Dignissimos, ex!"/>
                </div>
            </div>
        </div>
    );
}

export default IndustriesDetailed;
