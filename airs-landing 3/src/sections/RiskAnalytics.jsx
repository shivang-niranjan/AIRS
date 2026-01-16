import React from 'react';
import './RiskAnalytics.css';

const RiskAnalytics = () => {
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

    return (
        <section id="risk-analytics" className="risk-analytics">
            <div className="section-header">
                <span className="subtitle">Intelligence Dashboard</span>
                <h2 className="title">National <span className="highlight">Infrastructure Analytics</span></h2>
                <div className="data-pulse-line"></div>
            </div>

            <div className="analytics-grid">
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
