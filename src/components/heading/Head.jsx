import React from 'react';
import "./header.scss";

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d-flex justify-content-between">
                    <div className="logo">
                        <h1>اکادمی</h1>
                        <span>تحصیلات انلاین</span>
                    </div>

                    <div className="social">
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-twitter-fill"></i>
                    <i class="ri-youtube-fill"></i>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Head;