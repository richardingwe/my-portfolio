import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client";

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
            <section className="container mx-auto">
                <h1 className="text-4xl my-16 flex justify-center text-white text-lg">Blog</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                        <article key={index}>
                            <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                                <span key={index * 2} className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-900">
                                    <img
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-gray-900 text-red-100 bg-opacity-75 rounded">{post.title}</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Post;
