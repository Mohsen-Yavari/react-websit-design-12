import React from 'react';
import Hero from './Hero';
import AboutCard from '../../pages/about/AboutCard';

import "./home.scss";

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutCard />
        </div>
    );
};

export default Home;