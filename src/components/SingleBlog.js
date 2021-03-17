import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { DiscussionEmbed } from 'disqus-react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/SingleBlog.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const SingleBlog = () => {
    const [singleBlog, setSingleBlog] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            subtitle,
            _id,
            slug,
        publishedAt,
            mainImage {
                asset-> {
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSingleBlog(data[0]))
            .catch(console.error);
    }, [slug]);

    useEffect(() => {
        document.title = `Rui - Blog ${singleBlog ? `- ${singleBlog.title}` : " "}`;
        document.getElementsByTagName("META")[3].content = `${singleBlog ? `${singleBlog.subtitle}` : " "}`;
    }, [singleBlog]);

    if (!singleBlog) return (
        <div>
            <div className="preloader-area">
                <div className="loader-box">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
    );

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
                                Blog Details
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home </Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to={`/blog/${slug}`}>Blog Details</Link>
                                </span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {singleBlog &&
                <section className="post-content-area single-post-area section-gap">
                    <div className="container">
                        <div className="">
                            <div className="posts-list">
                                <div className="single-post row text-white">
                                    <div className="col-lg-12">
                                        <div data-aos="fade-up" data-aos-delay="300" className="subtitle">
                                            <p >{singleBlog.subtitle}</p>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay="200" className="feature-img" style={{ backgroundImage: `url(${singleBlog.mainImage.asset.url})` }}>
                                            {/* <img className="img-fluid" src={singleBlog.mainImage.asset.url} alt={singleBlog.title} /> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-3  col-md-3 meta-details">
                                        {/* <ul className="tags">
                                            <li><a href="/">Food,</a></li>
                                            <li><a href="/">Technology,</a></li>
                                            <li><a href="/">Politics,</a></li>
                                            <li><a href="/">Lifestyle</a></li>
                                        </ul> */}
                                        <div data-aos="fade-up" data-aos-delay="300" className="user-details row mt-2 justify-content-center align-items-center">
                                            <p className="user-name col-lg-12 col-md-12 col-6">
                                                <Link to="/about">{singleBlog.name}
                                                    <img className="author-img" src={urlFor(singleBlog.authorImage).url()} alt=" ">
                                                    </img>
                                                </Link>
                                                {/* <i className="fa fa-user" /> */}
                                            </p>
                                            <p className="date col-lg-12 col-md-12 col-6">{new Date(singleBlog.publishedAt).getDate()} {months[new Date(singleBlog.publishedAt).getMonth()]},  {new Date(singleBlog.publishedAt).getFullYear()}   <i className="fa fa-calendar" /></p>
                                            {/* <p className="view col-lg-12 col-md-12 col-6"><a href="/">1.2M Views</a> <span className="lnr lnr-eye"></span></p> */}
                                            {/* <p className="comments col-lg-12 col-md-12 col-6"><a href="/">06 Comments</a> <span className="lnr lnr-bubble"></span></p> */}
                                            {/* <ul className="social-links col-lg-12 col-md-12 col-6">
                                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="/"><i className="fa fa-github"></i></a></li>
                                                <li><a href="/"><i className="fa fa-behance"></i></a></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="300" className="col-lg-9 col-md-9">
                                        <h3 className="mt-5 mb-1 blog-title">{singleBlog && singleBlog.title}</h3>
                                        <div className="excert">
                                            <BlockContent blocks={singleBlog.body} projectId="y0xdnwwh" dataset="production" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="navigation-area">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                            <div className="thumb">
                                                <a href="/"><img className="img-fluid" src="img/blog/prev.jpg" alt="" /></a>
                                            </div>
                                            <div className="arrow">
                                                <a href="/"><span className="lnr text-white lnr-arrow-left"></span></a>
                                            </div>
                                            <div className="detials">
                                                <p>Prev Post</p>
                                                <a href="/"><h4>Space The Final Frontier</h4></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                            <div className="detials">
                                                <p>Next Post</p>
                                                <a href="/"><h4>Telescopes 101</h4></a>
                                            </div>
                                            <div className="arrow">
                                                <a href="/"><span className="lnr text-white lnr-arrow-right"></span></a>
                                            </div>
                                            <div className="thumb">
                                                <a href="/"><img className="img-fluid" src="img/blog/next.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="comments-area">
                                    <h4>05 Comments</h4>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/blog/c1.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="/">Emilly Blunt</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="/" className=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list left-padding">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/blog/c2.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="/">Elsie Cunningham</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="/" className=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list left-padding">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/blog/c3.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="/">Annie Stephens</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="/" className=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/blog/c4.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="/">Maria Luna</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="/" className=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/blog/c5.jpg" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <h5><a href="/">Ina Hayes</a></h5>
                                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                                    <p className="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div className="reply-btn">
                                                <a href="/" className=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="comment-form">
                                    <h4>Leave a Comment</h4>
                                    <form>
                                        <div className="form-group form-inline">
                                            <div className="form-group col-lg-6 col-md-12 name">
                                                <input type="text" className="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 email">
                                                <input type="email" className="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"
                                                required=""></textarea>
                                        </div>
                                        <a href="/" className="primary-btn" data-text="Post Comment">
                                            <span>P</span>
                                            <span>o</span>
                                            <span>s</span>
                                            <span>t</span>
                                            <span> </span>
                                            <span>C</span>
                                            <span>o</span>
                                            <span>m</span>
                                            <span>m</span>
                                            <span>e</span>
                                            <span>n</span>
                                            <span>t</span>
                                        </a>
                                    </form>
                            </div>*/}
                            </div>
                        </div>
                        <div className="mb-2">
                            <h3 className="leave-comment">
                                Please leave a comment
                            </h3>
                        </div>
                        <DiscussionEmbed
                            shortname='Rui'
                            config={
                                {
                                    url: `https://ruingwe.netlify.app/blog/${singleBlog.slug}`,
                                    identifier: singleBlog._id,
                                    title: singleBlog.title,
                                    language: 'en' //e.g. for Traditional Chinese (Taiwan)	
                                }
                            }
                        />
                    </div>
                </section>




                // <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg mt-32">
                //     <header className="relative">
                //         <div className="absolute h-full w-full flex items-center justify-center p-8">
                //             <div className="bg-white bg-opacity-75 rounded p-12">
                //                 <h1 className="cursive text-3xl lg:text-6xl mb-4">
                //                     {singleBlog.title}
                //                 </h1>
                //                 <div className="flex justify-center text-gray-800">
                //                     <img src={urlFor(singleBlog.authorImage).url()} alt={singleBlog.name} className="w-10 h-10 rounded-full" />
                //                     <p className="cursive flex items-center pl-2 text-2xl">
                //                         {singleBlog.name}
                //                     </p>
                //                 </div>
                //             </div>
                //         </div>
                //         <img
                //             src={singleBlog.mainImage.asset.url}
                //             alt={singleBlog.title}
                //             className="w-full object-cover rounded-t"
                //             style={{ height: "400px" }}
                //         />
                //     </header>
                //     <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                //         <BlockContent blocks={singleBlog.body} projectId="y0xdnwwh" dataset="production" />
                //     </div>
                // </article>
            }

        </main>
    );
};

export default SingleBlog;
