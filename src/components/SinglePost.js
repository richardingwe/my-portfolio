import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

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
                <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg mt-32">
                    <header className="relative">
                        <div className="absolute h-full w-full flex items-center justify-center p-8">
                            <div className="bg-white bg-opacity-75 rounded p-12">
                                <h1 className="cursive text-3xl lg:text-6xl mb-4">
                                    {singlePost.title}
                                </h1>
                                <div className="flex justify-center text-gray-800">
                                    <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-10 h-10 rounded-full" />
                                    <p className="cursive flex items-center pl-2 text-2xl">
                                        {singlePost.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            src={singlePost.mainImage.asset.url}
                            alt={singlePost.title}
                            className="w-full object-cover rounded-t"
                            style={{ height: "400px" }}
                        />
                    </header>
                    <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                        <BlockContent blocks={singlePost.body} projectId="y0xdnwwh" dataset="production" />
                    </div>
                </article>
            }
        </main>
    );
};

export default SinglePost;
