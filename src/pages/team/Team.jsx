import React from 'react';
import Back from "../../components/back/Back";
import TeamCard from "./TeamCard";
import "./Team.scss";

const Team = () => {
    return (
        <>
            <Back title="تیم ما" />
            <section className="team padding">
                <div className="container grid2">
                    <TeamCard />
                </div>
            </section>
        </>
    );
};

export default Team;