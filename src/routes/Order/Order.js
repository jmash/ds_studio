import { Container, Row, Col, Button, Stack } from "react-bootstrap";

export default function Order() {
    return (
      <main className="py-3">
        <Container>
        <h2 className="text-center text-md-start text-center">Order</h2>
            <Stack className="px-3" gap={3}>
                <Row className="rounded bg-secondary">
                    <Col className="text-center text-sm-center text-md-start">
                        <h3 className="mb-2 mt-2">Window Inverter</h3> 
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-sm-center text-md-start">
                        <h3 className="mb-2 mt-2">Echidna Salivation Dessicator</h3>
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-sm-center text-md-start">
                        <h3 className="mb-2 mt-2">Chicken Chow Mein Prognositicator</h3>
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-sm-center text-md-start">
                        <h3 className="mb-2 mt-2">Snickers Dick Vein Sclerotherapy Lazer</h3>
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Add To Cart</Button>
                    </Col>
                    <Col className="my-auto text-center text-sm-center text-md-start" md="auto">
                        <Button>Buy Now</Button>
                    </Col>
                </Row>
            </Stack>
        </Container>
      </main>
    );
}