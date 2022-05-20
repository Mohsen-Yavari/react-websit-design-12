import React from 'react';
import Title from "../../components/title/Title";

import {online} from "../../dummyData";

const OnlineCourse = () => {
    return (
        <div>
            <section className="online">
                <div className="container">
                    <Title subtitle="ازمون" title="شروع ازمون جدید" />

                    <div className="content grid3 g-lg-2">
                        {online.map((val) =>(
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt=""  />
                                    <img src={val.hoverCover} alt="" className="show" />
                                </div>
                                <h1>{val.courseName}</h1>
                            <span>{val.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OnlineCourse;