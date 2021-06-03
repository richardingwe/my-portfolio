import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import sanityClient from "../client";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Blog.css";
import LoaderTwo from './LoaderTwo';

const Post = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        document.title = "Rui - Blog";
    }, []);

    useEffect(() => {
        AOS.init({
            delay: 200
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "blog"]{
        title,
        slug,
        publishedAt,
        body,
        subtitle,
        "name": author->name,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`)
            .then((data) => setBlogData(data))
            .catch(console.error);
    }, []);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    if (!blogData) return (
        <div>
            <div className="preloader-area">
                <div className="loader-box">
                    <LoaderTwo />
                    {/* <div className="loader"></div> */}
                </div>
            </div>
        </div>
    );
    return (
        <main className="bg-gray-800 min-h-screen main">
            <section className="banner-area relative">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <motion.div
                            initial={{ y: "10vh", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 1.2 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="about-content col-lg-12">
                            <h1 className="text-white">
                                Blog
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home</Link>
                                    <Link to="/blog">Blog</Link>
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {!blogData.length && (
                <div className="no-post container text-white text-center d-flex align-items-center justify-content-center my-5" >
                    <h1>Oops!! No Blog Post Is Available For Now.</h1>
                </div>
            )}
            <section className="ftco-section text-white" data-section="blog">
                <div className="container">
                    <div className="row d-flex" >
                        {blogData && blogData.map((blog, index) => (
                            <div data-aos="fade-up" className="col-lg-4 col-md-6 col-xs-12 d-flex ftco-animate" key={blog.slug.current}>
                                <div className="blog-entry justify-content-end">
                                    <Link to={`/blog/${blog.slug.current}`} className="block-20" style={{ backgroundImage: `url(${blog.mainImage.asset.url})` }}>
                                    </Link>
                                    <div className="text mt-3 text-light float-right d-block">
                                        <div className="d-flex align-items-center pt-2 mb-4 topp">
                                            <div className="one mr-3">
                                                <span className="day">{new Date(blog.publishedAt).getDate()}</span>
                                            </div>
                                            <div className="two">
                                                <span className="yr">{new Date(blog.publishedAt).getFullYear()}</span>
                                                <span className="mos">{months[new Date(blog.publishedAt).getMonth()]}</span>
                                            </div>
                                        </div>
                                        <h3 className="heading"><Link to={`/blog/${blog.slug.current}`}>{blog.title}</Link></h3>
                                        <p>
                                            {blog.subtitle || blog.body[0].children[0].text.substr(0, 130).concat("...")}
                                        </p>
                                        <div className="d-flex align-items-center mt-4 meta">
                                            <p className="mb-0"><Link to={`/blog/${blog.slug.current}`} className="btn text-dark btn-secondary">Read More <span className="ion-ios-arrow-round-forward"></span></Link></p>
                                            <p className="ml-auto mb-0">
                                                <Link to="/about" className="mr-2">{blog.name}</Link>
                                                {/* <a href="/" class="meta-chat"><span class="icon-chat"></span> 3</a> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Post;
