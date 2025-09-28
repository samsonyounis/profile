// src/pages/ProjectsPage.jsx
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './project.css';

const projects = [
  {
    title: 'AI Job Portal',
    description: 'A smart recruitment platform using Java (Spring Boot), Python, and OpenAI LLM for AI-driven candidate matching.',
    tech: ['Spring Boot', 'Python', 'OpenAI'],
    github: 'https://github.com/samsonyounis/ai-job-portal',
    demo: 'https://skill-match-ai-portal.onrender.com/#/home'
  },
  {
    title: 'Tax Calculation Scraper',
    description: 'A tool that scrapes tax data using Selenium and Spring Boot for automated tax analysis.',
    tech: ['Spring Boot', 'Selenium', 'Java'],
    github: 'https://github.com/samsonyounis/tax-scraper',
    demo: 'https://tax-automation-webapp.onrender.com/#/home'
  },
  {
    title: 'Artificial Book Knowledge App',
    description: 'An intelligent knowledge app built using Angular, Spring Boot, and Python to search and summarize book data.',
    tech: ['Angular', 'Spring Boot', 'Python'],
    github: 'https://github.com/samsonyounis/book-knowledge-app',
    demo: 'https://book-knowledge.onrender.com'
  },
  {
    title: 'Real Estate Web App',
    description: 'A responsive web application for property listings, built with Angular and Spring Boot.',
    tech: ['Angular', 'Spring Boot'],
    github: '',
    demo: ''
  },
  {
    title: 'Chama & Fundraising Platform',
    description: 'A fintech platform to manage chama (group savings) and fundraising using Java and Angular.',
    tech: ['Java', 'Angular'],
    github: '',
    demo: ''
  },
  {
    title: 'Learning Management System (LMS)',
    description: 'A platform for online learning, built using React, Express, and MongoDB.',
    tech: ['React', 'Express', 'MongoDB'],
    github: '',
    demo: 'https://codearchive.onrender.com/'
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects-section py-5 bg-light" id="projects">
      <Container>
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-2">{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} bg="secondary" className="me-1 mb-1">{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    {/* {project.github && (
                      <Button
                        variant="outline-dark"
                        size="sm"
                        href={project.demo}
                        target="_blank"
                        className="me-2"
                      >
                        Demo Link
                      </Button>
                    )} */}
                    {project.demo && (
                      <Button
                        variant="dark"
                        size="sm"
                        href={project.demo}
                        target="_blank"
                      >
                      Live Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsPage;
