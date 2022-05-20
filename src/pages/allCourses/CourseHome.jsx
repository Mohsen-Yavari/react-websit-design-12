import React from 'react';
import Back from "../../components/back/Back";
import CourseCard from "./CourseCard";

const CourseHome = () => {
    return (
        <div>
            <Back title="جستجوی دوره ها" />
            <CourseCard />
        </div>
    );
};

export default CourseHome;