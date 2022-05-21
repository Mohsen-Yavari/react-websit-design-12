import React from 'react';
import BlogCard from "./BlogCard";
import "./blog.scss";

import Back from "../../components/back/Back";

const Blog = () => {
    return (
        <>
            <Back title="نمونه پست ها" />
            <section className="blog padding">
                <div className="container grid2">
                <BlogCard />

                </div>
            </section>
        </>
    );
};

export default Blog;