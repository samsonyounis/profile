// src/pages/ContactPage.jsx
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // You can send data to backend here (EmailJS, Formspree, or your API)
    console.log('Form Submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Hide alert after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-section py-5 bg-white" id="contact">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center">Contact Me</h2>
            <p className="text-muted text-center">
              Let’s work together or just say hello!
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p><strong>📍 Location:</strong> Nairobi, Kenya</p>
            <p><strong>📞 Phone:</strong> +254701852538</p>
            <p><strong>📧 Email: </strong><a href='mailto:samsonyounis26@gmail.com'>samsonyounis26@gmail.com</a></p>
            <p><strong>🌐 Links:</strong></p>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/in/samson-osman-a19871226" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/samsonyounis" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.youtube.com/@Samson.CodeArchive" target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
          </Col>

          <Col md={6}>
            <h5 className="fw-bold mb-3">Send a Message</h5>
            {submitted && <Alert variant="success">Thank you! Your message has been sent.</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
