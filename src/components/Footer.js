import React from 'react';
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="">
                <span>© 2021 Rui Creative. All rights reserved. </span>
                {/* <br /> */}
                <a href="https://github.com/richardingwe" target="_blank" rel="nofollow noopener noreferrer" className="">
                    Designed by Rui.
                </a>
            </div>
        </footer>
    );
};

export default Footer;
