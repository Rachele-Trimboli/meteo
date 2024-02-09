import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

const Detail = () => {
  const params = useParams();
  const [objectOfMeteo, setObjectOfMeteo] = useState({});
  // console.log(params);
  const [city, setCity] = useState("");
  const [weeklydatas, setWeeklyDatas] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const fetchMeteo = () => {
    fetch(
      // "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fb7c6fb8011b3ab66984fe618da1c4b"
      `https://api.openweathermap.org/data/2.5/weather?q=${params.cityname}&appid=1fb7c6fb8011b3ab66984fe618da1c4b&units=metric`
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
        setLat(data.coord.lat);
        setLon(data.coord.lon);

        // console.log(objectOfMeteo, "questo è il nuovo stato di dati");
      })
      .catch((err) => {
        console.log("errore nella chiamata all'API", err);
      });
  };
  const weeklyFetch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1fb7c6fb8011b3ab66984fe618da1c4b&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((datisettimanali) => {
        // console.log(datisettimanali);
        setWeeklyDatas(datisettimanali);
      })
      .catch((errore) => {
        console.log("errore nella seconda chiamata", errore);
      });
  };

  useEffect(() => fetchMeteo(), [params.city]);
  useEffect(() => {
    if (lat && lon) {
      weeklyFetch();
    }
  }, [objectOfMeteo]);

  if (objectOfMeteo) {
    // console.log(objectOfMeteo);
    // console.log(lat);
    // console.log(lon);
  }

  return (
    // <h1>ciao sono la pagina dettagli</h1>
    <Container>
      <Row className="mt-5">
        {objectOfMeteo.name ? (
          <>
            <Col className="col-6" key={objectOfMeteo.id}>
              <Card>
                <img
                  src={`http://openweathermap.org/img/w/${objectOfMeteo.weather[0].icon}.png`}
                  alt="fototempo"
                  style={{ width: "150px" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold display-1">
                    {objectOfMeteo.name}
                  </Card.Title>
                  <Card.Text>{objectOfMeteo.weather[0].description}</Card.Text>
                  <Card.Text></Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    T-min {objectOfMeteo.main.temp_max}C° T-min
                    {objectOfMeteo.main.temp_min}C°
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-evenly fw-semibold">
                    <span>Umidità</span>
                    {objectOfMeteo.main.humidity}%
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-evenly fw-semibold">
                    <span>Vento</span>
                    {objectOfMeteo.wind.speed} K/h
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-evenly fw-semibold">
                    <span>Pressione</span>
                    {objectOfMeteo.main.pressure} h/Pa
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col className="col-6">
              <h1>Nelle prossime ore</h1>
              {weeklydatas &&
                weeklydatas.list.splice(0, 12).map((ora) => {
                  return (
                    <ListGroup>
                      <ListGroup.Item className="d-flex justify-content-evenly">
                        <span>{ora.dt_txt.substring(5, 16)}</span>
                        <span>{ora.weather[0].main}</span>
                        <span>T. media {ora.main.temp}</span>
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
            </Col>
          </>
        ) : (
          <Spinner variant="primary"></Spinner>
        )}
      </Row>
    </Container>
  );
};
export default Detail;
