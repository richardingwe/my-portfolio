import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import sanityClient from "../client";
import { motion } from "framer-motion";
import img from "./1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Code.css";


const Code = () => {
    const [codeData, setCodeData] = useState(null);

    useEffect(() => {
        document.title = "Rui - Code Projects";
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "CodeProject"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            githubLink,
            technologiesUsed,
            projectImage{
            asset->{
                _id,
                url
            },
            alt
        }
        }`)
            .then(data => {
                setCodeData(data);
                console.log(data);
            })
            .catch(console.error);

    }, []);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

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
                                Code Projects
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home</Link>
                                    <Link to="/project">Projects</Link>
                                    <Link to="/project/code">Code</Link>
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="about-area section-gap">
                <div className="container">
                    {codeData && codeData.map((code, index) => (

                        <div key={index} className="row align-items-center justify-content-between">
                            <div data-aos="fade-up" data-aos-delay="200"
                                className="col-lg-6 about-left">
                                <img className="img-fluid" src={code.projectImage ? code.projectImage.asset.url : img} alt={code.alt || "hello"} />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300"
                                className="col-lg-5 col-md-12 about-right">
                                <div className="section-title text-white">
                                    <h2>{code.title}</h2>
                                </div>
                                <div className="mb-50 wow fadeIn text-white" data-wow-duration=".8s">
                                    <div className="tech-used">
                                        {code.technologiesUsed.map((tech, i) => (
                                            <div key={i} className="tech">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p>{code.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Code;
