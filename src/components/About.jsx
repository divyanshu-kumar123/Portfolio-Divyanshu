import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const highlights = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="section-header text-center mb-5">
                <h2 className="section-title">About Me</h2>
                <div className="section-divider"></div>
              </div>
              
              <Row className="align-items-center">
                <Col lg={6} md={12} className="mb-4 mb-lg-0">
                  <div className="about-text">
                    <div className="about-intro">
                      <p className="lead-text">
                        I'm a passionate Software Engineer currently working at HCL Technologies, 
                        with a strong foundation in building scalable and responsive web applications 
                        using modern frontend technologies like ReactJS.
                      </p>
                    </div>
                    
                    <div className="about-details">
                      <p>
                        I specialize in crafting user-centric interfaces from Figma designs and 
                        integrating them with robust backend systems using the MERN stack. With over 
                        2 years of industry experience, I've contributed to cross-functional teams, 
                        managed sprint-based tasks, and focused on delivering pixel-perfect, 
                        performant applications.
                      </p>
                      
                      <p>
                        My interest in full-stack development has led me to build several functional 
                        web clones and role-based platforms. Outside of work, I enjoy exploring new 
                        frameworks, participating in hackathons, and enhancing UI/UX in personal projects.
                      </p>
                      
                      <p className="about-goal">
                        I'm always looking for opportunities to solve real-world problems through 
                        clean code and thoughtful design.
                      </p>
                    </div>
                  </div>
                </Col>
                
                <Col lg={6} md={12}>
                  <div className="about-highlights">
                    <div className="highlight-grid">
                      {highlights.map((item, index) => (
                        <div 
                          key={index} 
                          className={`highlight-card ${isVisible ? 'animate-count' : ''}`}
                          style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                          <div className="highlight-number">{item.number}</div>
                          <div className="highlight-label">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
