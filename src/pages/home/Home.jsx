import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/Hero";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Loader from "../../components/loader/Loader";
import BlogInfo from "../../pages/blogInfo/BlogInfo";
import Trial from "../../components/trial/Trial";
import Topics from "../../components/topics/Topics";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Layout>
            <HeroSection />
            <Trial/>
            <BlogPostCard />
            <Topics/>
            <BlogInfo />
            {/* <Loader /> */}
        </Layout>
    );
};

export default Home;
