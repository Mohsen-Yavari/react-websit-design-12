import React from 'react';
import Head from './Head';
import "./header.scss";

import {Link} from 'react-router-dom';

const Header = () => {


    return (
        <>
           <Head /> 
            <nav className="navbar navbar-expand-lg navbar-light nav-color">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-6 mb-2 mb-lg-0 ">
                        <li className="nav-item"><Link className="nav-link" to="/">خانه</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/courses">دوره ها</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">درباره ما</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/team">تیم ما</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/journal"> مجله</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact"> مخاطب</Link></li>
                
                </ul>
                
                </div>
                <button type="button" class="btn btn-primary ">شروع</button>

            </div>
            </nav>

        </>
    );
};

export default Header;

 