import React from 'react';
import './Card.css';

const Card = ({ title, children, className = '', glow = false }) => {
    return (
        <div className={`glass-card ${glow ? 'glow' : ''} ${className}`}>
            {title && <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <div className="card-line"></div>
            </div>}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
