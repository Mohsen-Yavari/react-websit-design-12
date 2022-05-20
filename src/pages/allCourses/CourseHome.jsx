import React from 'react';
import Back from "../../components/back/Back";
import CourseCard from "./CourseCard";
import OnlineCourse from "./OnlineCourse";
const CourseHome = () => {
    return (
        <div>
            <Back title="جستجوی دوره ها" />
            <CourseCard />
            <OnlineCourse />
        </div>
    );
};

export default CourseHome;