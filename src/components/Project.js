import React, { useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import sanityClient from "../client";
import { Link } from "react-router-dom";
import "./Project.css";


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
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Projects
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home</Link>
                                    <Link to="/project">Projects</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  design/code area start  */}
            <section class="why-choose-us-area bg-gray section-padding-80-0 clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading text-white text-center wow fadeInUp" data-wow-delay="100ms">
                                <h2>Design Or Code??</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="why-choose-us-content text-center mb-80 wow fadeInUp" data-wow-delay="100ms">
                                <div class="chosse-us-icon">
                                    <i class="fas fa-code" aria-hidden="true"></i>
                                </div>
                                <h1>Code</h1>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p> */}
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="why-choose-us-content text-center mb-80 wow fadeInUp" data-wow-delay="500ms">
                                <div class="chosse-us-icon">
                                    <i class="fas fa-bezier-curve" aria-hidden="true"></i>
                                </div>
                                <h1>Design</h1>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p> */}
                            </div>
                        </div>
                    </div>
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
