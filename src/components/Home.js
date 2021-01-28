import React from 'react';
import image from "../kevin-ku-w7ZyuGYNpRQ-unsplash.jpg";

const Home = () => {
    return (
        <main>
            <img
                src={image}
                alt="computer screen with code"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
                <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">Hello, I am Rui</h1>
            </section>
        </main>
    );
};

export default Home;
