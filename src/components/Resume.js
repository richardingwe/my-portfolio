import React, { useEffect } from 'react';
// import '../css/Resume.css';

const Resume = () => {
    useEffect(() => {
        document.title = 'Rui - Resume';
        document.getElementsByTagName('LINK')[3].href = 'style.css';
        const styleElem = document.querySelectorAll('STYLE');

        styleElem.forEach(style => style.remove());
    }, []);
    return (
        <div id='body'>
            <div className="container">
                <div className="header">
                    <div className="heading">
                        <h1>RICHARD <span>INGWE</span></h1>
                        <h4>CONTACT</h4>
                    </div>
                    <div className="title-phone">
                        <div>WEB DEVELOPER</div>
                        <div>+23480 955 40169</div>
                    </div>
                    <div className="title-email">
                        <div>BRAND IDENTITY DESIGNER</div>
                        <a href="mailto:richardingwe5@gmail.com">
                            <div>richardingwe5@gmail.com</div>
                        </a>
                    </div>
                    <div className="github">
                        <div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path
                                    id="github"
                                    className="cls-3"
                                    d="M2.06,4.83H2C2.06,4.83,2.06,4.8,2.06,4.83Zm-.39,0,.06.06c.06.06.07,0,.07,0l-.05-.06A.06.06,0,0,0,1.67,4.83Zm.55,0a.09.09,0,0,0-.06.07.06.06,0,0,0,.08,0s.06,0,0-.06,0,0-.07,0ZM3,0A3,3,0,0,0,0,3,3.13,3.13,0,0,0,2.1,6c.16,0,.22-.07.22-.16V5.08s-.86.19-1-.37c0,0-.14-.36-.34-.45,0,0-.29-.2,0-.19a.68.68,0,0,1,.48.32.66.66,0,0,0,.88.28l0,0a.75.75,0,0,1,.2-.42c-.69-.08-1.39-.18-1.39-1.37a1,1,0,0,1,.29-.73,1.21,1.21,0,0,1,0-.84c.26-.09.86.33.86.33a3.17,3.17,0,0,1,1.56,0s.59-.42.85-.33a1.11,1.11,0,0,1,0,.84,1,1,0,0,1,.32.73c0,1.2-.73,1.29-1.42,1.37a.75.75,0,0,1,.21.58v1c0,.08.05.18.21.15a3.07,3.07,0,0,0,2.1-3,3,3,0,0,0-3-3ZM1.21,4.28v.06a0,0,0,0,0,.07,0V4.27C1.28,4.2,1.22,4.26,1.21,4.28Zm-.14-.1v.05h0A0,0,0,0,0,1.07,4.18Zm.4.44V4.7c0,.08.06,0,.08,0s0,0,0-.08a.06.06,0,0,0-.07,0Zm-.14-.18v.07c0,.07.06,0,.07,0a.06.06,0,0,0,0-.08H1.33Z"
                                />
                            </svg>
						Find me on Github!
					</div>
                        <a href="https://github.com/richardingwe" target="_blank" rel='noopener noreferrer'>
                            <span>www.github.com/richardingwe</span>
                        </a>
                    </div>
                    <div className="behance">
                        <div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 7.16 4.48"
                            >
                                <defs>
                                </defs>
                                <path
                                    id="behance"
                                    className="cls-3"
                                    d="M2.88,2a1,1,0,0,0,.6-.92C3.48.21,2.83,0,2.07,0H0V4.4H2.13c.8,0,1.55-.39,1.55-1.28A1.05,1.05,0,0,0,2.88,2ZM1,.75h.9c.35,0,.67.1.67.5s-.25.53-.59.53H1v-1Zm1,2.9H1V2.44H2c.43,0,.69.18.69.63s-.32.58-.71.58Zm4.45-3H4.67V.22H6.45Zm.7,2.19A1.57,1.57,0,0,0,5.74,1.13H5.6A1.6,1.6,0,0,0,4,2.72v.09A1.55,1.55,0,0,0,5.42,4.48H5.6A1.42,1.42,0,0,0,7.09,3.41H6.32a.76.76,0,0,1-.7.41.71.71,0,0,1-.78-.65.43.43,0,0,1,0-.16h2.3V2.85ZM4.84,2.45a.69.69,0,0,1,.7-.68h0a.66.66,0,0,1,.7.62v.06Z"
                                />
                            </svg>
						Find me on Behance!
					</div>
                        <a href="https://behance.net/richardingwe" target="_blank" rel='noopener noreferrer'>
                            <span>www.behance.net/richardingwe</span>
                        </a>
                    </div>
                    <div className="linkedin">
                        <div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 5.56 5.54"
                            >
                                <defs>
                                </defs>
                                <path
                                    id="linkedin-in"
                                    className="cls-3"
                                    d="M1.25,5.54H.1V1.83H1.25ZM.67,1.34A.67.67,0,1,1,1.34.67h0a.67.67,0,0,1-.67.67Zm4.89,4.2H4.41V3.73c0-.43,0-1-.59-1s-.7.47-.7,1V5.54H2V1.83H3.08v.51h0a1.24,1.24,0,0,1,1.09-.6c1.17,0,1.39.77,1.39,1.77v2Z"
                                />
                            </svg>
						Find me on Linkedin!
					</div>
                        <a href="https://linkedin.com/in/richard-ingwe-9a91a5190" target='_blank' rel='noopener noreferrer'>
                            <span>www.linkedin.com/in/richard-ingwe-9a91a5190</span>
                        </a>
                    </div>
                </div>
                <div className="body">
                    <div className="about-me">
                        <div className="about">
                            <h2>ABOUT</h2>
                            <div className="paragraph">
                                <p>
                                    I am a Software Developer and a Graphic Designer, I am very
                                    passionate about bringing ideas to reality through Codes and
                                    Graphic designs.
							</p>
                                <p>
                                    For now, I build powerful, beautiful, and swift web applications
                                    that help businesses/brands keep potential customers and compete
                                    globally.
							</p>
                                <p>
                                    I am obsessed with technology and I plan on working with
                                    technologies like Artificial Intelligence, Virtual Reality,
                                    Augmented Reality, and Mixed Reality in the future.
							</p>
                                <p>
                                    I'm always open to new projects and freelance collaborations! So
                                    if you want us to work together, get in touch! I don’t scratch!
							</p>
                            </div>
                        </div>
                        <div className="software">
                            <h2>SOFTWARES</h2>
                            <div className="apps">
                                <div className="app">
                                    <div className="app-name">Adobe Illustrator</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">Adobe Photoshop</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">Adobe XD</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">Adobe InDesign</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">Adobe After Effects</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>

                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <h2>SKILLS</h2>
                            <div className="apps">
                                <div className="app">
                                    <div className="app-name">Graphic Design</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">UI/UX Design</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>

                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">Web Development</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">Communication</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="app">
                                    <div className="app-name">Marketting</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-2"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stack">
                        <h2 className="heading">STACK</h2>
                        <div className="row1">
                            <div>Javascript</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>React.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Vue.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Next.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>PWA</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Bootstrap</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Git</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>SASS</div>
                        </div>
                        <div className="row2">
                            <div>Node.js</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>MongoDB</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>MySql</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Firebase</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>AWS</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Redux</div>
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.15 6"
                            >
                                <defs>
                                </defs>
                                <path className="cls-1" d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z" />
                            </svg>
                            <div>Sanity</div>
                        </div>
                    </div>
                    <div className="exp-edu">
                        <div className="exp">
                            <h2 className="heading">EXPERIENCE</h2>
                            {/* <div className="row">
                                <h3>SATELLITE TOWN HOTEL</h3>
                                <div>2015 - 2017</div>
                                <p>
                                    worked in Satellite Town Hotel, Calabar, CRS. Nigeria, as a
                                    waiter, then I was later promoted to the post of a Barman. I
                                    lead, controlled and maintained the orderliness of the bar for a
                                    year.
							</p>
                            </div>  */}
                            <div className="row">
                                <h3>RUI CREATIVE</h3>
                                <div>2018 - 2021</div>
                                <p>
                                    I currently work in Rui Creative as a Web developer and Graphic
                                    designer. I am also the lead designer in Rui Creative, so I am
                                    responsible for the awesomeness and creativity that comes out of
                                    Rui Creative.
							</p>
                            </div>
                        </div>
                        <svg
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 7.61 131.96"
                        >
                            <defs>
                            </defs>
                            <path
                                className="cls-1"
                                d="M7.61,3.81A3.81,3.81,0,1,1,3.81,0,3.8,3.8,0,0,1,7.61,3.81Z"
                            />
                            <path
                                className="cls-1"
                                d="M7.61,45.26a3.81,3.81,0,1,1-3.8-3.81A3.8,3.8,0,0,1,7.61,45.26Z"
                            />
                            <path
                                className="cls-1"
                                d="M7.61,86.71a3.81,3.81,0,1,1-3.8-3.81A3.8,3.8,0,0,1,7.61,86.71Z"
                            />
                            <path
                                className="cls-1"
                                d="M7.61,128.16a3.81,3.81,0,1,1-3.8-3.81A3.8,3.8,0,0,1,7.61,128.16Z"
                            />
                            <rect className="cls-1" x="3" y="3.81" width="1.6" height="123.71" />
                        </svg>
                        <div className="edu">
                            <h2 className="heading">EDUCATION</h2>
                            <div className="row">
                                <h3>FSLC</h3>
                                <div>2009</div>
                                <p>
                                    ESTATE NURSERY AND PRIMARY SCHOOL, CALABAR, CROSSRIVER STATE,
                                    NIGERIA
							</p>
                            </div>
                            <div className="row">
                                <h3>WASSCE, NABTEB, NECO</h3>
                                <div>2015</div>
                                <p>
                                    DIVINE TECHNICAL COLLEGE, CALABAR, CROSSRIVER STATE, NIGERIA.
							</p>
                            </div>
                            <div className="row">
                                <h3>BSC PHYSICS</h3>
                                <div>2020</div>
                                <p>CROSSRIVER UNIVERSITY OF TECHNOLOGY, NIGERIA.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-me">
                        <div className="about">
                            <h2>INTEREST</h2>
                            <div className="paragraph">
                                <p>Design, Mathematics, Tech, Programming E.t.c...</p>
                            </div>
                        </div>
                        <div className="software">
                            <h2>LANGUAGES</h2>
                            <div className="apps">
                                <div className="app">
                                    <div className="app-name">English</div>
                                    <div className="app-rating">
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                        <svg
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 6.15 6"
                                        >
                                            <defs>
                                            </defs>
                                            <path
                                                className="cls-1"
                                                d="M6.08,3a3,3,0,1,1-3-3A3,3,0,0,1,6.08,3Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about">
                            <h2>HOBBIES</h2>
                            <div className="paragraph">
                                <p>Designing, Coding, Reading, Writing, Gaming E.t.c...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="./pdf/MY CV.pdf" className="download heartbeat" download>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="-53 1 511 511.99906"
                >
                    <g id="surface1">
                        <path
                            d="M 276.410156 3.957031 C 274.0625 1.484375 270.84375 0 267.507812 0 L 67.777344 0 C 30.921875 0 0.5 30.300781 0.5 67.152344 L 0.5 444.84375 C 0.5 481.699219 30.921875 512 67.777344 512 L 338.863281 512 C 375.71875 512 406.140625 481.699219 406.140625 444.84375 L 406.140625 144.941406 C 406.140625 141.726562 404.65625 138.636719 402.554688 136.285156 Z M 279.996094 43.65625 L 364.464844 132.328125 L 309.554688 132.328125 C 293.230469 132.328125 279.996094 119.21875 279.996094 102.894531 Z M 338.863281 487.265625 L 67.777344 487.265625 C 44.652344 487.265625 25.234375 468.097656 25.234375 444.84375 L 25.234375 67.152344 C 25.234375 44.027344 44.527344 24.734375 67.777344 24.734375 L 255.261719 24.734375 L 255.261719 102.894531 C 255.261719 132.945312 279.503906 157.0625 309.554688 157.0625 L 381.40625 157.0625 L 381.40625 444.84375 C 381.40625 468.097656 362.113281 487.265625 338.863281 487.265625 Z M 338.863281 487.265625 "
                            style={{
                                stroke: 'none',
                                fillRule: 'nonzero',
                                fill: 'rgb(255, 255, 255)',
                                fillOpacity: 1
                            }}
                        />
                        <path
                            d="M 305.101562 401.933594 L 101.539062 401.933594 C 94.738281 401.933594 89.171875 407.496094 89.171875 414.300781 C 89.171875 421.101562 94.738281 426.667969 101.539062 426.667969 L 305.226562 426.667969 C 312.027344 426.667969 317.59375 421.101562 317.59375 414.300781 C 317.59375 407.496094 312.027344 401.933594 305.101562 401.933594 Z M 305.101562 401.933594 "
                            style={{
                                stroke: 'none',
                                fillRule: 'nonzero',
                                fill: 'rgb(255, 255, 255)',
                                fillOpacity: 1
                            }}
                        />
                        <path
                            d="M 194.292969 357.535156 C 196.644531 360.007812 199.859375 361.492188 203.320312 361.492188 C 206.785156 361.492188 210 360.007812 212.347656 357.535156 L 284.820312 279.746094 C 289.519531 274.796875 289.148438 266.882812 284.203125 262.308594 C 279.253906 257.609375 271.339844 257.976562 266.765625 262.925781 L 215.6875 317.710938 L 215.6875 182.664062 C 215.6875 175.859375 210.121094 170.296875 203.320312 170.296875 C 196.519531 170.296875 190.953125 175.859375 190.953125 182.664062 L 190.953125 317.710938 L 140 262.925781 C 135.300781 257.980469 127.507812 257.609375 122.5625 262.308594 C 117.617188 267.007812 117.246094 274.800781 121.945312 279.746094 Z M 194.292969 357.535156 "
                            style={{
                                stroke: 'none',
                                fillRule: 'nonzero',
                                fill: 'rgb(255, 255, 255)',
                                fillOpacity: 1
                            }}
                        />
                    </g>
                </svg>
                <span>Download</span>
            </a>
        </div>
    );
};

export default Resume;
