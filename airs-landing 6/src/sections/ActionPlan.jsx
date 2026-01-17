import React from 'react';
import { Fingerprint, Eye, Map, Truck, AlertTriangle, ArrowRight, Zap, GitBranch } from 'lucide-react';
import './ActionPlan.css';

const ActionPlan = () => {
    const protocols = [
        {
            id: 1,
            trigger: { icon: Fingerprint, label: "FINGERPRINT FAILURE > 20%" },
            logic: "Biometric Erosion Detected",
            action: { icon: Eye, label: "DEPLOY IRIS SCANNERS" }
        },
        {
            id: 2,
            trigger: { icon: Map, label: "DISTANCE BARRIER > 5KM" },
            logic: "Geographic Exclusion Risk",
            action: { icon: Truck, label: "ROUTE MOBILE VAN TO CLUSTER" }
        },
        {
            id: 3,
            trigger: { icon: AlertTriangle, label: "ELDERLY POPULATION SPIKE" },
            logic: "Mobility Constraints Identified",
            action: { icon: Zap, label: "ACTIVATE DOORSTEP ENROLLMENT" }
        }
    ];

    return (
        <section id="action" className="action-section">
            <div className="section-header center animate-on-scroll">
                <h2 className="section-title">Automated Governance Protocol</h2>
                <p className="section-subtitle">Prescriptive Multi-Modal Failover System</p>
            </div>

            <div className="protocol-container animate-on-scroll delay-200">
                <div className="protocol-headers">
                    <span>RISK TRIGGER</span>
                    <span>AI REASONING</span>
                    <span>INTERVENTION</span>
                </div>

                {protocols.map((p) => (
                    <div key={p.id} className="protocol-row">
                        {/* Trigger Node */}
                        <div className="protocol-node trigger">
                            <div className="node-icon"><p.trigger.icon size={24} /></div>
                            <span className="node-label">{p.trigger.label}</span>
                        </div>

                        {/* Connection Line 1 */}
                        <div className="connection-line right">
                            <ArrowRight size={16} className="arrow-icon" />
                        </div>

                        {/* Logic Node */}
                        <div className="protocol-node logic">
                            <span className="logic-text">{p.logic}</span>
                            <GitBranch size={16} className="branch-icon" />
                        </div>

                        {/* Connection Line 2 */}
                        <div className="connection-line right">
                            <ArrowRight size={16} className="arrow-icon" />
                        </div>

                        {/* Action Node */}
                        <div className="protocol-node action">
                            <div className="node-icon"><p.action.icon size={24} /></div>
                            <span className="node-label">{p.action.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ActionPlan;
