import React from 'react';
import Hero from './Hero';
import AboutCard from '../../pages/about/AboutCard';
import HAboyt from './HAboyt';
import Test from '../../pages/testiMonial/Test';

import "./home.scss";

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutCard />
            <HAboyt />
            <Test />
        </div>
    );
};

export default Home;