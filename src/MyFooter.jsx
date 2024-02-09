import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid>
      <Row className="bg-secondary-subtle justify-content-center fw-semibold text-dark">
        <Col className="col-2 bg-secondary-subtle">
          <ul
            className="bg-secondary-subtle "
            style={{ listStyleType: "none" }}
          >
            <li className="bg-secondary-subtle">
              <i className="bi bi-facebook ms-2"></i>
              <i className="bi bi-instagram ms-2"></i>
            </li>
            <li className="bg-secondary-subtle">Contatti</li>
            <li className="bg-secondary-subtle">Riferimenti</li>
            <li className="bg-secondary-subtle">Privacy</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default MyFooter;
