import React from 'react';
import Hero from './Hero';
import AboutCard from '../../pages/about/AboutCard';
import HAboyt from './HAboyt';

import "./home.scss";

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutCard />
            <HAboyt />
        </div>
    );
};

export default Home;