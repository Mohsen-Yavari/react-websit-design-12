import React,{useState} from 'react';
import Title from '../../components/title/Title';
import {faq} from "../../dummyData";
const Faq = () => {
    const [click,setClick] = useState(false);

    const toggle = (index) =>{
       if(click === index ){
           return setClick(null);
       }
       setClick(index);
    }
    return (
        <>
            <Title subtitle="سوالات متداول" title="سوالاتتان را از ما بپرسید" />
            <section className="faq">
                <div className="container">
                    {faq.map((val,index)=>(
                        <div className="box">
                            <button className="acordation" onClick={()=>toggle(index)} key={index}>
                                <h2>{val.title}</h2>
                                <span>{click === index ?<i class="ri-arrow-down-s-line"></i> : <i class="ri-arrow-left-s-line"></i>}</span>
                            </button>
                            {click === index ? (
                                <div className="text">
                                <p>{val.desc}</p>
                            </div>
                            ): null}
                        
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Faq;