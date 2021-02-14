import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "./SinglePost.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage {
                asset-> {
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return (
        <div>
            <div className="preloader-area">
                <div className="loader-box">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
    );

    return (

        <main className="bg-gray-800 min-h-screen">
            <section className="banner-area relative">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                {singlePost && singlePost.title}
                            </h1>
                            <p className="link-nav">
                                <span className="box">
                                    <Link to="/">Home </Link>
                                    <Link to="/post">Blog</Link>
                                    <Link to={`/post/${slug}`}>Blog Details</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {singlePost &&
                <section class="post-content-area single-post-area section-gap">
                    <div class="container">
                        <div class="">
                            <div class="posts-list">
                                <div class="single-post row text-white">
                                    <div class="col-lg-12">
                                        <div class="feature-img" style={{ backgroundImage: `url(${singlePost.mainImage.asset.url})` }}>
                                            {/* <img class="img-fluid" src={singlePost.mainImage.asset.url} alt={singlePost.title} /> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-3  col-md-3 meta-details">
                                        <ul class="tags">
                                            <li><a href="/">Food,</a></li>
                                            <li><a href="/">Technology,</a></li>
                                            <li><a href="/">Politics,</a></li>
                                            <li><a href="/">Lifestyle</a></li>
                                        </ul>
                                        <div class="user-details row">
                                            <p class="user-name col-lg-12 col-md-12 col-6"><a href="/">Mark wiens</a> <span class="lnr lnr-user"></span></p>
                                            <p class="date col-lg-12 col-md-12 col-6"><a href="/">12 Dec, 2017</a> <span class="lnr lnr-calendar-full"></span></p>
                                            <p class="view col-lg-12 col-md-12 col-6"><a href="/">1.2M Views</a> <span class="lnr lnr-eye"></span></p>
                                            <p class="comments col-lg-12 col-md-12 col-6"><a href="/">06 Comments</a> <span class="lnr lnr-bubble"></span></p>
                                            <ul class="social-links col-lg-12 col-md-12 col-6">
                                                <li><a href="/"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="/"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="/"><i class="fa fa-github"></i></a></li>
                                                <li><a href="/"><i class="fa fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-9 col-md-9">
                                        <a class="posts-title" href="/"><h3>Astronomy Binoculars A Great Alternative</h3></a>
                                        <p class="excert">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                                            on boot camp when you can get the MCSE study materials yourself at a fraction.
							            </p>
                                        <p>
                                            Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot
                                            camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                                            to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
							            </p>
                                        <p>
                                            Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot
                                            camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                                            to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
							            </p>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="quotes">
                                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                                            on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has
                                            the willpower to actually sit through a self-imposed MCSE training.
							            </div>
                                        <div class="row mt-30 mb-30">
                                            <div class="col-6">
                                                <img class="img-fluid" src="img/blog/post-img1.jpg" alt="" />
                                            </div>
                                            <div class="col-6">
                                                <img class="img-fluid" src="img/blog/post-img2.jpg" alt="" />
                                            </div>
                                            <div class="col-lg-12 mt-30">
                                                <p>
                                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                                                    on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has
                                                    the willpower.
									            </p>
                                                <p>
                                                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money
                                                    on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has
                                                    the willpower.
									            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="navigation-area">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                            <div class="thumb">
                                                <a href="/"><img class="img-fluid" src="img/blog/prev.jpg" alt="" /></a>
                                            </div>
                                            <div class="arrow">
                                                <a href="/"><span class="lnr text-white lnr-arrow-left"></span></a>
                                            </div>
                                            <div class="detials">
                                                <p>Prev Post</p>
                                                <a href="/"><h4>Space The Final Frontier</h4></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                            <div class="detials">
                                                <p>Next Post</p>
                                                <a href="/"><h4>Telescopes 101</h4></a>
                                            </div>
                                            <div class="arrow">
                                                <a href="/"><span class="lnr text-white lnr-arrow-right"></span></a>
                                            </div>
                                            <div class="thumb">
                                                <a href="/"><img class="img-fluid" src="img/blog/next.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div class="comments-area">
                                    <h4>05 Comments</h4>
                                    <div class="comment-list">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c1.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><a href="/">Emilly Blunt</a></h5>
                                                    <p class="date">December 4, 2017 at 3:12 pm </p>
                                                    <p class="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <a href="/" class=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list left-padding">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c2.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><a href="/">Elsie Cunningham</a></h5>
                                                    <p class="date">December 4, 2017 at 3:12 pm </p>
                                                    <p class="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <a href="/" class=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list left-padding">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c3.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><a href="/">Annie Stephens</a></h5>
                                                    <p class="date">December 4, 2017 at 3:12 pm </p>
                                                    <p class="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <a href="/" class=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c4.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><a href="/">Maria Luna</a></h5>
                                                    <p class="date">December 4, 2017 at 3:12 pm </p>
                                                    <p class="comment">
                                                        Never say goodbye till the end comes!
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <a href="/" class=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-list">
                                        <div class="single-comment justify-content-between d-flex">
                                            <div class="user justify-content-between d-flex">
                                                <div class="thumb">
                                                    <img src="img/blog/c5.jpg" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h5><a href="/">Ina Hayes</a></h5>
                                                    <p class="date">December 4, 2017 at 3:12 pm </p>
                                                    <p class="comment">
                                                        Never say goodbye till the end comes!
										            </p>
                                                </div>
                                            </div>
                                            <div class="reply-btn">
                                                <a href="/" class=" btn-reply text-uppercase">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div class="comment-form">
                                    <h4>Leave a Comment</h4>
                                    <form>
                                        <div class="form-group form-inline">
                                            <div class="form-group col-lg-6 col-md-12 name">
                                                <input type="text" class="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'" />
                                            </div>
                                            <div class="form-group col-lg-6 col-md-12 email">
                                                <input type="email" class="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"
                                                required=""></textarea>
                                        </div>
                                        <a href="/" class="primary-btn" data-text="Post Comment">
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
                    </div>
                </section>




                // <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg mt-32">
                //     <header className="relative">
                //         <div className="absolute h-full w-full flex items-center justify-center p-8">
                //             <div className="bg-white bg-opacity-75 rounded p-12">
                //                 <h1 className="cursive text-3xl lg:text-6xl mb-4">
                //                     {singlePost.title}
                //                 </h1>
                //                 <div className="flex justify-center text-gray-800">
                //                     <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-10 h-10 rounded-full" />
                //                     <p className="cursive flex items-center pl-2 text-2xl">
                //                         {singlePost.name}
                //                     </p>
                //                 </div>
                //             </div>
                //         </div>
                //         <img
                //             src={singlePost.mainImage.asset.url}
                //             alt={singlePost.title}
                //             className="w-full object-cover rounded-t"
                //             style={{ height: "400px" }}
                //         />
                //     </header>
                //     <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                //         <BlockContent blocks={singlePost.body} projectId="y0xdnwwh" dataset="production" />
                //     </div>
                // </article>
            }
        </main>
    );
};

export default SinglePost;
