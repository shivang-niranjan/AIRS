import React from 'react';
import { indiaMapData } from '../data/indiaMapData';
import './RiskAnalytics.css';

const RiskAnalytics = () => {
    // 1. Representative Aadhaar Biometric Metrics (Based on local dataset analysis)
    const biometricData = [
        { state: "Haryana", youth: 280, adult: 577, maturity: 0.92 },
        { state: "Bihar", youth: 144, adult: 369, maturity: 0.68 },
        { state: "J&K", youth: 643, adult: 1091, maturity: 0.85 },
        { state: "Tamil Nadu", youth: 271, adult: 815, maturity: 0.95 },
        { state: "Maharashtra", youth: 155, adult: 529, maturity: 0.88 }
    ];

    // 2. LEADS Logistics Maturity categories with Reliability Scores
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

    // 3. Operational Readiness Model (Replacement for Risk Indices)
    const readinessData = [
        { pillar: "Infrastructure", score: 88, trend: "+4.2%" },
        { pillar: "Service Quality", score: 76, trend: "+1.8%" },
        { pillar: "Regulatory Ease", score: 82, trend: "+3.5%" },
        { pillar: "Digital Trust", score: 91, trend: "+5.0%" }
    ];

    // Mock trend data for the area chart
    const trendData = [30, 45, 38, 55, 48, 70, 65, 85, 80, 95];

    return (
        <section id="risk-analytics" className="risk-analytics">
            <div className="section-header">
                <span className="subtitle">Intelligence Dashboard</span>
                <h2 className="title">National <span className="highlight">Infrastructure Analytics</span></h2>
                <div className="data-pulse-line"></div>
            </div>

            <div className="analytics-grid">
                {/* 1. Operational Readiness Model */}
                <div className="analytics-card glass container-glow readiness-card">
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

                {/* 2. Biometric Engagement (Aadhaar Data) */}
                <div className="analytics-card glass biometric-card">
                    <div className="card-header">
                        <h3>Digital Identity Pulse</h3>
                        <span className="source-tag">Dataset: Aadhaar Biometric</span>
                    </div>
                    <div className="biometric-stats">
                        {biometricData.map((d, i) => (
                            <div key={i} className="bio-row">
                                <div className="bio-info">
                                    <span className="name">{d.state}</span>
                                    <span className="maturity">{(d.maturity * 100).toFixed(0)}% Readiness</span>
                                </div>
                                <div className="bio-viz">
                                    <div className="bio-youth" style={{ width: `${(d.youth / (d.youth + d.adult)) * 100}%` }}></div>
                                    <div className="bio-adult" style={{ width: `${(d.adult / (d.youth + d.adult)) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="chart-legend-simple">
                        <span className="legend-item youth">Youth (5-17)</span>
                        <span className="legend-item adult">Adult (17+)</span>
                    </div>
                </div>

                {/* 3. LEADS Logistics Maturity */}
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

                {/* 4. Forecasting Stress Vectors */}
                <div className="analytics-card glass stress-card">
                    <div className="card-header">
                        <h3>Predictive Stress Vectors</h3>
                        <span className="source-tag">Model: Neural Failover</span>
                    </div>
                    <div className="chart-container">
                        <svg viewBox="0 0 400 200" className="vector-chart">
                            <defs>
                                <linearGradient id="vectorGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--neon-cyan)" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="var(--neon-cyan)" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {trendData.map((val, i) => (
                                <line
                                    key={i}
                                    x1={i * 44.4} y1="0" x2={i * 44.4} y2="200"
                                    stroke="rgba(255,255,255,0.05)" strokeDasharray="4"
                                />
                            ))}
                            <path
                                d={`M 0 200 ${trendData.map((val, i) => `L ${i * 44.4} ${200 - val}`).join(' ')} L 400 200 Z`}
                                fill="url(#vectorGradient)"
                                className="area-path"
                            />
                            <path
                                d={`M 0 ${200 - trendData[0]} ${trendData.map((val, i) => `L ${i * 44.4} ${200 - val}`).join(' ')}`}
                                fill="none" stroke="var(--neon-cyan)" strokeWidth="2"
                                className="line-path"
                            />
                        </svg>
                    </div>
                    <div className="forecast-footer">
                        <span className="status-on">Predictive Engine Active</span>
                        <span className="variance">Variance: &plusmn;2.4%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskAnalytics;
