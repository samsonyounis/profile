// src/components/HomePage.jsx
import { Button,Row,Col,Container } from 'react-bootstrap';
import './homePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <section className="home-section bg-light py-5" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">Samson Younis Osman</h1>
            <p className="lead text-muted">
              Full Stack Software Engineer | Building Scalable Applications with Java, Spring Boot, React & Python.
            </p>
            <div className="mt-4">
              <Button variant="primary" className="me-3" onClick={() => navigate('/work')}>View My Work</Button>
              <Button variant="outline-secondary" onClick={() => navigate('/contact')}>Get in Touch</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src='profile.jpg'
              alt="Samson Younis"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '300px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
