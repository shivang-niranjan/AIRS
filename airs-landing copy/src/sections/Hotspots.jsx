import React, { useState } from 'react';
import Card from '../components/Card';
import { CloudRain, Activity, ShieldAlert, Cpu } from 'lucide-react';
import { indiaMapData } from '../data/indiaMapData';
import './Hotspots.css';

const Hotspots = () => {
    const [activeDistrict, setActiveDistrict] = useState(null);
    const [viewMode, setViewMode] = useState('risk'); // risk, stress, weather
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Color Scales
    const getModeColor = (d) => {
        if (!d) return '#00ff88'; // Default to Green (Safe/No Decision)
        if (viewMode === 'stress') {
            if (d.load >= 80) return '#ff0000'; // Critical
            if (d.load >= 60) return '#ff6600'; // High
            if (d.load >= 40) return '#ffcc00'; // Moderate
            return '#00ff88'; // Low
        }
        if (viewMode === 'risk') {
            if (d.risk >= 8.0) return '#ff0000';
            if (d.risk >= 6.0) return '#ff4d4d';
            if (d.risk >= 4.0) return '#ffcc00';
            return '#00ff88';
        }
        if (viewMode === 'weather') {
            const map = {
                'Monsoon': '#4dc4ff', 'Rainy': '#4dc4ff', 'Heavy Rain': '#0055ff',
                'Clear': '#ffcc00', 'Sunny': '#ffff00', 'Hot': '#ff4400',
                'Cloudy': '#bbbbbb', 'Overcast': '#888888',
                'Foggy': '#aaaaaa', 'Hazy': '#dddddd',
                'Snowy': '#ffffff', 'Freezing': '#ccffff',
                'Thunderstorm': '#8800ff', 'Cyclonic': '#ff00ff', 'Cyclonic Alert': '#ff00ff'
            };
            return map[d.weather] || '#aaaaaa';
        }
        return '#00ff88'; // Default to Green (Safe/No Decision)
    };

    return (
        <section id="map" className="hotspots-section">
            <div className="hotspots-content">
                <div className="text-side animate-on-scroll">
                    <h2 className="section-title">Geographic Intelligence</h2>
                    <p className="section-subtitle">Live State-Level Monitoring</p>

                    <div className="map-controls">
                        <button
                            className={`control-btn ${viewMode === 'risk' ? 'active' : ''}`}
                            onClick={() => setViewMode('risk')}
                        >
                            <ShieldAlert size={16} /> Risk
                        </button>
                        <button
                            className={`control-btn ${viewMode === 'stress' ? 'active' : ''}`}
                            onClick={() => setViewMode('stress')}
                        >
                            <Cpu size={16} /> System Stress
                        </button>
                        <button
                            className={`control-btn ${viewMode === 'weather' ? 'active' : ''}`}
                            onClick={() => setViewMode('weather')}
                        >
                            <CloudRain size={16} /> Weather
                        </button>
                    </div>

                    <div className="district-details">
                        {activeDistrict ? (
                            <Card className="district-card glow" title={activeDistrict.name}>
                                {viewMode === 'risk' && (
                                    <>
                                        <div className="detail-row">
                                            <span>Risk Score:</span>
                                            <span className="score critical" style={{ color: getModeColor(activeDistrict) }}>{activeDistrict.risk}</span>
                                        </div>
                                        <div className="detail-row">
                                            <span>Status:</span>
                                            <span className="action">{activeDistrict.risk > 7 ? 'CRITICAL' : 'MONITOR'}</span>
                                        </div>
                                    </>
                                )}
                                {viewMode === 'stress' && (
                                    <>
                                        <div className="detail-row">
                                            <span>Infra Load:</span>
                                            <span className="score critical" style={{ color: getModeColor(activeDistrict) }}>
                                                {activeDistrict.load}%
                                            </span>
                                        </div>
                                        <div className="detail-row">
                                            <span>Status:</span>
                                            <span className="action">{activeDistrict.load > 80 ? 'OVERLOAD' : 'STABLE'}</span>
                                        </div>
                                    </>
                                )}
                                {viewMode === 'weather' && (
                                    <>
                                        <div className="detail-row">
                                            <span>Condition:</span>
                                            <span className="score" style={{ color: getModeColor(activeDistrict) }}>{activeDistrict.weather}</span>
                                        </div>
                                    </>
                                )}
                            </Card>
                        ) : (
                            <div className="placeholder-text">
                                <p>Hover over a region to view live {viewMode} data.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="map-side" onMouseMove={handleMouseMove}>
                    <div className="map-container">
                        <svg viewBox="0 0 612 696" className="india-map-svg">
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {indiaMapData.map((state) => (
                                <path
                                    key={state.id}
                                    d={state.path}
                                    fill={getModeColor(state)}
                                    fillOpacity={activeDistrict?.id === state.id ? 1 : 0.7}
                                    stroke="rgba(255, 255, 255, 0.6)"
                                    strokeWidth="1.5"
                                    className="state-path"
                                    onMouseEnter={() => setActiveDistrict(state)}
                                    onMouseLeave={() => setActiveDistrict(null)}
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </svg>
                    </div>

                    {activeDistrict && (
                        <div
                            className="map-intelligence-tooltip"
                            style={{
                                left: mousePos.x + 20,
                                top: mousePos.y + 20,
                                borderColor: getModeColor(activeDistrict)
                            }}
                        >
                            <div className="tooltip-header">
                                <h3>{activeDistrict.name}</h3>
                                <div className="risk-badge" style={{ backgroundColor: getModeColor(activeDistrict) }}>
                                    Risk: {activeDistrict.risk}
                                </div>
                            </div>
                            <div className="tooltip-body">
                                <section>
                                    <h4>Primary Limitation:</h4>
                                    <p>{activeDistrict.problem || "Information pending for this region."}</p>
                                </section>
                                {activeDistrict.solutions && (
                                    <section>
                                        <h4>AI Solution Protocol:</h4>
                                        <ul>
                                            {activeDistrict.solutions.map((s, i) => (
                                                <li key={i}>{s}</li>
                                            ))}
                                        </ul>
                                    </section>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hotspots;
