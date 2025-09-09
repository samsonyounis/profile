// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './about.css';

const skillSection = (title, items, color = 'primary') => (
  <div className="mb-3">
    <h6 className="fw-bold">{title}</h6>
    {items.map((item, index) => (
      <Badge
        key={index}
        pill
        bg={color}
        className="me-2 mb-2"
        text={color === 'warning' || color === 'light' ? 'dark' : undefined}
      >
        {item}
      </Badge>
    ))}
  </div>
);

const AboutPage = () => {
  return (
    <section className="about-section py-5 bg-white" id="about">
      <Container>
        {/* ===== About Me ===== */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center">About Me</h2>
            <p className="text-muted text-center">
              Who I am, My skills, My Experience.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <p>
              I'm <strong>Samson Younis Osman</strong>, a passionate Full Stack Software Engineer with 4+ years of hands-on experience. I specialize in building scalable web applications, microservices, and REST APIs using Java, Spring Boot, React, and Python.
            </p>
            <p>
              My mission is to create impactful digital solutions while writing clean, maintainable code. I also mentor junior developers and share coding tutorials on YouTube.
            </p>
            <p>
              When I'm not coding, I enjoy playing chess, swimming, and engaging in community tech projects.
            </p>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Technical Skills</Card.Title>

                {skillSection('Languages', ['JavaScript', 'Java', 'Python', 'Kotlin'], 'primary')}
                {skillSection('Frameworks & Libraries', ['Spring Boot', 'Vert.x', 'Express.js', 'FastAPI', 'React', 'Angular'], 'success')}
                {skillSection('Frontend Technologies', ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Bootstrap'], 'info')}
                {skillSection('Databases', ['MySQL', 'PostgreSQL', 'MongoDB', 'MSSQL Server', 'Redis'], 'warning')}
                {skillSection('Tools', ['GitHub', 'GitLab', 'Docker', 'Postman', 'Swagger'], 'dark')}
                {skillSection('Concepts', ['Microservices Architecture', 'REST APIs', 'Stored Procedures', 'JSON', 'XML'], 'secondary')}
                {skillSection('Soft Skills', ['Teamwork', 'Problem Solving', 'Decision Making', 'Creative Thinking'], 'light')}

                <hr />
                <p className="mb-1"><strong>Location:</strong> Nairobi, Kenya</p>
                <p className="mb-1"><strong>Email:</strong> samsonyounis26@gmail.com</p>
                <p className="mb-1"><strong>Phone:</strong> +254701852538</p>
                <p className="mb-0">
                  <strong>Links:</strong>
                  <a href="https://www.linkedin.com/in/samson-osman-a19871226" target="_blank" rel="noreferrer" className="ms-2 text-decoration-none">LinkedIn</a> | 
                  <a href="https://github.com/samsonyounis" target="_blank" rel="noreferrer" className="ms-2 text-decoration-none">GitHub</a> | 
                  <a href="https://www.youtube.com/@Samson.CodeArchive" target="_blank" rel="noreferrer" className="ms-2 text-decoration-none">YouTube</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ===== Work Experience ===== */}
        <Row id="experience">
          <Col>
            <h3 className="fw-bold text-center mb-4">Work Experience</h3>
          </Col>
        </Row>

        <Row className="gy-4">
          <Col md={6}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title className="fw-bold">Mobile Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Eclectics International Ltd | Nairobi, Kenya</Card.Subtitle>
                <small className="text-muted">June 2022 – Sep 2022</small>
                <p className="mt-2">
                  -Designed and implemented Android app UIs
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title className="fw-bold">Backend Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">E&M Technology House | Nairobi, Kenya</Card.Subtitle>
                <small className="text-muted">Nov 2023 – March 2024</small>
                <p className="mt-2">
                  - Built microservices and RESTful APIs using Spring Boot<br></br>
                  - Delivered key projects on schedule with clean documentation
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title className="fw-bold">Backend Software Engineer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Eclectics International Ltd | Nairobi, Kenya</Card.Subtitle>
                <small className="text-muted">April 2024 – May 2025</small>
                <p className="mt-2">
                  -Developed and deployed REST APIs using Spring Boot<br></br>
                  - Designed scalable microservice architectures<br></br>
                  - Integrated Swagger and Postman for API documentation<br></br>
                  - Implemented unit and integration tests
                </p>
              </Card.Body>
            </Card>
          </Col>
                    <Col md={6}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title className="fw-bold">Full Stack Instructor</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">AReL (Action for Refugee Life) | Kakuma, Kenya</Card.Subtitle>
                <small className="text-muted">May 2025 - Present</small>
                <p className="mt-2">
                  -Design of course Curriculum <br></br>
                  -Teaching Algorithms and Data structures<br></br>
                  -Teaching frontend technologies: React, Bootstrap<br></br>
                  - Backend API instruction using Express.js and MongoDB<br></br>
                  - Mentored students on best practices in software development
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;