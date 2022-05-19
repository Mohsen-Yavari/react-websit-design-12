import React,{useState} from 'react';
import Head from './Head';
import "./header.scss";

import {Link} from 'react-router-dom';

const Header = () => {
const [click,setClick] = useState(false);

    return (
        <>
           <Head /> 
           <header>
               <nav className="d-flex justify-content-between">
                    <ul className={click ? "mobile-nav" : "d-flex justify-content-between"} onClick={()=>setClick(false)}>
                        <li><Link to="/">خانه</Link></li>
                        <li><Link to="/courses">دوره ها</Link></li>
                        <li><Link to="/about">درباره ما</Link></li>
                        <li><Link to="/team">تیم ما</Link></li>
                        <li><Link to="/journal"> مجله</Link></li>
                        <li><Link to="/contact"> مخاطب</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">شروع</div>
                    </div>
                    <button className="toggle" onClick={() => setClick(!click)}>
                        {click ? <i class="ri-close-line"></i> :<i class="ri-barcode-line"></i>}
                    </button>
               </nav>
           </header>
        </>
    );
};

export default Header;