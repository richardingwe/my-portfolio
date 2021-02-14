import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';
// import img from "../img.jpg";
import "./About.css";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);

}

const About = () => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then(data => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    // if (!author) return <div>Loading...</div>;
    return (
        <main className="bg-gray-800 main">
            <section className="banner-area relative">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                About Me
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {author &&
                <section className="about-area section-gap">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 about-left">
                                <img className="img-fluid" src={urlFor(author.authorImage).url()} alt="Richard Ingwe" />
                            </div>
                            <div className="col-lg-5 col-md-12 about-right">
                                <div className="section-title text-white">
                                    <h2>about myself</h2>
                                </div>
                                <div className="mb-50 wow fadeIn text-white" data-wow-duration=".8s">
                                    <div className="text-white mb-30">
                                        <BlockContent blocks={author.bio} projectId="y0xdnwwh" dataset="production" />
                                    </div>
                                    <a href="/" className="primary-btn white" data-text="Hire Me">
                                        <span>H</span>
                                        <span>i</span>
                                        <span>r</span>
                                        <span>e</span>
                                        <span> - </span>
                                        <span>M</span>
                                        <span>e</span>
                                    </a>
                                    <a href="/" className="primary-btn" data-text="Resume">
                                        <span>R</span>
                                        <span>e</span>
                                        <span>s</span>
                                        <span>u</span>
                                        <span>m</span>
                                        <span>e</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </main>
    );
    // return (
    //     <main className="bg-gray-800 main">
    //         {author &&
    //             <section className="testimony-section text-light" data-section="testimony">
    //                 <div className="container">
    //                     <div className="row ftco-animate justify-content-center">
    //                         <div className="col-md-12 d-flex align-items-center">
    //                             <div className="carousel-testimony owl-carousel">
    //                                 <div className="item">
    //                                     <div className="testimony-wrap my-40 d-flex align-items-stretch">
    //                                         <div className="user-img d-flex align-self-stretch" style={{ backgroundImage: `url(${urlFor(author.authorImage).url()})` }}>
    //                                         </div>
    //                                         <div className="text d-flex align-items-center">
    //                                             <div>
    //                                                 <p className="name">Richard Unimke Ingwe</p>
    //                                                 <span className="position">Software Developer && Graphic Designer</span>
    //                                                 <div className="icon-quote">
    //                                                     <span className="icon-quote-left"></span>
    //                                                 </div>
    //                                                 <p className="mb-4">Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //         }
    //     </main>
    // );
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
