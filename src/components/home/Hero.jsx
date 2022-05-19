import React from 'react';
import "./home.scss";

import Title from '../title/Title';

const Hero = () => {
    return (
        <>
        <div className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle="به اکادمی ما خوش امدید" title="بهترین تحصیلات انلاین" />
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

                    </p>
                    <div className="button">
                    <button  className="bg-info">
                        الان شروع کن<i class="ri-arrow-left-line"></i>
                    </button>
                    <button>
                          دیدن دوره ها<i class="ri-arrow-left-line"></i>
                    </button>

                    </div>
                </div>
            </div>
        </div>
        <div className="margin"></div>
        </>

    );
};

export default Hero;