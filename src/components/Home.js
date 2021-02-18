import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <main className="Main">
            {/* <img
                src={image}
                alt="computer screen with code"
                className="absolute object-cover w-full h-full"
            /> */}
            <section className="heading-text container">
                <h1 className="text-white font-bold playfair home-name"><span className="hello">Hello,</span><br /> I am Rui</h1>
                <p><span className="title">Software Developer && Brand Identity Designer</span><br />I Create Beautiful Experiences, That Could Keep Potential Customers Glued To Your Website</p>
                <div className="action about-area">
                    <a href="mailto:ruitech00@gmail.com" className="primary-btn white" data-text="Hire Me">
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
            </section>
        </main>
    );
};

export default Home;
