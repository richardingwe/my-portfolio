import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import sanityClient from "../client";
import { Link } from "react-router-dom";
import "../css/Project.css";
import { motion } from "framer-motion";


const Project = () => {
    // const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        document.title = "Rui - Projects";
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
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
            // .then(data => setProjectData(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-gray-800 min-h-screen p-12 main">
            <section className="banner-area relative">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <motion.div
                            initial={{ y: "10vh", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 1.2 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="about-content col-lg-12">
                            <h1 className="text-white">
                                Projects.
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home.</Link>
                                    <Link to="/project">Projects.</Link>
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/*  design/code area start  */}
            <section className="why-choose-us-area bg-gray section-padding-80-0 clearfix">
                <div className="container">
                    <div className="row">
                        <motion.div
                            initial={{ y: "10vh", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, delay: 1.5 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="col-12">
                            <div className="section-heading text-white text-center wow fadeInUp" data-wow-delay="100ms">
                                <h2>Design Or Code??</h2>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ y: "10vh", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, delay: 1.8 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="row">
                        <div className="col-md-6">
                            <Link to="/project/design">
                                <div className="why-choose-us-content text-center mb-80 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="chosse-us-icon">
                                        <i className="fas fa-bezier-curve" aria-hidden="true"></i>
                                    </div>
                                    <motion.h1 initial={{ y: "10vh", opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 2 }}
                                        animate={{ y: 0, opacity: 1 }}>
                                        Design.
                                    </motion.h1 >
                                    <motion.div
                                        initial={{ y: "10vh", opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 2.3 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="action about-area">
                                        <div className="primary-btn whitee" data-text="See Design Projects.">
                                            <span>S</span>
                                            <span>e</span>
                                            <span>e</span>
                                            <span style={{ marginLeft: "5px" }}></span>
                                            <span>D</span>
                                            <span>e</span>
                                            <span>s</span>
                                            <span>i</span>
                                            <span>g</span>
                                            <span>n</span>
                                            <span style={{ marginLeft: "5px" }}></span>
                                            <span>P</span>
                                            <span>r</span>
                                            <span>o</span>
                                            <span>j</span>
                                            <span>e</span>
                                            <span>c</span>
                                            <span>t</span>
                                            <span>s</span>
                                            <span>.</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </Link>
                        </div>


                        <div className="col-md-6">
                            <Link to="/project/code">
                                <div className="why-choose-us-content text-center mb-80 wow fadeInUp" data-wow-delay="500ms">
                                    <div className="chosse-us-icon">
                                        <i className="fas fa-code" aria-hidden="true"></i>
                                    </div>
                                    <motion.h1 initial={{ y: "10vh", opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 2 }}
                                        animate={{ y: 0, opacity: 1 }}>
                                        Code
                                </motion.h1 >
                                    <motion.div
                                        initial={{ y: "10vh", opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 2.3 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="action about-area">
                                        <div className="primary-btn whitee" data-text="See Code Projects.">
                                            <span>S</span>
                                            <span>e</span>
                                            <span>e</span>
                                            <span style={{ marginLeft: "5px" }}></span>
                                            <span>C</span>
                                            <span>o</span>
                                            <span>d</span>
                                            <span>e</span>
                                            <span style={{ marginLeft: "5px" }}></span>
                                            <span>P</span>
                                            <span>r</span>
                                            <span>o</span>
                                            <span>j</span>
                                            <span>e</span>
                                            <span>c</span>
                                            <span>t</span>
                                            <span>s</span>
                                            <span>.</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome To My Projects Page!!!</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article key={index} className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-400">
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >{project.title}</a>
                            </h3>
                            <img
                                src={project.projectImage.asset.url}
                                alt={project.projectImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                    {console.log("date is", project.date)}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                    View The Project{" "}
                                    <span role="img" aria-label="right pointer">

                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section> */}
        </main>
    );
};

export default Project;
