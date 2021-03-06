import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Footer.css";
import { useLocation } from 'react-router';

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <footer className="Footer" style={{
            display: `${location.pathname === '/resume' ? 'none' : 'flex'
                }`,
        }}>
            <div data-aos="fade-in" data-aos-delay="200" data-aos-offset="50" >
                <span>© 2021 Rui Creative. All rights reserved. </span>
                {/* <br /> */}
                <a href="https://github.com/richardingwe" target="_blank" rel="nofollow noopener noreferrer" className="">
                    Designed && Coded By Rui.
                </a>
            </div>
        </footer>
    );
};

export default Footer;
