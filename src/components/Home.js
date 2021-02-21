import React, { useEffect } from 'react';
import "./Home.css";

const Home = () => {
    useEffect(() => {
        document.title = "Rui";
    }, []);
    return (
        <main className="Main">
            <section className="heading-text container">
                <h1 className="text-white font-bold playfair home-name"><span className="hello">Hello,</span><br /> I am Rui</h1>
                <p><span className="title">Software Developer && Brand Identity Designer</span><br />
                I Create Beautiful Experiences, That Could Keep Potential Customers Glued && Loyal To Your Businesses, Brands And Websites.
                </p>
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
            <div className="socials">
                <a href="https://github.com/richardingwe" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://dribbble.com/Rui_Creative" target="_blank" rel="noopener noreferrer">
                    <i className=" fa fa-dribbble" aria-hidden="true"></i>
                </a>
                <a href="https://behance.net/richardingwe" target="_blank" rel="noopener noreferrer">
                    <i className=" fa fa-behance" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/RichardIngwe?s=09" target="_blank" rel="noopener noreferrer">
                    <i className=" fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://facebook.com/ruitech00" target="_blank" rel="noopener noreferrer">
                    <i className=" fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://linkedin.com/in/richard-ingwe-9a91a5190" target="_blank" rel="noopener noreferrer">
                    <i className=" fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://instagram.com/rui_creative" target="_blank" rel="noopener noreferrer">
                    <i className=" fa fa-instagram" aria-hidden="true"></i>
                </a>
                <div className="Line" />
            </div>
        </main>
    );
};

export default Home;
