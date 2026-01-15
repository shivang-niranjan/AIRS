import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <ShieldCheck size={32} color="var(--neon-cyan)" />
                    <span className="logo-text">AIRS</span>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#problem" onClick={() => setMobileMenuOpen(false)}>Problem</a>
                    <a href="#dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
                    <a href="#matrix" onClick={() => setMobileMenuOpen(false)}>Intelligence</a>
                    <a href="#map" onClick={() => setMobileMenuOpen(false)}>Hotspots</a>
                </div>

                <div className="nav-action">
                    <Button variant="primary" className="login-btn">
                        Login
                    </Button>
                    <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
