import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Animate score from 0 to 98.4
        let start = 0;
        const end = 98.4;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setScore(end);
                clearInterval(timer);
            } else {
                setScore(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <div className="hero-text-container animate-on-scroll">
                    <div className="hero-badge">PREDICTIVE GOVERNANCE v1.0</div>
                    <h1 className="hero-headline">
                        Predicting Inclusion,<br />
                        <span className="text-gradient">Defying Exclusion.</span>
                    </h1>
                    <p className="hero-subheadline">
                        Transforming Aadhaar governance from reactive to predictive through the antigravity science of AIRS.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary">Access Dashboard</Button>
                        <Button variant="secondary">View Documentation</Button>
                    </div>
                </div>

                <div className="hero-visual animate-on-scroll delay-200">
                    {/* 3D Holographic Globe Simulation */}
                    <div className="globe-container">
                        <div className="globe">
                            <div className="globe-grid"></div>
                            <div className="globe-glow"></div>
                        </div>

                        {/* Floating Live Risk Counter */}
                        <div className="floating-counter card-glass">
                            <div className="counter-label">LIVE RISK SCORE</div>
                            <div className="counter-value">{score.toFixed(1)}</div>
                            <div className="counter-status">
                                <span className="dot healthy"></span> OPTIMAL
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse"></div>
                <p>SCROLL TO EXPLORE</p>
            </div>
        </section>
    );
};

export default Hero;
