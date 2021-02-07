import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client";
import "./Post.css";

const Post = () => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
        title,
        slug,
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
    return (
        <main className="bg-gray-800 min-h-screen p-12">
            <section class="ftco-section mt-24" data-section="blog">
                <div class="container">
                    <div class="row justify-content-center mb-5 pb-5">
                        <div class="col-md-7 heading-section text-center ftco-animate">
                            <span class="subheading">Blog</span>
                            <h2 class="mb-4">Read My Stories</h2>
                        </div>
                    </div>

                    <div class="row d-flex" >
                        {postData && postData.map((post, index) => (
                            <div class="col-md-4 d-flex ftco-animate" key={index}>
                                <div class="blog-entry justify-content-end">
                                    <a href="single.html" class="block-20" style={{ backgroundImage: `url(${post.mainImage.asset.url})` }}>
                                    </a>
                                    <div class="text mt-3 text-light float-right d-block">
                                        <div class="d-flex align-items-center pt-2 mb-4 topp">
                                            <div class="one mr-3">
                                                <span class="day">12</span>
                                            </div>
                                            <div class="two">
                                                <span class="yr">2019</span>
                                                <span class="mos">March</span>
                                            </div>
                                        </div>
                                        <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                        <div class="d-flex align-items-center mt-4 meta">
                                            <p class="mb-0"><a href="/" class="btn btn-secondary">Read More <span class="ion-ios-arrow-round-forward"></span></a></p>
                                            <p class="ml-auto mb-0">
                                                <a href="/" class="mr-2">Admin</a>
                                                <a href="/" class="meta-chat"><span class="icon-chat"></span> 3</a>
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
