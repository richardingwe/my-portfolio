import React from 'react';
import { Link } from "react-router-dom";

const Code = () => {
    return (
        <main className="bg-gray-800 min-h-screen main">
            <section className="banner-area relative">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Code;
