import React, { useState } from 'react';
import { indiaMapData } from '../data/indiaMapData';
import { Shield, Activity, TrendingUp } from 'lucide-react';
import './RiskAnalytics.css';

const RiskAnalytics = () => {
    const [activeState, setActiveState] = useState(null);
    const [activeLayer, setActiveLayer] = useState('risk'); // risk, load, readiness, maturity
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    // 1. Biometric Hub Velocity Data (Real-world trends from Aadhaar dataset)
    const velocityData = [
        { state: "Andhra Pradesh", youthVel: 349, adultMag: 276, status: "Peak" },
        { state: "Bihar", youthVel: 767, adultMag: 980, status: "Tension" },
        { state: "Gujarat", youthVel: 128, adultMag: 512, status: "Optimal" },
        { state: "Assam", youthVel: 63, adultMag: 145, status: "Steady" },
        { state: "Odisha", youthVel: 215, adultMag: 442, status: "Surging" }
    ];

    // 2. Representative Aadhaar Biometric Metrics (Age 5-17 vs 17+)
    const biometricData = [
        { state: "Haryana", youth: 280, adult: 577, maturity: 0.92 },
        { state: "Bihar", youth: 144, adult: 369, maturity: 0.68 },
        { state: "J&K", youth: 643, adult: 1091, maturity: 0.85 },
        { state: "Tamil Nadu", youth: 271, adult: 815, maturity: 0.95 },
        { state: "Maharashtra", youth: 155, adult: 529, maturity: 0.88 }
    ];

    // 3. LEADS Logistics Maturity categories with Reliability Scores
    const leadsMetrics = {
        achievers: [
            { name: "Haryana", reliability: 94 },
            { name: "Tamil Nadu", reliability: 92 },
            { name: "Gujarat", reliability: 96 }
        ],
        fastMovers: [
            { name: "Maharashtra", reliability: 85 },
            { name: "Kerala", reliability: 88 }
        ],
        aspirers: [
            { name: "Bihar", reliability: 62 },
            { name: "Jharkhand", reliability: 58 }
        ]
    };

    // 4. Operational Readiness Model
    const readinessData = [
        { pillar: "Infrastructure", score: 88, trend: "+4.2%" },
        { pillar: "Service Quality", score: 76, trend: "+1.8%" },
        { pillar: "Regulatory Ease", score: 82, trend: "+3.5%" },
        { pillar: "Digital Trust", score: 91, trend: "+5.0%" }
    ];

    const getMapColor = (state) => {
        if (!state) return 'rgba(0, 255, 136, 0.1)';

        if (activeLayer === 'risk') {
            const val = state.risk || 0;
            if (val >= 8) return 'rgba(255, 0, 0, 0.6)';
            if (val >= 6) return 'rgba(255, 102, 0, 0.6)';
            if (val >= 4) return 'rgba(255, 204, 0, 0.6)';
            return 'rgba(0, 255, 136, 0.4)';
        }

        if (activeLayer === 'load') {
            const val = state.load || 0;
            if (val >= 80) return 'rgba(255, 0, 150, 0.6)';
            if (val >= 60) return 'rgba(150, 0, 255, 0.6)';
            if (val >= 40) return 'rgba(0, 150, 255, 0.6)';
            return 'rgba(0, 255, 255, 0.4)';
        }

        if (activeLayer === 'readiness') {
            const val = state.risk ? (10 - state.risk) * 10 : 50; // Inverse of risk for demo
            if (val >= 80) return 'rgba(0, 255, 136, 0.6)';
            if (val >= 60) return 'rgba(173, 255, 47, 0.6)';
            if (val >= 40) return 'rgba(255, 255, 0, 0.6)';
            return 'rgba(255, 69, 0, 0.4)';
        }

        if (activeLayer === 'maturity') {
            const val = state.load ? (state.load / 100) * 10 : 5; // Load-based for demo
            if (val >= 8) return 'rgba(0, 200, 255, 0.6)';
            if (val >= 6) return 'rgba(100, 150, 255, 0.6)';
            if (val >= 4) return 'rgba(150, 100, 255, 0.6)';
            return 'rgba(200, 50, 255, 0.4)';
        }

        if (activeLayer === 'age_ratio') {
            const val = (state.ageRatio || 0.3) * 100;
            if (val >= 45) return 'rgba(0, 255, 255, 0.7)'; // High youth
            if (val >= 40) return 'rgba(0, 200, 255, 0.6)';
            if (val >= 35) return 'rgba(0, 150, 255, 0.5)';
            return 'rgba(0, 100, 255, 0.4)'; // Lower youth ratio
        }

        if (activeLayer === 'biometric_failure') {
            const val = state.biometricFailure || 0;
            if (val >= 6) return 'rgba(255, 50, 50, 0.8)'; // High failure
            if (val >= 4) return 'rgba(255, 100, 0, 0.7)';
            if (val >= 2) return 'rgba(255, 200, 0, 0.6)';
            return 'rgba(0, 255, 136, 0.5)'; // Stable
        }

        return 'rgba(0, 255, 136, 0.4)';
    };

    const layers = [
        { id: 'risk', label: 'Risk Index', icon: <Shield size={14} /> },
        { id: 'load', label: 'Infra Load', icon: <Activity size={14} /> },
        { id: 'readiness', label: 'Op Readiness', icon: <TrendingUp size={14} /> },
        { id: 'maturity', label: 'Logistics Maturity', icon: <Activity size={14} /> },
        { id: 'age_ratio', label: 'Age Ratio', icon: <Activity size={14} /> },
        { id: 'biometric_failure', label: 'Biometric Failure', icon: <Shield size={14} /> }
    ];

    return (
        <section id="risk-analytics" className="risk-analytics">
            <div className="section-header">
                <span className="subtitle">Intelligence Dashboard</span>
                <h2 className="title">National <span className="highlight">Infrastructure Analytics</span></h2>
                <div className="data-pulse-line"></div>
            </div>

            <div className="analytics-grid" onMouseMove={handleMouseMove}>
                {/* 0. Multi-Layer National Map */}
                <div className="analytics-card glass map-card">
                    <div className="card-header">
                        <div className="title-group">
                            <h3>National Intelligence Map</h3>
                            <p className="card-subtitle">Layer: <span className="highlight">{activeLayer.toUpperCase()}</span></p>
                        </div>
                        <div className="map-layer-toggles">
                            {layers.map(layer => (
                                <button
                                    key={layer.id}
                                    className={`layer-btn ${activeLayer === layer.id ? 'active' : ''}`}
                                    onClick={() => setActiveLayer(layer.id)}
                                >
                                    {layer.icon}
                                    <span>{layer.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="risk-map-container">
                        <div className="map-ui-overlay">
                            <div className="map-legend-vertical">
                                <div className="legend-item"><span className="dot p1"></span> 80-100%</div>
                                <div className="legend-item"><span className="dot p2"></span> 60-80%</div>
                                <div className="legend-item"><span className="dot p3"></span> 40-60%</div>
                                <div className="legend-item"><span className="dot p4"></span> 0-40%</div>
                            </div>
                        </div>
                        <svg viewBox="0 0 612 696" className="risk-india-map">
                            {indiaMapData.map((state) => (
                                <path
                                    key={state.id}
                                    d={state.path}
                                    fill={getMapColor(state)}
                                    stroke="rgba(255,255,255,0.2)"
                                    strokeWidth="0.5"
                                    className="risk-state-path"
                                    onMouseEnter={() => setActiveState(state)}
                                    onMouseLeave={() => setActiveState(null)}
                                />
                            ))}
                        </svg>

                        {activeState && (
                            <div className="map-hover-stats" style={{
                                left: mousePos.x > window.innerWidth / 2 ? 'auto' : '20px',
                                right: mousePos.x > window.innerWidth / 2 ? '20px' : 'auto'
                            }}>
                                <div className="tooltip-header">
                                    <h4>{activeState.name}</h4>
                                    <div className="system-status-badge" style={{ backgroundColor: activeLayer === 'risk' ? (activeState.risk > 7 ? 'rgba(255, 0, 0, 0.6)' : 'rgba(0, 255, 136, 0.6)') : 'rgba(0, 150, 255, 0.6)' }}>
                                        {activeLayer === 'risk' ? (activeState.risk > 7 ? 'CRITICAL' : 'STABLE') : 'OPERATIONAL'}
                                    </div>
                                </div>
                                <div className="stat-row">
                                    <span>Primary Score:</span>
                                    <span className="val highlight">
                                        {activeLayer === 'risk' && activeState.risk}
                                        {activeLayer === 'load' && `${activeState.load}%`}
                                        {activeLayer === 'readiness' && `${Math.round((10 - activeState.risk) * 10)}%`}
                                        {activeLayer === 'maturity' && `${Math.round((activeState.load / 100) * 100)}%`}
                                        {activeLayer === 'age_ratio' && `${Math.round((activeState.ageRatio || 0.3) * 100)}% Youth`}
                                        {activeLayer === 'biometric_failure' && `${activeState.biometricFailure || 0}% Failure`}
                                    </span>
                                </div>
                                <div className="stat-info">
                                    <p className="problem-text"><strong>Problem:</strong> {activeState.problem || "No anomalies detected."}</p>
                                    {activeState.solutions && (
                                        <div className="solutions-list">
                                            <strong>AI Solution Protocol:</strong>
                                            <ul>
                                                {activeState.solutions.map((s, i) => (
                                                    <li key={i}>{s}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 1. Biometric Hub Velocity (NEW Table) */}
                <div className="analytics-card glass table-card">
                    <div className="card-header">
                        <h3>Biometric Hub Velocity</h3>
                        <span className="source-tag">Live Feed: B2-Pulse</span>
                    </div>
                    <div className="velocity-table-container">
                        <table className="neon-table">
                            <thead>
                                <tr>
                                    <th>Region</th>
                                    <th>5-17 Vel</th>
                                    <th>17+ Mag</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {velocityData.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.state}</td>
                                        <td>{d.youthVel}</td>
                                        <td>{d.adultMag}</td>
                                        <td>
                                            <span className={`status-pill ${d.status.toLowerCase()}`}>{d.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 2. Demographic Balance Diagram (NEW SVG Visualization) */}
                <div className="analytics-card glass diagram-card">
                    <div className="card-header">
                        <h3>Demographic Balance</h3>
                        <span className="source-tag">Ratio: Under-18 Layer</span>
                    </div>
                    <div className="balance-viz">
                        <svg viewBox="0 0 400 200" className="balance-svg">
                            {/* Horizontal separators */}
                            {[50, 100, 150].map(y => (
                                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" />
                            ))}
                            {/* Balance Bars */}
                            {biometricData.map((d, i) => {
                                const total = d.youth + d.adult;
                                const yRatio = (d.youth / total) * 160;
                                const aRatio = (d.adult / total) * 160;
                                return (
                                    <g key={i} transform={`translate(${i * 80 + 40}, 0)`}>
                                        <rect x="-15" y={180 - aRatio - yRatio} width="30" height={yRatio} fill="var(--neon-cyan)" opacity="0.8" rx="4" />
                                        <rect x="-15" y={180 - aRatio} width="30" height={aRatio} fill="rgba(0, 255, 255, 0.1)" stroke="var(--neon-cyan)" strokeWidth="1" rx="4" />
                                        <text x="0" y="195" textAnchor="middle" className="viz-label">{d.state.split(' ')[0]}</text>
                                    </g>
                                );
                            })}
                        </svg>
                        <div className="viz-legend">
                            <span className="item youth">Youth (5-17)</span>
                            <span className="item adult">Adult (17+)</span>
                        </div>
                    </div>
                </div>

                {/* 3. Operational Readiness Model */}
                <div className="analytics-card glass readiness-card">
                    <div className="card-header">
                        <h3>Operational Readiness</h3>
                        <span className="source-tag">Model: AIRS-B2</span>
                    </div>
                    <div className="readiness-viz">
                        {readinessData.map((d, i) => (
                            <div key={i} className="readiness-item">
                                <div className="readiness-meta">
                                    <span className="label">{d.pillar}</span>
                                    <span className="trend">{d.trend}</span>
                                </div>
                                <div className="readiness-ring">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path className="circle"
                                            strokeDasharray={`${d.score}, 100`}
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <text x="18" y="20.35" className="percentage">{d.score}%</text>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. LEADS Logistics Maturity */}
                <div className="analytics-card glass leads-card">
                    <div className="card-header">
                        <h3>Logistics Maturity Index</h3>
                        <span className="source-tag">Framework: LEADS 2024</span>
                    </div>
                    <div className="leads-viz">
                        <div className="leads-pillar achiever">
                            <div className="pillar-top">Achievers</div>
                            <div className="pillar-body">
                                {leadsMetrics.achievers.map((s, i) => (
                                    <div key={i} className="pillar-item">
                                        <span>{s.name}</span>
                                        <span className="rel-value">{s.reliability}% REL</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="leads-pillar mover">
                            <div className="pillar-top">Fast Movers</div>
                            <div className="pillar-body">
                                {leadsMetrics.fastMovers.map((s, i) => (
                                    <div key={i} className="pillar-item">
                                        <span>{s.name}</span>
                                        <span className="rel-value">{s.reliability}% REL</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="leads-pillar aspirer">
                            <div className="pillar-top">Aspirers</div>
                            <div className="pillar-body">
                                {leadsMetrics.aspirers.map((s, i) => (
                                    <div key={i} className="pillar-item">
                                        <span>{s.name}</span>
                                        <span className="rel-value">{s.reliability}% REL</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskAnalytics;
