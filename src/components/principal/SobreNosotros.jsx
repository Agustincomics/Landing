import { Container, Row, Col, Card } from 'react-bootstrap';
import brand from "../../assets/logo.jpg"
import chef1 from "../../assets/medicos/medico6.avif"
import chef2 from "../../assets/medicos/medico2.jpg"
import chef3 from "../../assets/medicos/medico3.jpg"
import chef4 from "../../assets/medicos/medico4.jpg"
import chef5 from "../../assets/medicos/medico5.jpg"
import '../../App.css';

const AcercaDe = () => {
  return (
    <Container className="mainSection">
      <section className="my-5">
        <h1 className="display-4 text-center pb-3">Renasser</h1>
        <p className="text-center fw-bold fst-italic texto-acerca">
        Bienvenidos a RENASSER, somos un centro especializado en la rehabilitacion de las funciones motoras del cuerpo, la estimulacion temprana, el tratamiento preventivo sobre la voz el habla, el lenguaje y la audicion.          </p>
        <p className="text-center fw-semibold texto-acerca">
        Nuestro objetivo principal es Mejorar la salud y capacidades motrices del cuerpo logrando un nuevo comiezo en la vida de nuestros pacientes.        </p>
        <img src={brand} alt="Logo Bon dia" className="brandBondia" />
      </section>
      <hr />
      <section className="my-5 rounded">
        <h1 className="display-6 text-center mb-4 pt-4 fw-bolder">Nuestros Especialistas</h1>
        <Row className="sobreNosotros-card">
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef1}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Mauro Diaz Santilli"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Rolando Nasser</Card.Title>
                    <Card.Text>
                    Kinesiologo                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef2}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Joaquin Fuentes"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Elias Nasser</Card.Title>
                    <Card.Text>
                    Psicomotricista                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef3}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Federico Ledesma"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Eugenia Hassan</Card.Title>
                    <Card.Text>
                    Fonoaudiologa                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef4}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Julian Martin"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Marina Bacas</Card.Title>
                    <Card.Text>
                    Kinesiologa                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef5}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Agustin Sandoval"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Fabricio Caseres</Card.Title>
                    <Card.Text>
                    Kinesiologo                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AcercaDe;