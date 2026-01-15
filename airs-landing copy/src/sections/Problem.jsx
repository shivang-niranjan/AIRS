import React from 'react';
import Card from '../components/Card';
import { Database, FileText, Activity } from 'lucide-react';
import './Problem.css';

const Problem = () => {
    return (
        <section id="problem" className="problem-section">
            <div className="problem-container">
                <div className="problem-header animate-on-scroll">
                    <h2 className="section-title">The Weight of Data</h2>
                    <p className="section-subtitle">Lifting the Burden of Manual Governance</p>
                </div>

                <div className="antigravity-visual animate-on-scroll delay-100">
                    <div className="heavy-blocks">
                        <div className="block block-1">
                            <FileText size={48} />
                            <span>MANUAL AUDITS</span>
                        </div>
                        <div className="block block-2">
                            <Database size={48} />
                            <span>LEGACY DATA</span>
                        </div>
                        <div className="block block-3">
                            <Activity size={48} />
                            <span>REACTIVE CHECKS</span>
                        </div>
                    </div>

                    <div className="energy-beams">
                        <div className="beam beam-1"></div>
                        <div className="beam beam-2"></div>
                        <div className="beam beam-3"></div>
                    </div>

                    <div className="airs-core">
                        <div className="core-circle">AIRS</div>
                    </div>
                </div>

                <div className="problem-text">
                    <div className="text-card">
                        <h3>Traditional Audits</h3>
                        <p>Heavy, slow, and reactive.</p>
                    </div>
                    <div className="text-card highlight">
                        <h3>Antigravity Prediction</h3>
                        <p>Light, fast, and proactive.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
