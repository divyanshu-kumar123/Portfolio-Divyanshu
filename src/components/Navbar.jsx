import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <span className="brand-text">Divyanshu Kumar</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => handleNavClick('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleNavClick('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
