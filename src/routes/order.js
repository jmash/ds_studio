import { Container, Row, Col, Button } from "react-bootstrap";

export default function Order() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <Container>
            <Row>
                <Col style={{textAlign: "left"}}>
                    Window Inverter 
                </Col>
                <Col md="auto">
                    <Button>Add To Cart</Button>
                </Col>
                <Col md="auto">
                    <Button>Buy Now</Button>
                </Col>
            </Row>
        </Container>
      </main>
    );
  }