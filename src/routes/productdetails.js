import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

export default function ProductDetails() {
    return (
      <main style={{ padding: "1rem 0" }}>
          <h2>Product Details</h2>
          <Container>
            <Row>
              <Col style={{textAlign: "left"}}>
                <h3>Window Inverter</h3>
              </Col>
              <Col xs="left" sm="left" md="auto">
                <Button>Try</Button>
              </Col>
              <Col xs="left" sm="left" md="auto">
                <Button>Order (4.99)</Button>
              </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "left"}}>
                    <h3>$4.99</h3>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign: "left"}}>
                    <h4>Info</h4>
                    <section className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit ac nunc eleifend faucibus. Suspendisse ac maximus purus. Praesent efficitur, ex in euismod dignissim, lectus felis iaculis augue, imperdiet tincidunt orci nisl ut ante. Aenean eget efficitur ante. Nunc vulputate nibh sit amet leo ullamcorper vestibulum. Nullam at odio id felis malesuada porttitor. Nam egestas lacinia mollis. Quisque quis ultricies neque, eu maximus eros.
                    </section>
                    <h4>Trial Info</h4>
                    <section>
                        Etiam ligula purus, bibendum quis sollicitudin vitae, fermentum non tellus. Quisque tincidunt imperdiet mi ac laoreet. Fusce vel felis mi. Ut eget purus ac urna ornare ornare at ut ante. Vestibulum faucibus vel orci nec porta. Pellentesque eget neque ut neque vehicula elementum ut eget orci. 
                    </section>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="First slide"
                                    ></img>
                                </Col>
                                <Col>
                                    <img c
                                        src="https://via.placeholder.com/150"
                                        alt="Second slide"
                                    ></img>
                                </Col>
                                <Col>
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="Second slide"
                                    ></img>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col style={{textAlign: "left"}}>
                    <Button>Download Trial</Button>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <Button>Order</Button>
                </Col>
            </Row>

          </Container>
      </main>
    );
  }