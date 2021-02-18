import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client";
import "./Post.css";

const Post = () => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        document.title = "Rui - Blog";
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
        title,
        slug,
        publishedAt,
        body,
        "name": author->name,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`)
            .then((data) => setPostData(data))
            .catch(console.error);
    }, []);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    if (!postData) return (
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
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Blog
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home</Link>
                                    <Link to="/post">Blog</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section text-white" data-section="blog">
                <div className="container">
                    {/* <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Blog</span>
                            <h2 className="mb-4">Read My Stories</h2>
                        </div>
                    </div> */}

                    <div className="row d-flex" >
                        {postData && postData.map((post, index) => (
                            <div className="col-lg-4 col-md-6 col-xs-12 d-flex ftco-animate" key={post.slug.current}>
                                <div className="blog-entry justify-content-end">
                                    <Link to={`/post/${post.slug.current}`} className="block-20" style={{ backgroundImage: `url(${post.mainImage.asset.url})` }}>
                                    </Link>
                                    <div className="text mt-3 text-light float-right d-block">
                                        <div className="d-flex align-items-center pt-2 mb-4 topp">
                                            <div className="one mr-3">
                                                <span className="day">{new Date(post.publishedAt).getDate()}</span>
                                            </div>
                                            <div className="two">
                                                <span className="yr">{new Date(post.publishedAt).getFullYear()}</span>
                                                <span className="mos">{months[new Date(post.publishedAt).getMonth()]}</span>
                                            </div>
                                        </div>
                                        <h3 className="heading"><Link to={`/post/${post.slug.current}`}>{post.title}</Link></h3>
                                        <p>
                                            {post.body[0].children[0].text.substr(0, 130).concat("...")}
                                        </p>
                                        <div className="d-flex align-items-center mt-4 meta">
                                            <p className="mb-0"><Link to={`/post/${post.slug.current}`} className="btn text-dark btn-secondary">Read More <span className="ion-ios-arrow-round-forward"></span></Link></p>
                                            <p className="ml-auto mb-0">
                                                <Link to="/about" className="mr-2">{post.name}</Link>
                                                {/* <a href="/" class="meta-chat"><span class="icon-chat"></span> 3</a> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Post;
