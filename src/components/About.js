import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';
import img from "../img.jpg";


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

    if (!author) return <div>Loading...</div>;
    return (
        <main className="relative">
            <img src={img} alt="wallpaper" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-gray-900 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-6xl text-blue-300 mb-4">
                            Hello, I'm{" "}
                            <span className="text-gray-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="y0xdnwwh" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
