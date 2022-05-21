import React from 'react';
import PriceCard from "./PriceCard";
import Faq from "./Faq";
import "./price.scss";
import Back from "../../components/back/Back";

const Price = () => {
    return (
        <>
            <Back title="انتخاب دوره و نقشه راه" />
            <section class="price padding">
                <div className="container grid2">
                    <PriceCard />
                </div>
            </section>
            <Faq />
        </>
    );
};

export default Price;