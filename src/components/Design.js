import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import sanityClient from "../client";
import { motion } from "framer-motion";
import "./Design.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Design = () => {
    const [designData, setDesignData] = useState(null);


    useEffect(() => {
        AOS.init({
            delay: 200
        });
        AOS.refresh();
    }, []);


    useEffect(() => {
        document.title = "Rui - Design Projects";
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "DesignProject"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            projectImage{
            asset->{
                _id,
                url
            },
            alt
        }
        }`)
            .then(data => setDesignData(data))
            .catch(console.error);
    }, []);

    if (!designData) return (
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

            <section className="category-page area-padding">
                <div className="container">
                    <div className="row">
                        {designData && designData.map(design => (
                            <div key={design.projectImage.asset._id} data-aos="fade-up" className="col-md-6 col-lg-4">
                                <div className="single-category">
                                    <a className="d-block" href={design.link} target="_blank"
                                        rel="noopener noreferrer">
                                        <div className="thumb">
                                            <img className="img-fluid" src={design.projectImage.asset.url} alt={design.alt} />
                                        </div>
                                        <div className="short_details">
                                            <h4>{design.title}
                                            </h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Design;
