import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Article3 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://www.ilmeteo.it/portale/files/giornale/medium/Weekend-9224.jpg"
      />
      <Card.Body>
        <Card.Title>
          Meteo WEEKEND, il Ciclone Pulcinella oscura il Carnevale
        </Card.Title>
        <Card.Text>
          L'imminente Weekend di Carnevale sarà letteralmente oscurato dal
          Ciclone Pulcinella, un vortice che provocherà una fase di maltempo...
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Article3;
