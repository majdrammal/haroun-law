import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faStar, faClock, faPhoneVolume, faUserGroup, faMedal, faTv, faWallet, faLink, faBriefcase, faBuilding, faGlobe, faUserTie, faScaleBalanced, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faSquareFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab, faSquareFacebook, faLinkedinIn, faStar, faClock, faPhoneVolume, faUserGroup, faMedal, faTv, faWallet, faLink, faBriefcase, faBuilding, faGlobe, faUserTie, faScaleBalanced, faLocationDot, faEnvelope) 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
