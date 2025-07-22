import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PearlBtn from '../components/PearlBtn';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Divyanshu Kumar";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const handleViewProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col lg={8} md={10} className="mx-auto text-center">
            <div className="hero-content animate-slideInUp">
              <div className="hero-greeting glitch-effect">
                <span className="greeting-text">Hi, My name is</span>
              </div>
              
              <h1 className="hero-title">
                <span className="hero-name gradient-text neon-text">
                  {displayText}
                  <span className="cursor">|</span>
                </span>
              </h1>
              
              <div className="hero-subtitle-container">
                <p className="hero-subtitle">
                  I am a{' '}
                  <span className="role-highlight hologram-effect">Software Engineer</span>
                  {' '}at{' '}
                  <span className="company-highlight cyber-border">HCLTech</span>
                </p>
              </div>
              
              <div className="hero-description-container">
                <p className="hero-description">
                  <span className="description-line">Passionate about creating scalable web applications</span>
                  <span className="description-line">with modern technologies.</span>
                  <span className="description-line highlight-line">
                    Specialized in React, Node.js, and the MERN stack.
                  </span>
                </p>
              </div>
              
              <div className="hero-actions">
                <PearlBtn 
                  size="large" 
                  onClick={handleViewProjects}
                  className="hero-btn glow-box"
                >
                  <span className="btn-text">View Projects</span>
                  <span className="btn-glow"></span>
                </PearlBtn>
                
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number neon-text">2+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat-separator"></div>
                  <div className="stat-item">
                    <span className="stat-number neon-text">10+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-separator"></div>
                  <div className="stat-item">
                    <span className="stat-number neon-text">∞</span>
                    <span className="stat-label">Passion</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Floating elements */}
      <div className="floating-elements">
        <div className="float-element element-1"></div>
        <div className="float-element element-2"></div>
        <div className="float-element element-3"></div>
      </div>
    </section>
  );
};

export default Hero;
