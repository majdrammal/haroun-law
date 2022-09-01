import React from 'react';
import LandingHeader from '../components/LandingHeader';
import LandingHighlights from '../components/LandingHighlights';
import LandingOffer from '../components/LandingOffer';
import LandingResults from '../components/LandingResults';
import Map from '../components/Map';

const LandingPage = () => {
    return (
        <>
        <LandingHeader />
        <LandingOffer />
        <LandingResults />
        <LandingHighlights />
        <iframe height="450" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.948164238838!2d35.7733946155475!3d35.50555994719303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4edd7d8c3cf85b4!2zMzXCsDMwJzIwLjAiTiAzNcKwNDYnMzIuMSJF!5e0!3m2!1sen!2suk!4v1659303650640!5m2!1sen!2suk"></iframe> 
        <Map />
        </>
    );
}

export default LandingPage;
