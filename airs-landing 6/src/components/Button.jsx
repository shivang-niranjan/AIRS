import React, { useRef, useState } from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const btnRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!btnRef.current) return;
        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const x = (e.clientX - centerX) * 0.2; // 0.2 is the magnetic strength
        const y = (e.clientY - centerY) * 0.2;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <button
            ref={btnRef}
            className={`magnetic-btn ${variant} ${className}`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            <span className="btn-content">{children}</span>
            <div className="btn-glow"></div>
        </button>
    );
};

export default Button;
