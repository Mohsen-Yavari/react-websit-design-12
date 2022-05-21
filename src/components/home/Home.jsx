import React from 'react';
import Hero from './Hero';
import AboutCard from '../../pages/about/AboutCard';
import HAboyt from './HAboyt';
import Test from '../../pages/testiMonial/Test';
import Hblog from '../../components/home/Hblog';
import Hprice from './Hprice';

import "./home.scss";

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutCard />
            <HAboyt />
            <Test />
            <Hblog />
            <Hprice />
        </div>
    );
};

export default Home;