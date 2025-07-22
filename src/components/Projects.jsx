import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { BsGithub, BsGlobe, BsGear, BsCalendar, BsX } from 'react-icons/bs';
import { FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      id: 1, // Updated ID
      title: "Chatbot Flow Builder",
      icon: "🤖",
      category: "Frontend Tool",
      tech: ["React", "Material-UI"],
      techIcons: [FaReact, BsGear],
      shortDescription: "Interactive UI tool for designing chatbot conversation flows",
      fullDescription: "A React-based interactive UI tool that allows users to visually design and simulate chatbot flows. The application enables drag-and-drop of nodes, conditional logic, and flow linking with custom animations and a modern interface.",
      features: [
        "Drag-and-drop flow builder interface",
        "Node-based conversation design",
        "Conditional logic and branching",
        "Real-time flow simulation",
        "Export and import flow configurations",
        "Custom node types and templates",
        "Visual flow validation",
        "Responsive design for all devices"
      ],
      challenges: "Creating an intuitive drag-and-drop interface, implementing complex flow logic validation, and ensuring smooth performance with large flow diagrams.",
      technologies: ["React.js", "Material-UI", "React DnD", "React Flow", "CSS3", "GitHub Pages"],
      status: "Completed",
      duration: "1.5 months",
      githubLink: "https://github.com/divyanshu-kumar123/chatbot-flow-builder-proj",
      websiteLink: "https://divyanshu-kumar123.github.io/chatbot-flow-builder-proj/"
    },
    {
      id: 2, // Updated ID
      title: "Flipkart Functional Clone",
      icon: "🛒",
      category: "E-commerce",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      techIcons: [SiMongodb, SiExpress, FaReact, FaNode],
      shortDescription: "Full-fledged e-commerce platform with complete shopping functionality",
      fullDescription: "Developed a comprehensive e-commerce platform featuring user registration, login/logout, product browsing, shopping cart, and order placement. Built using the MERN stack to create a scalable frontend and backend solution that mimics Flipkart's core functionality.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filter",
        "Shopping cart functionality",
        "Order management system",
        "Responsive design for all devices",
        "Admin panel for product management",
        "Payment integration simulation",
        "Real-time inventory updates"
      ],
      challenges: "Implementing real-time cart updates, handling concurrent user sessions, and optimizing database queries for large product catalogs.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Bcrypt", "Mongoose"],
      status: "Completed",
      duration: "3 months",
      githubLink: "https://github.com/divyanshu-kumar123/Flipkart-Clone---MERN"
    },
    {
      id: 3, // Updated ID
      title: "Wanderlust – Airbnb Clone",
      icon: "🏡",
      category: "Travel & Booking",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      techIcons: [FaNode, SiExpress, SiMongodb, BsGear],
      shortDescription: "Property booking platform with user authentication and reviews",
      fullDescription: "A comprehensive lodging platform that allows users to list or book properties with full authentication. Built using Node.js, Express, MongoDB Atlas, and EJS. The platform supports user-generated listings, reviews, and secure session management.",
      features: [
        "Property listing and booking system",
        "User authentication and profiles",
        "Review and rating system",
        "Interactive maps integration",
        "Image upload and management",
        "Search and filter functionality",
        "Booking calendar and availability",
        "Host and guest messaging system"
      ],
      challenges: "Implementing secure payment processing, managing booking conflicts, and creating an intuitive user interface for both hosts and guests.",
      technologies: ["Node.js", "Express.js", "MongoDB Atlas", "EJS", "Passport.js", "Cloudinary", "Mapbox"],
      status: "Completed",
      duration: "2.5 months",
      githubLink: "https://github.com/divyanshu-kumar123/WanderLust-AirbnbClone"
    },
    {
      id: 4, // Updated ID
      title: "ApnaLibrary – Library Management",
      icon: "📚",
      category: "Management System",
      tech: ["Node.js", "MySQL", "EJS"],
      techIcons: [FaNode, SiMysql, BsGear],
      shortDescription: "Role-based library system with admin and user functionalities",
      fullDescription: "Created a comprehensive role-based library system with secure user/admin authentication, powered by Node.js, MySQL, and EJS. Features include book borrowing, returning, and admin-level inventory/user management.",
      features: [
        "Role-based access control (Admin/User)",
        "Book inventory management",
        "Borrowing and return system",
        "User registration and authentication",
        "Fine calculation for overdue books",
        "Search and catalog functionality",
        "Reports and analytics dashboard",
        "Email notifications for due dates"
      ],
      challenges: "Designing a robust role-based permission system, implementing fine calculations, and ensuring data consistency across concurrent operations.",
      technologies: ["Node.js", "Express.js", "MySQL", "EJS", "Passport.js", "Nodemailer", "Moment.js"],
      status: "Completed",
      duration: "2 months",
      githubLink: "https://github.com/divyanshu-kumar123/apna-library"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className={`projects-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="section-header text-center mb-5">
                <h2 className="section-title">Featured Projects</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">
                  Showcase of my recent work and technical expertise
                </p>
              </div>

              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="project-card"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="project-icon">
                      <span className="project-emoji">{project.icon}</span>
                    </div>
                    
                    <div className="project-content">
                      <div className="project-header">
                        <h4 className="project-title">{project.title}</h4>
                        <span className="project-category">{project.category}</span>
                      </div>
                      
                      <p className="project-description">{project.shortDescription}</p>
                      
                      <div className="project-tech">
                        {project.techIcons.map((TechIcon, idx) => (
                          <TechIcon key={idx} className="tech-icon" />
                        ))}
                      </div>
                      
                      <div className="project-footer">
                        <span className="view-details">Click to view details</span>
                        <span className="project-arrow">→</span>
                      </div>
                    </div>
                    
                    <div className="project-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Project Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg" 
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header className="project-modal-header">
              <div className="modal-title-section">
                <span className="modal-project-icon">{selectedProject.icon}</span>
                <div>
                  <Modal.Title className="modal-project-title">
                    {selectedProject.title}
                  </Modal.Title>
                  <span className="modal-project-category">{selectedProject.category}</span>
                </div>
              </div>
              <Button 
                variant="link" 
                onClick={handleCloseModal}
                className="modal-close-btn"
              >
                <BsX />
              </Button>
            </Modal.Header>
            
            <Modal.Body className="project-modal-body">
              <div className="project-detail-content">
                <div className="project-meta">
                  <div className="meta-item">
                    <BsCalendar className="meta-icon" />
                    <span>Duration: {selectedProject.duration}</span>
                  </div>
                  <div className="meta-item">
                    <BsGear className="meta-icon" />
                    <span>Status: {selectedProject.status}</span>
                  </div>
                </div>

                <div className="project-section">
                  <h6 className="section-heading">Project Overview</h6>
                  <p className="project-full-description">{selectedProject.fullDescription}</p>
                </div>

                <div className="project-section">
                  <h6 className="section-heading">Key Features</h6>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h6 className="section-heading">Technical Challenges</h6>
                  <p className="project-challenges">{selectedProject.challenges}</p>
                </div>

                <div className="project-section">
                  <h6 className="section-heading">Technologies Used</h6>
                  <div className="tech-tags-modal">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag-modal">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.githubLink && (
                  <div className="project-section">
                    <h6 className="section-heading">GitHub Repository</h6>
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="github-link"
                    >
                      <BsGithub className="github-icon" /> View on GitHub
                    </a>
                  </div>
                )}

                {selectedProject.websiteLink && (
                  <div className="project-section">
                    <h6 className="section-heading">Live Website</h6>
                    <a 
                      href={selectedProject.websiteLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="website-link"
                    >
                      <BsGlobe className="website-icon" /> Visit Website
                    </a>
                  </div>
                )}
              </div>
            </Modal.Body>
            
            <Modal.Footer className="project-modal-footer">
              <Button variant="outline-light" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
