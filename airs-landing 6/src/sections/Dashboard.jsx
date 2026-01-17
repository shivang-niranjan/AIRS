import React, { useState } from 'react';
import Card from '../components/Card';
import CausalGraph from '../components/CausalGraph';
import FingerprintMap from '../components/FingerprintMap';
import {
    AlertCircle, TrendingUp, MapPin, Users, HelpCircle,
    ChevronDown, ChevronUp, Wind, Thermometer, Zap, EyeOff, Activity
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="dashboard" className="dashboard-section">
            <div className="section-header center animate-on-scroll">
                <h2 className="section-title">The AIRS Universe</h2>
                <p className="section-subtitle">Real-time Anomaly Detection & System Intelligence</p>
            </div>

            {/* NEW: Shadow Demand & Silence Zone Row */}
            <div className="intelligence-row animate-on-scroll delay-100">

                {/* Shadow Demand: Census vs Aadhaar */}
                <Card title="Shadow Demand Detection" className="intelligence-card">
                    <div className="shadow-demand-visual">
                        <div className="population-group">
                            <div className="human-icon solid"><Users size={24} /></div>
                            <div className="human-icon solid"><Users size={24} /></div>
                            <div className="human-icon solid"><Users size={24} /></div>
                            <span className="label">Census Data</span>
                        </div>
                        <div className="connector-gap">
                            <span className="gap-label">24% UNCOVERED</span>
                            <div className="gap-line"></div>
                        </div>
                        <div className="population-group">
                            <div className="human-icon solid"><Users size={24} /></div>
                            <div className="human-icon hollow"><Users size={24} /></div>
                            <div className="human-icon hollow"><Users size={24} /></div>
                            <span className="label">Aadhaar Covered</span>
                        </div>
                    </div>
                    <div className="intelligence-meta">
                        <p><EyeOff size={14} /> <strong>Invisible Citizens:</strong> 1.2M identified via population gap analysis.</p>
                    </div>
                </Card>

                {/* Silence Zone: Absence of Data */}
                <Card title="Silence Zone Analysis" className="intelligence-card">
                    <div className="silence-chart">
                        <div className="bar-group">
                            <div className="bar filled" style={{ height: '60%' }}></div>
                            <span className="bar-label">Anand</span>
                        </div>
                        <div className="bar-group">
                            <div className="bar filled" style={{ height: '40%' }}></div>
                            <span className="bar-label">Anantapur</span>
                        </div>
                        <div className="bar-group warning">
                            {/* Hollow/Ghost bar representing missing expected data */}
                            <div className="bar ghost" style={{ height: '80%' }}></div>
                            <span className="bar-label">Bara Banki</span>
                        </div>
                        <div className="bar-group">
                            <div className="bar filled" style={{ height: '55%' }}></div>
                            <span className="bar-label">Bhilwara</span>
                        </div>
                    </div>
                    <div className="intelligence-meta">
                        <p><Zap size={14} /> <strong>Signal:</strong> Sudden silence in District C suggests comprehensive infrastructure failure, not zero demand.</p>
                    </div>
                </Card>
            </div>

            <div className="dashboard-grid animate-on-scroll delay-200">
                {/* Anomaly Card 1 with Expandable Logic */}
                <Card title="The Adult Surge" className="anomaly-card" glow>
                    <div className="anomaly-header">
                        <span className="location"><MapPin size={14} /> Nandurbar</span>
                        <span className="risk-level critical">CRITICAL</span>
                    </div>
                    <div className="anomaly-stat">
                        <span className="value">95:1</span>
                        <span className="label">Adult:Child Ratio</span>
                    </div>
                    <p className="anomaly-desc">
                        Abnormal 300% surge in adult enrollments detected in tribal belt over 48 hours.
                    </p>

                    {/* Expandable Reasoning Panel */}
                    <div className={`reasoning-panel ${expandedCard === 'card1' ? 'open' : ''}`}>
                        <div className="reasoning-trigger" onClick={() => toggleExpand('card1')}>
                            <HelpCircle size={14} /> Why this decision?
                            {expandedCard === 'card1' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>

                        {expandedCard === 'card1' && (
                            <div className="reasoning-content">
                                <h4>Causal Analysis (AI)</h4>
                                <CausalGraph />
                                <div className="ai-verdict">
                                    <strong>Recommendation:</strong> Deploy 2 temporary vans to clear backlog.
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="anomaly-trend">
                        <TrendingUp size={16} /> Trending Up
                    </div>
                </Card>

                <div className="map-placeholder-container animate-on-scroll delay-200">
                    <div className="map-placeholder-glass">
                        <FingerprintMap />
                    </div>
                </div>

                {/* Anomaly Card 2 with Expandable Logic */}
                <Card title="The Sunday Warrior" className="anomaly-card">
                    <div className="anomaly-header">
                        <span className="location"><MapPin size={14} /> Moradabad</span>
                        <span className="risk-level warning">WARNING</span>
                    </div>
                    <div className="anomaly-stat">
                        <span className="value">+412%</span>
                        <span className="label">Weekend Activity</span>
                    </div>
                    <p className="anomaly-desc">
                        Unusual enrollment spikes recorded on non-working days (Sundays).
                    </p>

                    {/* Expandable Reasoning Panel */}
                    <div className={`reasoning-panel ${expandedCard === 'card2' ? 'open' : ''}`}>
                        <div className="reasoning-trigger" onClick={() => toggleExpand('card2')}>
                            <HelpCircle size={14} /> Why this decision?
                            {expandedCard === 'card2' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </div>

                        {expandedCard === 'card2' && (
                            <div className="reasoning-content">
                                <h4>Causal Analysis (AI)</h4>
                                <ul className="factors-list">
                                    <li className="factor">
                                        <Users size={14} className="icon-user" />
                                        <span><strong>Operator Behavior:</strong> Specific operator ID #8821 active.</span>
                                    </li>
                                    <li className="factor">
                                        <Zap size={14} className="icon-system" />
                                        <span><strong>System Bypass:</strong> GPS geofence alerts triggered.</span>
                                    </li>
                                </ul>
                                <div className="ai-verdict">
                                    <strong>Recommendation:</strong> Immediate audit of Operator #8821.
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="anomaly-trend">
                        <AlertCircle size={16} /> Needs Audit
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Dashboard;
