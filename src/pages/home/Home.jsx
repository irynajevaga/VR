import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/Hero";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Loader from "../../components/loader/Loader";
import BlogInfo from "../../pages/blogInfo/BlogInfo";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout>
            <HeroSection />
            <BlogPostCard />
            <BlogInfo />
            {/* <Loader /> */}
        </Layout>
    );
};

export default Home;
