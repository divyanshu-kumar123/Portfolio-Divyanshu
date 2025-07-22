import React, { useEffect, useState } from 'react';
import './SquareBackground.css';

const SquareBackground = ({ 
  particleCount = 150,
  enableMatrix = true,
  enableParticles = true,
  enableScanLines = true
}) => {
  const [particles, setParticles] = useState([]);
  const [matrixColumns, setMatrixColumns] = useState([]);

  useEffect(() => {
    // Generate floating particles
    if (enableParticles) {
      const newParticles = [];
      for (let i = 0; i < particleCount; i++) {
        const delay = Math.random() * 10;
        const duration = 4 + Math.random() * 6;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = 1 + Math.random() * 3;
        const shape = Math.random() > 0.7 ? 'diamond' : Math.random() > 0.5 ? 'triangle' : 'square';
        const color = Math.random() > 0.6 ? '#00f5ff' : Math.random() > 0.3 ? '#ff0080' : '#a855f7';
        
        newParticles.push({
          id: i,
          x,
          y,
          size,
          delay,
          duration,
          shape,
          color
        });
      }
      setParticles(newParticles);
    }

    // Generate matrix rain columns
    if (enableMatrix) {
      const columns = [];
      const columnCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < columnCount; i++) {
        columns.push({
          id: i,
          x: (i * 20) + Math.random() * 10,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
          opacity: 0.1 + Math.random() * 0.2
        });
      }
      setMatrixColumns(columns);
    }
  }, [particleCount, enableMatrix, enableParticles]);

  return (
    <div className="futuristic-background">
      {/* Scan lines effect */}
      {enableScanLines && <div className="scan-lines"></div>}
      
      {/* Matrix rain effect */}
      {enableMatrix && (
        <div className="matrix-container">
          {matrixColumns.map((column) => (
            <div
              key={column.id}
              className="matrix-column"
              style={{
                left: `${column.x}px`,
                animationDelay: `${column.delay}s`,
                animationDuration: `${column.duration}s`,
                opacity: column.opacity
              }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="matrix-char"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Floating particles */}
      {enableParticles && (
        <div className="particles-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`floating-particle particle-${particle.shape}`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Grid overlay */}
      <div className="cyber-grid"></div>
      
      {/* Ambient glow spheres */}
      <div className="ambient-spheres">
        <div className="sphere sphere-1"></div>
        <div className="sphere sphere-2"></div>
        <div className="sphere sphere-3"></div>
      </div>
    </div>
  );
};

export default SquareBackground;
