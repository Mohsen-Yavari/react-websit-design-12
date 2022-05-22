import React from 'react';
import "./contact.scss";
import Back from "../../components/back/Back";

const Contact = () => {
    
    return (
        <>
            <Back title="مخاطبین ما" />
            <section className="contact padding">
                <div className="container shadow flexSB ">
               
                   
                    <div className="right row">
                        <h1>مخاطب ما</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگ</p>

                        <div className="items grid2 padding">
                            <div className="box">
                                <h4>ادرس:</h4>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگ</p>

                            </div>
                            <div className="box">
                               
                                <h4>ایمیل:</h4>
                                <p>infi@gmail.com</p>
                                </div>
                                <div className="box">
                                    <h4>شماره تماس</h4>
                                    <p>+98 123 456 789</p>
                                </div>
                                </div>
                                <form action="">
                                <div className="flexSB">
                                    <input type="text" placeholder='نام' className="mx-2" />
                                    <input type="email" placeholder='ایمیل' />
                                </div>
                                <input type="email" placeholder='موضوع' />
                                <textarea cols="30" rows="3">
                                    تایپ کنید ...
                                </textarea>
                                <button className="outline-btn mt-3">
                                    ارسای پیام
                                </button>
                        </form>
                        <h3>دنبال کردن ما در شبکه های اجتماعی</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM TELEGRSM</span>

                    </div>
                   
                </div>
            </section>
        </>
    );
};

export default Contact;

