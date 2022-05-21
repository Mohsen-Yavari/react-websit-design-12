import React from 'react';
import Title from '../title/Title';

import {coursesCard} from "../../dummyData";

const HAboyt = () => {
    return (
        <>
            <section className="homeAbout">
                <div className="container">
                    <Title subtitle="دیگر دوره ها" title="جستجوی انلاین دوره ها"  />
                <div className="courseCard" >
              <div className="grid2">
                    {coursesCard.slice(0,3).map((val)=>{
                        return (
                        <div className="items">
                           <div className="content flex">
                               <div className="left">
                                   <div className="img">
                                       <img src={val.cover} alt="" />
                                   </div>
                               </div>
                               <div className="text">
                                   <h1>{val.coursesName}</h1>
                                   <div className="rate">
                                   <i class="ri-star-s-fill"></i>
                                   <i class="ri-star-s-fill"></i>
                                   <i class="ri-star-s-fill"></i>
                                   <i class="ri-star-s-fill"></i>
                                   <i class="ri-star-s-fill"></i>
                                  
                                   <label htmlFor="">(5.0)</label>
                                   </div>
                                   <div className="detalis">
                                       {/* //this beacuse we are featch the nested api */}
                                       {val.courTeacher.map((detalis)=>(
                                           <>
                                           <div className="box">
                                               <div className="dimg">
                                                   <img src={detalis.dcover} alt="" style={{width:"40px"}} />
                                               </div>
                                               <div className="para">
                                                   <h4>{detalis.name}</h4>
                                               </div>
                                           </div>
                                           <span>{detalis.totalTime}</span>
                                           </>
                                       ))}
                                   </div>
                               </div>
                            </div> 
                            <div className="price">
                                <h3>{val.priceAll} / {val.pricePer}</h3>
                            </div>
                            <button className="outline-btn">ثبت نام کنید</button>
                        </div>
)
})}
              </div>
            </div>  
                </div>
            </section>
        </>
    );
};

export default HAboyt;