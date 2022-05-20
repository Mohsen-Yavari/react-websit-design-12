import React from 'react';
import Title from '../../components/title/Title';
import Aboutimg from "../../images/about.webp";
import Awrapper from "./Awrapper";

import "./about.scss";

//data
import {homeAbout} from "../../dummyData";
 
const AboutCard = () => {
    return (
        <>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="right row">
                        <img src={Aboutimg} alt="" />
                    </div>
                    <div className="left row">
                        <Title subtitle="اموزش همه چیز" title="اموزش انلاین" />
                        <div className="items">{homeAbout.map((val)=>(
                            <div className="item flexSb">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <h2>{val.desc}</h2>
                                    
                                </div>

                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
            <Awrapper />
        </>
    );
};

export default AboutCard;