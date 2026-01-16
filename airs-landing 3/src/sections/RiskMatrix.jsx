import React from 'react';
import Card from '../components/Card';
import { EyeOff, TrendingUp, CheckCircle } from 'lucide-react';
import './RiskMatrix.css';

const RiskMatrix = () => {
    return (
        <section id="matrix" className="matrix-section">
            <div className="section-header animate-on-scroll">
                <h2 className="section-title">Risk Intelligence Matrix</h2>
                <p className="section-subtitle">Predictive Categorization & Live Status</p>
            </div>

            <div className="matrix-grid animate-on-scroll delay-200">
                {/* Hidden Exclusion (Shadow Demand) */}
                <div className="matrix-column hidden-exclusion">
                    <div className="column-header">
                        <EyeOff className="icon" />
                        <h3>HIDDEN EXCLUSION</h3>
                    </div>
                    <div className="matrix-cards">
                        <Card className="matrix-card purple-glow">
                            <h4>Silence Zone Detected</h4>
                            <p>Zero enrollment activity in populated tribal belt (&gt;10k pop).</p>
                            <div className="meta">
                                <span>Zone: Gadchiroli B</span>
                                <span>Gap: 100%</span>
                            </div>
                        </Card>
                        <Card className="matrix-card purple-glow">
                            <h4>Digital Literacy Gap</h4>
                            <p>High operator reject rates correlating with low literacy zones.</p>
                            <div className="meta">
                                <span>Cluster: Rural East</span>
                                <span>Impact: High</span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Emerging Risk (Predictive) */}
                <div className="matrix-column emerging">
                    <div className="column-header">
                        <TrendingUp className="icon" />
                        <h3>EMERGING RISK</h3>
                    </div>
                    <div className="matrix-cards">
                        <Card className="matrix-card orange-glow">
                            <h4>Aging Population Spike</h4>
                            <p>Rapid increase in biometric failure among elderly (60+).</p>
                            <div className="meta">
                                <span>Trend: +150%</span>
                                <span>biometric_decay: true</span>
                            </div>
                        </Card>
                        <Card className="matrix-card orange-glow">
                            <h4>Seasonal Migration</h4>
                            <p>Predicted capacity overload due to harvest season return.</p>
                            <div className="meta">
                                <span>Prediction: 2wks</span>
                                <span>Load: +40%</span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* System Health */}
                <div className="matrix-column healthy">
                    <div className="column-header">
                        <CheckCircle className="icon" />
                        <h3>SYSTEM HEALTH</h3>
                    </div>
                    <div className="matrix-cards">
                        <Card className="matrix-card green-glow">
                            <h4>Balanced Ratios</h4>
                            <p>Child-adult enrollment ratios within optimal variance.</p>
                            <div className="meta">
                                <span>Type: Demographic</span>
                                <span>status: Optimal</span>
                            </div>
                        </Card>
                        <Card className="matrix-card green-glow">
                            <h4>Verified Sync</h4>
                            <p>Real-time packet sync latency under 200ms.</p>
                            <div className="meta">
                                <span>System: Core</span>
                                <span>latency: 45ms</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskMatrix;
