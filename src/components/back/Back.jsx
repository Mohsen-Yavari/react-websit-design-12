import React from 'react';
import { useLocation } from "react-router-dom";

const Back = ({title}) => {
    const location = useLocation();
    return (
        <div>
            <section className="back">
                <h2>خانه / {location.pathname.split("/")[1]}</h2>
                <h1>{title}</h1>
            </section>
        </div>
    );
};

export default Back;