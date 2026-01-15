import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-brand">
                    <ShieldCheck size={24} color="var(--neon-cyan)" />
                    <span>AIRS</span>
                </div>

                <div className="footer-links">
                    <span>Security by UIDAI</span>
                    <span className="divider">|</span>
                    <span>Powered by Predictive Antigravity</span>
                    <span className="divider">|</span>
                    <span className="version">v1.0.4</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
