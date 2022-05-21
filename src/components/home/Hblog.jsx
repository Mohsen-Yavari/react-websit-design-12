import React from 'react';
import Title from "../title/Title";

import {blog} from "../../dummyData";
const Hblog = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <Title subtitle="وبلاگ ما" title="تازه های وبلاگ" />
                    <div className="grid2">
                    {blog.map((val)=>(
               <div className="items shadow">
                   <div className="img">
                       <img src={val.cover} alt="" />
                   </div>
                   <div className="text">
                       <div className="admin flexSB">
                          <span>
                          <i class="ri-user-received-2-fill"></i> 
                          <label htmlFor="">{val.type}</label>
                            </span> 
                          <span>
                          <i class="ri-calendar-line"></i>
                          <label htmlFor="">{val.date}</label>
                            </span> 
                          <span>
                          <i class="ri-chat-1-line"></i>
                          <label htmlFor="">{val.com}</label>
                            </span> 
                       </div>
                       <h1>{val.title}</h1>
                       <p>{val.desc}</p>
                   </div>
               </div>
           ))} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hblog;