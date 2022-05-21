import React from 'react';
import PriceCard from "../../pages/pricing/PriceCard";
import Title from "../title/Title";

const Hprice = () => {
    return (
        <>
             <section className="hprice padding">
             <Title subtitle="قیمت های امروز" title=" تخفیفات ویژه " />

                <div className="price container grid2">
                    <PriceCard />
                </div>
            </section>
        </>
    );
};

export default Hprice;