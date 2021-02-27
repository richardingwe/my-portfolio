import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';
import { motion } from "framer-motion";
import "./About.css";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);

}

const About = () => {
    const [author, setAuthor] = useState(null);

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
                                About Me
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
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
                                    <h2>about myself</h2>
                                </div>
                                <div className="mb-50 wow fadeIn text-white" data-wow-duration=".8s">
                                    <motion.div
                                        initial={{ y: "10vh", opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 2.5 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-white mb-30">
                                        <BlockContent blocks={author.bio} projectId="y0xdnwwh" dataset="production" />
                                    </motion.div>
                                    <motion.a
                                        initial={{ y: "10vh", opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 2.8 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        href="mailto:ruitech00@gmail.com" className="primary-btn white" data-text="Hire Me">
                                        <span>H</span>
                                        <span>i</span>
                                        <span>r</span>
                                        <span>e</span>
                                        <span style={{ marginLeft: "5px" }}></span>
                                        <span>M</span>
                                        <span>e</span>
                                    </motion.a>
                                    <motion.a
                                        initial={{ y: "10vh", opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 2.8 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        href="/" className="primary-btn" data-text="Resume">
                                        <span>R</span>
                                        <span>e</span>
                                        <span>s</span>
                                        <span>u</span>
                                        <span>m</span>
                                        <span>e</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            }
        </main>
    );

    // return (
    //     <main className="relative bg-gray-800">
    //         {author &&
    //             <div className="p-10 lg:pt-48 container mx-auto relative">
    //                 <section className="bg-gray-900 rounded-lg shadow-2xl lg:flex p-20">
    //                     <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" />
    //                     <div className="text-lg flex flex-col justify-center">
    //                         <h1 className="cursive text-6xl text-6xl text-blue-300 mb-4">
    //                             Hello, I'm{" "}
    //                             <span className="text-gray-100">{author.name}</span>
    //                         </h1>
    //                         <div className="prose lg:prose-xl text-white">
    //                             <BlockContent blocks={author.bio} projectId="y0xdnwwh" dataset="production" />
    //                         </div>
    //                     </div>
    //                 </section>
    //             </div>
    //         }
    //         <div>
    //             <h1>Skills</h1>
    //         </div>
    //     </main>
    // );
};

export default About;
