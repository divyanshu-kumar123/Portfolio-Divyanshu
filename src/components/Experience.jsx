import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsBuilding, BsCalendar, BsGeoAlt, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "HCL Technologies",
      location: "Lucknow, Uttar Pradesh",
      period: "Aug 2022 – Present",
      type: "Full-time",
      description: "Currently working as a Software Engineer focusing on frontend development and full-stack solutions.",
      details: [
        "Developed scalable, responsive web apps using ReactJS based on Figma mockups",
        "Collaborated with designers, testers, and backend developers to deliver high-quality software in Agile sprints",
        "Participated in daily stand-ups and sprint ceremonies, ensuring smooth delivery and stakeholder alignment",
        "Improved frontend performance and accessibility across multiple projects",
        "Worked with modern JavaScript frameworks and libraries including React, Node.js, and Express",
        "Implemented responsive design principles for mobile-first development"
      ],
      technologies: ["ReactJS", "JavaScript", "Node.js", "Express.js", "HTML5", "CSS3", "Figma"]
    },
    {
      id: 2,
      title: "Internship – Software Development & QA",
      company: "HCL Technologies",
      location: "Lucknow, Uttar Pradesh",
      period: "Aug 2021 – Aug 2022",
      type: "Internship",
      description: "Started my journey in software development with hands-on experience in QA and development practices.",
      details: [
        "Supported the QA team in manual testing, defect reporting, and tracking",
        "Gained hands-on experience with corporate communication and team collaboration tools",
        "Attended training sessions to build a foundation in software lifecycle and time management",
        "Learned documentation best practices and software development methodologies",
        "Participated in code reviews and learned industry best practices",
        "Developed understanding of testing frameworks and quality assurance processes"
      ],
      technologies: ["Manual Testing", "Bug Tracking", "Documentation", "Team Collaboration", "SDLC", "Quality Assurance"]
    }
  ];

  const toggleCard = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <section id="experience" className="experience-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className={`experience-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="section-header text-center mb-5">
                <h2 className="section-title">Work Experience</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">
                  My professional journey in software development
                </p>
              </div>

              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.id} 
                    className={`experience-card ${activeCard === exp.id ? 'expanded' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="timeline-connector">
                      <div className="timeline-dot"></div>
                      {index < experiences.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    
                    <Card className="experience-item">
                      <Card.Body>
                        <div 
                          className="experience-header"
                          onClick={() => toggleCard(exp.id)}
                        >
                          <div className="experience-info">
                            <div className="experience-title-row">
                              <h4 className="experience-title">{exp.title}</h4>
                              <span className="experience-type">{exp.type}</span>
                            </div>
                            
                            <div className="experience-meta">
                              <div className="meta-item">
                                <BsBuilding className="meta-icon" />
                                <span>{exp.company}</span>
                              </div>
                              <div className="meta-item">
                                <BsGeoAlt className="meta-icon" />
                                <span>{exp.location}</span>
                              </div>
                              <div className="meta-item">
                                <BsCalendar className="meta-icon" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                            
                            <p className="experience-description">{exp.description}</p>
                          </div>
                          
                          <div className="expand-icon">
                            {activeCard === exp.id ? <BsChevronUp /> : <BsChevronDown />}
                          </div>
                        </div>
                        
                        <div className={`experience-details ${activeCard === exp.id ? 'show' : ''}`}>
                          <div className="details-content">
                            <h6 className="details-title">Key Responsibilities & Achievements:</h6>
                            <ul className="details-list">
                              {exp.details.map((detail, idx) => (
                                <li key={idx} className="detail-item">{detail}</li>
                              ))}
                            </ul>
                            
                            <div className="technologies-section">
                              <h6 className="tech-title">Technologies & Tools:</h6>
                              <div className="tech-tags">
                                {exp.technologies.map((tech, idx) => (
                                  <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
