import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import "./Post.css";

const Post = () => {
    const [postData, setPostData] = useState(null);

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
    return (
        <main className="bg-gray-800 min-h-screen p-12">
            <section className="ftco-section text-white" data-section="blog">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Blog</span>
                            <h2 className="mb-4">Read My Stories</h2>
                        </div>
                    </div>

                    <div className="row d-flex" >
                        {postData && postData.map((post, index) => (
                            <div className="col-md-4 d-flex ftco-animate" key={post.slug.current}>
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
                                            {/* <BlockContent blocks={post.body} projectId="y0xdnwwh" dataset="production" /> */}
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
    // return (
    //     <main className="bg-gray-800 min-h-screen p-12">
    //         <section className="container mx-auto">
    //             <h1 className="text-4xl my-16 flex justify-center text-white text-lg">Blog</h1>
    //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //                 {postData && postData.map((post, index) => (
    //                     <article key={index}>
    //                         <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
    //                             <span key={index * 2} className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-900">
    //                                 <img
    //                                     src={post.mainImage.asset.url}
    //                                     alt={post.mainImage.alt}
    //                                     className="w-full h-full rounded-r object-cover absolute"
    //                                 />
    //                                 <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
    //                                     <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-gray-900 text-red-100 bg-opacity-75 rounded">{post.title}</h3>
    //                                 </span>
    //                             </span>
    //                         </Link>
    //                     </article>
    //                 ))}
    //             </div>
    //         </section>
    //     </main>
    // );
};

export default Post;
