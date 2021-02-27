import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Code = () => {
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
        </main>
    );
};

export default Code;
