import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Carousel,
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Button,
  Card,
  Form,
} from "react-bootstrap";

export class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="6">
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">
                    <a href="#">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWu1_Ra2W-5HPWlJzQWvuHyih5561coL-c0_5x93-a&s"
                        width="50"
                        style={{ borderRadius: "10px" }}
                      ></Image>
                    </a>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">About Us</Nav.Link>
                      <NavDropdown title="Contacts" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Phone</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>

            <Col md="6">
              <Nav
                defaultActiveKey="/home"
                as="ul"
                className="d-flex justify-content-end align-items-center "
              >
                <Nav.Item as="li">
                  <Nav.Link href="/home">What's this? </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/178735930/photo/dramatic-sunset-view-highlighting-the-empire-state-building.jpg?s=612x612&w=0&k=20&c=vvpfw74yLA1H3ieZh3ENSkeukxjpeXJ-Q6AJovigIEo="
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>New-York</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/1153849876/photo/panoramic-view-of-manhattan-skyscrapers-at-night-at-christmas-from-the-dumbo-area-in-brooklyn.jpg?s=612x612&w=0&k=20&c=4vSOVe8sQY7XQQ_Cnx7Y9If8x9cAaUIX-uy3CP_PE8k="
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>New-York</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://newyorksimply.com/wp-content/uploads/2022/03/NYC-Tribute-in-Light-09965.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>New-York</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <main style={{ marginTop: "20px" }}>
            <Row>
              <Col md="3" style={{ marginLeft: "0" }}>
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>First Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Second Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Third Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Fourth Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Fifth Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Sixth Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Seventh Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                {" "}
                <Card style={{ marginBottom: "20px", marginRight: "0" }}>
                  <Card.Img
                    variant="top"
                    src="https://i.ytimg.com/vi/J-hjX2-aZE4/maxresdefault.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Eighth Adventure</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </main>

          <footer>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                    <Nav.Link href="#action1">Price</Nav.Link>
                    <Nav.Link href="#action2">Reviews</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-info">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </footer>
        </Container>
      </div>
    );
  }
}
