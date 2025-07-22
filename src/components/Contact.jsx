import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { BsEnvelope, BsPhone, BsGeoAlt, BsLinkedin, BsGithub } from 'react-icons/bs';
import PearlBtn from './PearlBtn';
import emailjs from 'emailjs-com'; 
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      'service_jt95tjq', // ✅ Your Service ID
      'template_s00hhwv', // ✅ Your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'aptkaiQ76kzTeKPqJ' // ✅ Your Public Key (API key)
    );

    console.log('Email successfully sent!', result.status, result.text);

    setAlertMessage('Thank you for your message! I will get back to you soon.');
    setShowAlert(true);

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);

  } catch (error) {
    console.error('Email sending failed:', error);
    setAlertMessage('Something went wrong. Please try again.');
    setShowAlert(true);
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: BsEnvelope,
      label: 'Email',
      value: 'imcalleddevyanshu@gmail.com',
      link: 'mailto:imcalleddevyanshu@gmail.com'
    },
    {
      icon: BsPhone,
      label: 'Phone',
      value: '+91 6200383634',
      link: 'tel:+916200383634'
    },
    {
      icon: BsGeoAlt,
      label: 'Location',
      value: 'Lucknow, Uttar Pradesh',
      link: null
    },
    {
      icon: BsLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/divyanshu-kumar-pathak-5384a5239/',
      link: 'https://www.linkedin.com/in/divyanshu-kumar-pathak-5384a5239/'
    },
    {
      icon: BsGithub,
      label: 'GitHub',
      value: 'github.com/divyanshu-kumar123',
      link: 'https://github.com/divyanshu-kumar123    r'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className={`contact-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="section-header text-center mb-5">
                <h2 className="section-title">Get In Touch</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">
                  Let's discuss your next project or just say hello
                </p>
              </div>

              <Row className="contact-main">
                {/* Contact Information */}
                <Col lg={5} md={12} className="mb-4 mb-lg-0">
                  <div className="contact-info-section">
                    <h3 className="contact-info-title">Let's Connect</h3>
                    <p className="contact-info-description">
                      I'm always interested in hearing about new opportunities, 
                      collaborations, or just having a chat about technology and development.
                    </p>

                    <div className="contact-info-list">
                      {contactInfo.map((info, index) => (
                        <div 
                          key={index} 
                          className="contact-info-item"
                          style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                          <div className="contact-icon">
                            <info.icon />
                          </div>
                          <div className="contact-details">
                            <span className="contact-label">{info.label}</span>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="contact-value"
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <span className="contact-value">{info.value}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>

                {/* Contact Form */}
                <Col lg={7} md={12}>
                  <div className="contact-form-section">
                    <h3 className="contact-form-title">Send a Message</h3>
                    
                    {showAlert && (
                      <Alert 
                        variant="success" 
                        className="contact-alert"
                        onClose={() => setShowAlert(false)}
                        dismissible
                      >
                        {alertMessage}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit} className="contact-form">
                      <Row>
                        <Col md={6}>
                          <Form.Group className="form-group">
                            <Form.Label className="form-label">Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="form-input"
                              placeholder="Your full name"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="form-group">
                            <Form.Label className="form-label">Email *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="form-input"
                              placeholder="your.email@example.com"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Subject *</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="What's this about?"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="form-group">
                        <Form.Label className="form-label">Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-input form-textarea"
                          placeholder="Tell me more about your project or just say hello..."
                          required
                        />
                      </Form.Group>

                      <div className="form-submit">
                        <PearlBtn
                          type="submit"
                          size="large"
                          disabled={isSubmitting}
                          className={isSubmitting ? 'pearl-btn--loading' : ''}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </PearlBtn>
                      </div>
                    </Form>
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

export default Contact;
