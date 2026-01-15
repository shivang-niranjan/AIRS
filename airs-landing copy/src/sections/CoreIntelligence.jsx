import React from 'react';
import { Brain, Cpu, GitMerge, Search, ShieldCheck } from 'lucide-react';
import './CoreIntelligence.css';

const CoreIntelligence = () => {
    return (
        <section className="core-section">
            <div className="core-content animate-on-scroll">
                <div className="section-header center">
                    <h2 className="section-title">Core Intelligence Engine</h2>
                    <p className="section-subtitle">AI & ML That Reasons, Predicts, and Protects</p>
                </div>

                <div className="intro-text">
                    <p>
                        AIRS isn't just a dashboard—it's an autonomous nervous system.
                        It moves beyond static rules to <span className="highlight">automatically discover patterns</span>,
                        label emerging risks, and prescribe policy interventions before systems fail.
                    </p>
                </div>

                <div className="core-grid">
                    {/* Feature 1: AI-Based Discovery */}
                    <div className="core-card">
                        <div className="icon-wrapper">
                            <Search size={24} />
                        </div>
                        <h3>AI-Based Anomaly Discovery</h3>
                        <p>No manual thresholds. The system learns "normal" behavior and flags deviations instantly.</p>
                        <ul className="feature-list">
                            <li>Detects sudden "Silence Zones"</li>
                            <li>Identifies gradual decay patterns</li>
                            <li>Flags repeated failure loops</li>
                        </ul>
                    </div>

                    {/* Feature 2: Causal Reasoning */}
                    <div className="core-card">
                        <div className="icon-wrapper">
                            <GitMerge size={24} />
                        </div>
                        <h3>Causal Reasoning Layer</h3>
                        <p>Moves from "What happened?" to "Why it happened?" by mapping hidden correlations.</p>
                        <ul className="feature-list">
                            <li>Multivariate factor analysis</li>
                            <li>Cause → Effect visualization</li>
                            <li>Environmental impact weighting</li>
                        </ul>
                    </div>

                    {/* Feature 3: Predictive Governance */}
                    <div className="core-card">
                        <div className="icon-wrapper">
                            <ShieldCheck size={24} />
                        </div>
                        <h3>Predictive & Prescriptive</h3>
                        <p>Forecasts exclusion risks and prescribes actionable interventions automatically.</p>
                        <ul className="feature-list">
                            <li>Predicts exclusion volumes</li>
                            <li>Generates policy frameworks</li>
                            <li>Auto-triggers preventive audits</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreIntelligence;
