import React from 'react';
import {coursesCard} from "../../dummyData";

const CourseCard = () => {
    return (
        <>
          <section className="courseCard">
              <div className="container grid2">
                    {coursesCard.map((val)=>{
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
                                   <i class="ri-star-s-line"></i>
                                   <i class="ri-star-s-line"></i>
                                   <i class="ri-star-s-line"></i>
                                   <i class="ri-star-s-line"></i>
                                   <i class="ri-star-s-line"></i>
                                   <label htmlFor="">(5.0)</label>
                                   </div>
                                   <div className="detalis">
                                       {/* //this beacuse we are featch the nested api */}
                                       {val.courTeacher.map((detalis)=>(
                                           <div className="box">
                                               <div className="dimg">
                                                   <img src={} alt="" />
                                               </div>
                                           </div>
                                       ))}
                                   </div>
                               </div>
                            </div> 
                        </div>
)
})}
              </div>
            </section>  
        </>
    );
};

export default CourseCard;