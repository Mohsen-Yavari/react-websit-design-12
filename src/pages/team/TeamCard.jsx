import React from 'react';
import {team} from "../../dummyData";
import "./Team.scss";

const TeamCard = () => {
    return (
        <>
            {team.map((val)=>(
              
                <div className="items1 shadow ">
                    <div className="img ">
                        <img src={val.cover} alt="" />
                        <div className="overly">
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-instagram-fill"></i>
                        <i class="ri-twitter-fill"></i>
                        <i class="ri-telegram-fill"></i>                        </div>
                    </div>
                    <div className="details">
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                </div>
             
            ))}
        </>
    );
};

export default TeamCard;