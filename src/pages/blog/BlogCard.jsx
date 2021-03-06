import React from 'react';
import {blog} from "../../dummyData";
import "./blog.scss";
const BlogCard = () => {
    return (
        <>
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
        </>
    );
};

export default BlogCard;