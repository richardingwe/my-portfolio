import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);

}

const About = () => {
    const [author, setAuthor] = useState(null);


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        document.title = "Rui - About";
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then(data => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return (
        <div>
            <div className="preloader-area">
                <div className="loader-box">
                    <div className="loader"></div>
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
                                About Me.
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home.</Link>
                                    <Link to="/about">About.</Link>
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {author &&
                <section className="about-area section-gap">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <motion.div
                                initial={{ y: "10vh", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, delay: 1.6 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="col-lg-6 about-left">
                                <img className="img-fluid" src={urlFor(author.authorImage).url()} alt="Richard Ingwe" />
                            </motion.div>
                            <motion.div
                                initial={{ y: "10vh", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, delay: 2 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="col-lg-5 col-md-12 about-right">
                                <div className="section-title text-white">
                                    <h2>about myself.</h2>
                                </div>
                                <div className="mb-50 wow fadeIn text-white" data-wow-duration=".8s">
                                    <div data-aos="fade-up" data-aos-delay="300">
                                        <BlockContent blocks={author.bio} projectId="y0xdnwwh" dataset="production" />
                                    </div>
                                    <a data-aos="fade-up" data-aos-delay="300"
                                        href="mailto:ruitech00@gmail.com" className="primary-btn white" data-text="Hire Me.">
                                        <span>H</span>
                                        <span>i</span>
                                        <span>r</span>
                                        <span>e</span>
                                        <span style={{ marginLeft: "5px" }}></span>
                                        <span>M</span>
                                        <span>e</span>
                                        <span>.</span>
                                    </a>
                                    <a data-aos="fade-up" data-aos-delay="300"
                                        href="/" className="primary-btn" data-text="Resume.">
                                        <span>R</span>
                                        <span>e</span>
                                        <span>s</span>
                                        <span>u</span>
                                        <span>m</span>
                                        <span>e</span>
                                        <span>.</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            }

            <section className="our-team-area section-padding-80-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-white text-center wow fadeInUp" data-wow-delay="100ms">
                                <h2>Stack And Tools.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="100ms">
                                <div className="member-thumb">
                                    <img src="img/bg-img/19.jpg" alt="" />
                                </div>
                                <h5>Andrew Dean</h5>
                                <span>Photographer</span>
                                <div className="member-social-info">
                                    <a href="/"><i className="ti-facebook"></i></a>
                                    <a href="/"><i className="ti-twitter-alt"></i></a>
                                    <a href="/"><i className="ti-linkedin"></i></a>
                                    <a href="/"><i className="ti-pinterest"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="300ms">
                                <div className="member-thumb">
                                    <img src="img/bg-img/20.jpg" alt="" />
                                </div>
                                <h5>Tommy Kim</h5>
                                <span>Photographer</span>
                                <div className="member-social-info">
                                    <a href="/"><i className="ti-facebook"></i></a>
                                    <a href="/"><i className="ti-twitter-alt"></i></a>
                                    <a href="/"><i className="ti-linkedin"></i></a>
                                    <a href="/"><i className="ti-pinterest"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="500ms">
                                <div className="member-thumb">
                                    <img src="img/bg-img/21.jpg" alt="" />
                                </div>
                                <h5>Max McCormick</h5>
                                <span>Photographer</span>
                                <div className="member-social-info">
                                    <a href="/"><i className="ti-facebook"></i></a>
                                    <a href="/"><i className="ti-twitter-alt"></i></a>
                                    <a href="/"><i className="ti-linkedin"></i></a>
                                    <a href="/"><i className="ti-pinterest"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src="img/bg-img/22.jpg" alt="" />
                                </div>
                                <h5>Robert Ward</h5>
                                <span>Photographer</span>
                                <div className="member-social-info">
                                    <a href="/"><i className="ti-facebook"></i></a>
                                    <a href="/"><i className="ti-twitter-alt"></i></a>
                                    <a href="/"><i className="ti-linkedin"></i></a>
                                    <a href="/"><i className="ti-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
