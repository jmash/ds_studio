import { Container, Row, Col, Button, Stack } from "react-bootstrap";

export default function Order() {
    return (
      <main className="py-3">
        <Container>
        <h2 className="text-center text-md-start text-center">Order</h2>
            <Stack className="px-3" gap={3}>
                <Row className="rounded bg-secondary">
                    <Col className="text-center text-sm-center text-md-start">
                        <h3>Window Inverter</h3> 
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-sm-center text-md-start">
                        <h3>Echidna Salivation Dessicator</h3>
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-sm-center text-md-start">
                        <h3>Chicken Chow Mein Prognositicator</h3>
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-sm-center text-md-start">
                        <h3>Snickers Dick Vein Sclerotherapy Lazer</h3>
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
            </Stack>
        </Container>
      </main>
    );
}