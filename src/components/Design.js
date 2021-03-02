import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Design.css";
import img from "../kevin-ku-w7ZyuGYNpRQ-unsplash.jpg";
import img2 from './1.jpg';
import img3 from './3.jpg';

const Design = () => {
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
                                Design Projects
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home</Link>
                                    <Link to="/project">Projects</Link>
                                    <Link to="/project/design">Design</Link>
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="category-page area-padding mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="single-category">
                                <div className="thumb" style={{ backgroundImage: `url(${img})` }}>
                                    {/* <img className="img-fluid" src={img} alt="" /> */}
                                </div>
                                <div className="short_details">
                                    {/* <div className="meta-top d-flex">
                                        <a href="#">shoes </a>/
                                <a href="#"> March 15, 2019</a>
                                    </div> */}
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall for rule whose toge one
                                        may heaven to dat
                                </h4>
                                    </a>
                                    {/* <div className="meta-bottom d-flex">
                                        <a href="#"><i className="ti-comment"></i>05 comment</a>
                                        <a href="#"><i className="ti-heart"></i> 0 like</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-category">
                                <div className="thumb" style={{ backgroundImage: `url(${img2})` }}>
                                    {/* <img className="img-fluid" src={img2} alt="" /> */}
                                </div>
                                <div className="short_details">
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Whose can you're together
                                        first dominion man
                                        </h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-category">
                                <div className="thumb" style={{ backgroundImage: `url(${img2})` }}>
                                    {/* <img className="img-fluid" src={img2} alt="" /> */}
                                </div>
                                <div className="short_details">
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Multiply blessed light unto
                                        green moving</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-category">
                                <div className="thumb" style={{ backgroundImage: `url(${img2})` }}>
                                    {/* <img className="img-fluid" src={img2} alt="" /> */}
                                </div>
                                <div className="short_details">
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Given moved air be a male
                                            earth called multiply</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-category">
                                <div className="thumb" style={{ backgroundImage: `url(${img})` }}>
                                    {/* <img className="img-fluid" src={img} alt="" /> */}
                                </div>
                                <div className="short_details">
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Shall for rule whose toge one
                                            may heaven to dat</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-category">
                                <div className="thumb" style={{ backgroundImage: `url(${img3})` }}>
                                    {/* <img className="img-fluid" src={img3} alt="" /> */}
                                </div>
                                <div className="short_details">
                                    <a className="d-block" href="single-blog.html">
                                        <h4>Given moved air be a male
                                            earth called multiply</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Design;
