import { Image, Container, Row, Col } from "react-bootstrap";
import imgLanding from "../../assets/banner1.jpg";
import { BsChevronCompactDown } from "react-icons/bs";

const LandingPage = () => {
  return (
    <Container className="banner row text-light text-center mx-0 align-items-center mb-5">
      <Row className="w-100 mx-0">
        <Col lg={6} md={12}>
          <div className="d-none mb-3">
            <Image src={imgLanding} className="w-100"></Image>
          </div>
          <div className="d-none d-md-block">
            <Image src={imgLanding} className="w-100"></Image>
          </div>
        </Col>
        <Col lg={6} md={12} className="text-primary text-center text-md-start texto-landing align-self-center">
          <h1 className="my-3 display-4">Renasser</h1>
          <p className="display-6">Cuidamos de usted</p>
          <p>ejfejsdfjewsjfjesjifoewjiofjwefij</p>
          <div className="text-center">
            <a className="w-100 btn" id="btn-landing" href="#categoria">
              
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
