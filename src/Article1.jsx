import Card from "react-bootstrap/Card";

const Article1 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://www.ilmeteo.it/portale/files/giornale/medium/prossime-ore-090224.jpg"
      />
      <Card.Body>
        <Card.Title>Meteo: repentino Peggioramento in atto!</Card.Title>
        <Card.Text>
          E' in atto un repentino peggioramento del tempo con la pioggia che,
          come vi avevamo annunciato da giorni, è tornata a far capolino sul
          nostro Paese e che, tra poche ore, interesserà gran parte delle
          regioni...
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Article1;
