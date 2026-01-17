import React from 'react';
import './CausalGraph.css';

const CausalGraph = () => {
    return (
        <div className="causal-graph-container">
            <svg width="100%" height="150" viewBox="0 0 400 150">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#00f3ff" />
                    </marker>
                </defs>

                {/* Nodes */}
                {/* Cause 1 */}
                <g className="graph-node" transform="translate(50, 40)">
                    <circle r="20" fill="rgba(255, 255, 255, 0.1)" stroke="#00f3ff" strokeWidth="2" />
                    <text x="0" y="35" textAnchor="middle" fill="#ccc" fontSize="10">Monsoon</text>
                </g>

                {/* Cause 2 */}
                <g className="graph-node" transform="translate(50, 110)">
                    <circle r="20" fill="rgba(255, 255, 255, 0.1)" stroke="#00f3ff" strokeWidth="2" />
                    <text x="0" y="35" textAnchor="middle" fill="#ccc" fontSize="10">Roads</text>
                </g>

                {/* Intermediate */}
                <g className="graph-node" transform="translate(200, 75)">
                    <circle r="25" fill="rgba(255, 0, 0, 0.1)" stroke="#ff4d4d" strokeWidth="2" />
                    <text x="0" y="40" textAnchor="middle" fill="#ff4d4d" fontSize="10">Access Block</text>
                </g>

                {/* Effect */}
                <g className="graph-node" transform="translate(350, 75)">
                    <circle r="30" fill="rgba(255, 204, 0, 0.1)" stroke="#ffcc00" strokeWidth="2" />
                    <text x="0" y="45" textAnchor="middle" fill="#ffcc00" fontSize="10">Backlog Spike</text>
                </g>

                {/* Edges */}
                <line x1="70" y1="40" x2="175" y2="75" stroke="#00f3ff" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrowhead)" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="70" y1="110" x2="175" y2="75" stroke="#00f3ff" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrowhead)" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="225" y1="75" x2="320" y2="75" stroke="#ff4d4d" strokeWidth="2" markerEnd="url(#arrowhead)" />

            </svg>
            <div className="graph-legend">
                <span>Factor</span>
                <span>→</span>
                <span className="critical">Impact</span>
                <span>→</span>
                <span className="warning">Outcome</span>
            </div>
        </div>
    );
};

export default CausalGraph;
