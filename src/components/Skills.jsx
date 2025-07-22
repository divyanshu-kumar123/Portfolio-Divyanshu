import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaReact, 
  FaJs, 
  FaNode, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDatabase,
  FaBootstrap 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiMysql, 
  SiJira,
  SiFigma,
  SiUnity,
  SiMui
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const mainSkills = [
    {
      name: 'React',
      icon: FaReact,
      color: '#61DAFB',
      level: 95,
      description: 'Advanced React development with hooks, context, and modern patterns'
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      color: '#F7DF1E',
      level: 90,
      description: 'ES6+, async/await, DOM manipulation, and modern JS features'
    },
    {
      name: 'Node.js',
      icon: FaNode,
      color: '#339933',
      level: 85,
      description: 'Backend development, REST APIs, and server-side JavaScript'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      level: 80,
      description: 'Type-safe development and large-scale application architecture'
    }
  ];

  const otherSkills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'Material-UI', icon: SiMui, color: '#007FFF' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Jira', icon: SiJira, color: '#0052CC' },
    { name: 'Unity', icon: SiUnity, color: '#000000' },
    { name: 'Database', icon: FaDatabase, color: '#336791' }
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className={`skills-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="section-header text-center mb-5">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">
                  Technologies I work with to bring ideas to life
                </p>
              </div>

              {/* Main Skills */}
              <div className="main-skills-section mb-5">
                <h3 className="skills-category-title">Core Expertise</h3>
                <Row className="justify-content-center">
                  {mainSkills.map((skill, index) => (
                    <Col lg={3} md={6} sm={6} key={skill.name} className="mb-4">
                      <div 
                        className={`main-skill-card ${hoveredSkill === skill.name ? 'hovered' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="skill-icon-container">
                          <skill.icon 
                            className="main-skill-icon" 
                            style={{ color: skill.color }}
                          />
                          <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
                        </div>
                        <h4 className="skill-name">{skill.name}</h4>
                        <div className="skill-level">
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{ 
                                width: `${skill.level}%`,
                                backgroundColor: skill.color 
                              }}
                            ></div>
                          </div>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Other Skills */}
              <div className="other-skills-section">
                <h3 className="skills-category-title">Additional Technologies</h3>
                <div className="other-skills-grid">
                  {otherSkills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="other-skill-item"
                      style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <skill.icon 
                        className="other-skill-icon" 
                        style={{ color: skill.color }}
                      />
                      <span className="other-skill-name">{skill.name}</span>
                      <div 
                        className="other-skill-bg" 
                        style={{ backgroundColor: `${skill.color}20` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
