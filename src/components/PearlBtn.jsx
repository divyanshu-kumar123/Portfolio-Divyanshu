import React from 'react';
import './PearlBtn.css';

const PearlBtn = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  return (
    <button
      type={type}
      className={`pearl-btn pearl-btn--${variant} pearl-btn--${size} ${className} ${disabled ? 'pearl-btn--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="pearl-btn__content">
        {children}
      </span>
      <div className="pearl-btn__shine"></div>
    </button>
  );
};

export default PearlBtn;
