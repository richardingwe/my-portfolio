import React from 'react';
import "./WhatsApp.css";
import "animate.css";
import { motion } from "framer-motion";

function WhatsApp() {
    return (
        <motion.div
            initial={{ y: "10vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="WhatsApp animate__animated animate__pulse animate__infinite infinite">
            <a href="https://wa.me/message/FI6OFAJRBKVMI1" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
        </motion.div>
    );
}

export default WhatsApp;
