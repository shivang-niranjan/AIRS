import React, { useState } from 'react';
import './FingerprintMap.css';

const FingerprintMap = () => {
    const [hoveredNode, setHoveredNode] = useState(null);

    // Deepened Biometric Nodes (15+ districts)
    const nodes = [
        { id: 1, x: 40, y: 30, label: "Anand", status: "Anomaly Detected", type: "Ratio Mismatch" },
        { id: 2, x: 65, y: 55, label: "Anantapur", status: "Warning", type: "Sunday Surge" },
        { id: 3, x: 30, y: 70, label: "Bara Banki", status: "Verified", type: "Steady Flow" },
        { id: 4, x: 75, y: 25, label: "Bhilwara", status: "Verified", type: "High Density" },
        { id: 5, x: 50, y: 80, label: "Bhojpur", status: "Anomaly Detected", type: "Ghost Entry" },
        { id: 6, x: 20, y: 45, label: "Cachar", status: "Verified", type: "Stable" },
        { id: 7, x: 80, y: 65, label: "Chamba", status: "Warning", type: "Terrain Delay" },
        { id: 8, x: 15, y: 85, label: "Cuttack", status: "Verified", type: "Rapid Sync" },
        { id: 9, x: 55, y: 15, label: "Dahod", status: "Anomaly Detected", type: "Identity Clash" },
        { id: 10, x: 85, y: 40, label: "Davangere", status: "Verified", type: "Optimal" },
        { id: 11, x: 35, y: 10, label: "East Godavari", status: "Warning", type: "Network Lag" },
        { id: 12, x: 10, y: 25, label: "Guntur", status: "Verified", type: "Live Feed" },
        { id: 13, x: 90, y: 90, label: "Darbhanga", status: "Anomaly Detected", type: "Batch Failure" },
        { id: 14, x: 25, y: 100, label: "Patna", status: "Verified", type: "High Velocity" },
        { id: 15, x: 70, y: 105, label: "Saharsa", status: "Warning", type: "Sync Latency" },
        { id: 16, x: 45, y: 50, label: "Madhepura", status: "Verified", type: "Full Coverage" }
    ];

    return (
        <div className="fingerprint-container">
            <svg viewBox="0 0 100 120" className="fingerprint-svg">
                <defs>
                    <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--neon-cyan)" stopOpacity="0" />
                        <stop offset="50%" stopColor="var(--neon-cyan)" stopOpacity="1" />
                        <stop offset="100%" stopColor="var(--neon-cyan)" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Stylized Fingerprint Ridges */}
                <g className="ridges">
                    {[10, 20, 30, 40, 50, 60, 70, 80].map((r, i) => (
                        <path
                            key={i}
                            d={`M ${50 - r / 2} ${60 - r / 2} Q 50 ${60 - r} ${50 + r / 2} ${60 - r / 2} T ${50 - r / 2} ${60 + r / 2} T ${50 + r / 2} ${60 + r / 2}`}
                            fill="none"
                            stroke="rgba(0, 255, 255, 0.15)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            className="ridge-path"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                    <path d="M 45 60 Q 50 40 55 60 T 45 80" fill="none" stroke="rgba(0, 255, 255, 0.3)" strokeWidth="1.5" />
                    <path d="M 48 60 Q 50 50 52 60 T 48 70" fill="none" stroke="rgba(0, 255, 255, 0.5)" strokeWidth="2" />
                </g>

                {/* Scanning Beam */}
                <rect className="scan-beam" width="100" height="2" fill="url(#scanGradient)" />

                {/* Data Nodes */}
                {nodes.map(node => (
                    <g
                        key={node.id}
                        className={`node-group ${node.status === 'Anomaly Detected' ? 'anomaly' : ''} ${node.status === 'Warning' ? 'warn' : ''}`}
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <circle cx={node.x} cy={node.y} r="1.2" className="node-core" />
                        <circle cx={node.x} cy={node.y} r="3.5" className="node-pulse" />
                    </g>
                ))}
            </svg>

            {/* Hover Tooltip */}
            {hoveredNode && (
                <div className="fingerprint-tooltip glass">
                    <div className="tooltip-header">
                        <span className="dot"></span>
                        <h4>{hoveredNode.label}</h4>
                    </div>
                    <div className="tooltip-body">
                        <p className="type">{hoveredNode.type}</p>
                        <p className={`status ${hoveredNode.status.toLowerCase().replace(' ', '-')}`}>
                            {hoveredNode.status}
                        </p>
                    </div>
                </div>
            )}

            <div className="scan-status">
                <span className="bit">BIO-AUTH: MULTI-REGION</span>
                <span className="bit">NODES: {nodes.length} (SYNCED)</span>
            </div>
        </div>
    );
};

export default FingerprintMap;
