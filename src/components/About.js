import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/About.css";
import jsImg from "../images/js.jpg";
import reactImg from "../images/react.jpg";
import vueImg from "../images/vue.jpg";
import gitImg from "../images/git.jpg";
import sassImg from "../images/sass.jpg";
import nodeImg from "../images/node.jpg";
import firebaseImg from "../images/firebase.jpg";
import bsImg from "../images/bs.jpg";
import pwaImg from "../images/pwa.jpg";
import mongoImg from "../images/mongo.jpg";
import awsImg from "../images/aws.jpg";
import reduxImg from "../images/redux.jpg";
import nextImg from "../images/next.jpg";
import sanityImg from "../images/sanity.jpg";
import mysqlImg from "../images/mysql.jpg";
import aiImg from "../images/ai.jpg";
import psImg from "../images/ps.jpg";
import xdImg from "../images/xd.jpg";
import idImg from "../images/id.jpg";
import aeImg from "../images/ae.jpg";


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
                                <h2 data-aos="fade-up" data-aos-delay="200">Stack And Tools.</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="100ms">
                                <div className="member-thumb">
                                    <img src={jsImg} alt="javascript" />
                                </div>
                                <h5>Javascript</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="300ms">
                                <div className="member-thumb">
                                    <img src={reactImg} alt="react.js" />
                                </div>
                                <h5>React.js</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="300ms">
                                <div className="member-thumb">
                                    <img src={nextImg} alt="next.js" />
                                </div>
                                <h5>Next.js</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="500ms">
                                <div className="member-thumb">
                                    <img src={vueImg} alt="vue.js" />
                                </div>
                                <h5>Vue.js</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="500ms">
                                <div className="member-thumb">
                                    <img src={pwaImg} alt="pwa" />
                                </div>
                                <h5>PWA</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="500ms">
                                <div className="member-thumb">
                                    <img src={bsImg} alt="bootstrap" />
                                </div>
                                <h5>Bootstrap</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={gitImg} alt="git" />
                                </div>
                                <h5>Git</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={sassImg} alt="sass" />
                                </div>
                                <h5>Sass</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={nodeImg} alt="node.js" />
                                </div>
                                <h5>Node.js</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={mongoImg} alt="mongoDB" />
                                </div>
                                <h5>MongoDB</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={mysqlImg} alt="mysql" />
                                </div>
                                <h5>MySql</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={firebaseImg} alt="firebase" />
                                </div>
                                <h5>Firebase</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={awsImg} alt="aws" />
                                </div>
                                <h5>AWS</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={reduxImg} alt="redux" />
                                </div>
                                <h5>Redux</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={sanityImg} alt="sanity" />
                                </div>
                                <h5>Sanity</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={aiImg} alt="adobe illustrator" />
                                </div>
                                <h5>Illustrator</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={psImg} alt="adobe photoshop" />
                                </div>
                                <h5>Photoshop</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={xdImg} alt="adobe xd" />
                                </div>
                                <h5>XD</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={idImg} alt="adobe indesign" />
                                </div>
                                <h5>InDesign</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" className="col-4 col-sm-4 col-md-3 col-xl-2">
                            <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                                <div className="member-thumb">
                                    <img src={aeImg} alt="adobe after effects" />
                                </div>
                                <h5>AfterEffects</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
