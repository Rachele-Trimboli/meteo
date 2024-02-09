import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Col, Row, Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Article1 from "./Article1";

const SearchMeteo = () => {
  const [objectOfMeteo, setObjectOfMeteo] = useState({});
  const [city, setCity] = useState("");
  const location = useLocation;

  const fetchMeteo = () => {
    fetch(
      // "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fb7c6fb8011b3ab66984fe618da1c4b"
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fb7c6fb8011b3ab66984fe618da1c4b&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        setObjectOfMeteo(data);
        // console.log(objectOfMeteo, "questo è il nuovo stato di dati");
      })
      .catch((err) => {
        console.log("errore nella chiamata all'API", err);
      });
  };

  useEffect(() => fetchMeteo(), [city]);
  if (objectOfMeteo) {
    // console.log(objectOfMeteo);
  }

  return (
    <>
      <Col className="col-12 ">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Roma,Milano,Palermo"
              value={city}
              onInput={(e) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Col>

      {objectOfMeteo.name ? (
        <Link to={"/Detail/" + objectOfMeteo.name}>
          <ListGroup>
            <ListGroup.Item>{objectOfMeteo.name}</ListGroup.Item>
          </ListGroup>
        </Link>
      ) : (
        <Row className="justify-content-center mt-4">
          <Col className="col-8">
            <Card>
              <Card.Img
                variant="top"
                src="https://hsschool.it/wp-content/uploads/2022/12/Parlare-del-meteo-in-inglese-1080x600.jpg"
                className="p-0"
              />
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default SearchMeteo;
