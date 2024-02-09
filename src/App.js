import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import SearchMeteo from "./SearchMeteo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Container className="mt-2">
            <Row>
              <Col className="p-0">
                <MyNavbar></MyNavbar>
              </Col>
            </Row>
          </Container>
        </header>
        <main className="flex-grow-1 mt-2">
          <Container>
            <Row>
              <Routes>
                <Route element={<SearchMeteo></SearchMeteo>} path="/" />
                <Route element={<Detail></Detail>} path="/detail/:cityname" />
              </Routes>
              <Row className="my-3">
                <Col className="col-4">
                  <Article1></Article1>
                </Col>
                <Col className="col-4">
                  <Article2></Article2>
                </Col>
                <Col className="col-4">
                  <Article3></Article3>
                </Col>
              </Row>
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter></MyFooter>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
