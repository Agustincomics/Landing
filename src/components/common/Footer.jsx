import React from 'react';
import logo from '../../assets/fenix2.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube, FaTwitter, FaLocationArrow, FaPinterest } from 'react-icons/fa';
import '../../App.css';

const Footer = () => {
  const urlGoogle = "https://www.google.com/maps/search/?api=1&query=General+Paz+576%2C+T4000+San+Miguel+de+Tucumán%2C+Tucumán";

  return (
    <footer className="bg-dark text-light py-4 mainSection text-center">
      <Container>
        <Row>
          <Col md={6}>
            <h5>RENASSER</h5>
            <img src={logo} alt="Logo Bon dia" className="logoJSON mt-3 mb-3" />
            <ul className="list-unstyled">
              <li><Link to="/" className='footer-link'>Inicio</Link></li>
              <li><Link to="/AcercaDe" className="footer-link">Acerca de</Link></li>
            </ul>
          </Col>

          <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
            <h5>Contactenos</h5>
            <ul className="list-unstyled">
              <div className="d-flex align-items-center pb-2 justify-content-center"> {/* Agregamos justify-content-center aquí */}
                <li className="me-3">
                  <Link target="_blank" to={"https://www.facebook.com/agustin.sandoval.35175/"} className="footer-icon-link">
                    <FaFacebook className="footer-icon" />
                  </Link>
                </li>
                <li className="me-3">
                  <Link target="_blank" to={"https://twitter.com/AgustinSan90168"} className="footer-icon-link">
                    <FaTwitter className="footer-icon" />
                  </Link>
                </li>
                <li className="me-3">
                  <Link target="_blank" to={"https://www.instagram.com/agustin_sandoval123/?hl=es-la"} className="footer-icon-link">
                    <FaInstagram className="footer-icon" />
                  </Link>
                </li>
              </div>
              <li className="pt-2">
                <FaPhoneAlt className="footer-icon" />
                <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
              </li>
              <li className="my-3">
                <FaEnvelope className="footer-icon" />
                <a href="mailto:correo@example.com" target="_blank" rel="noopener noreferrer" className="footer-text">Rolandonasser6@hotmail.com</a>
              </li>
              <li>
                <FaLocationArrow className="footer-icon" />
                <a href={urlGoogle} target="_blank" rel="noopener noreferrer" className="footer-text footer-link">General Paz 576, T4000 San Miguel de Tucumán, Tucumán</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 por RENASSER</p>
      </div>
    </footer>
  );
};

export default Footer;

