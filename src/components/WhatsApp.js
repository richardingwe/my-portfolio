import React from 'react';
import "../css/WhatsApp.css";
import "animate.css";
import { useLocation } from 'react-router';

function WhatsApp() {
    const location = useLocation();
    return (
        <div style={{
            display: `${location.pathname === '/resume' ? 'none' : 'flex'
                }`,
        }}
            className="WhatsApp animate__animated animate__pulse animate__infinite infinite">
            <a href="https://wa.me/message/FI6OFAJRBKVMI1" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
        </div>
    );
}

export default WhatsApp;
