import { Container, Row, Col, Button, Stack } from "react-bootstrap";

export default function Order() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2 className="align-items-center">Order</h2>
        <Container className="text-left">
            <Stack gap={3}>
                <Row>
                    <Col style={{textAlign: "left"}}>
                        <h3>Window Inverter</h3> 
                    </Col>
                    <Col md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "left"}}>
                        <h3>Echidna Salivation Dessicator</h3>
                    </Col>
                    <Col md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "left"}}>
                        <h3>Chicken Chow Mein Prognositicator</h3>
                    </Col>
                    <Col md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "left"}}>
                        <h3>Snickers Dick Vein Sclerotherapy Lazer</h3>
                    </Col>
                    <Col md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
            </Stack>
        </Container>
      </main>
    );
}