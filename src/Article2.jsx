import Card from "react-bootstrap/Card";

const Article2 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://www.ilmeteo.it/portale/files/giornale/medium/Tanta-pioggia-arriva-9224.jpeg"
      />
      <Card.Body>
        <Card.Title>
          Meteo, weekend del 10-11 febbraio con piogge e nevicate
        </Card.Title>
        <Card.Text>
          Dopo una lunga fase siccitosa torneranno piogge importanti con
          nevicate sulle Alpi. Le temperature a partire da domenica 11, si
          riporteranno nelle medie stagionali
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Article2;
