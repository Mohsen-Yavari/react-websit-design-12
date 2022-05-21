import React from 'react';
import Title from "../../components/title/Title";
import "./test.scss";
// dummyData folder
import {testimonal} from "../../dummyData";

const Test = () => {
    return (
        <div className="testimonial padding">
            <div className="container">
                <Title subtitle="گواهینامه" title="دانش جویان موفق" />

                <div className="content grid2">


                    {testimonal.map((val)=>{
                        return (
                            <div className="items shadow">
                                <div className="box">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                        <i class="ri-double-quotes-l"></i>
                                    </div>
                                    <div className="name">
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    );
};

export default Test;