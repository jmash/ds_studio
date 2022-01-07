import { Container, Row, Col, Stack } from 'react-bootstrap';

export default function Main() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <Container>
            <h2>Software Offerings:</h2>
            <Stack gap={4}>
                <Row>
                    <Col>
                        Window Inverter
                    </Col>
                    <Col>
                        Screenshot
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Echidna Salivation Dessicator
                    </Col>
                    <Col>
                        Screenshot
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Chicken Chow Mein Prognositicator
                    </Col>
                    <Col>
                        Screenshot
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Snickers Dick Vein Sclerotherapy Lazer
                    </Col>
                    <Col>
                        Screenshot
                    </Col>
                </Row>
            </Stack>
            <Row>
                <Col>
                    <h2>Who We Are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar justo. Nam et lobortis augue, vel imperdiet orci. Cras gravida gravida metus fringilla pellentesque. Nunc est neque, pretium in eros dictum, suscipit auctor diam. Morbi at erat ullamcorper, commodo nunc ac, blandit nisi. Duis ullamcorper ante porta commodo tristique. Vestibulum pellentesque lorem sed vestibulum consectetur. Integer vel odio ut lectus laoreet tincidunt. Nam auctor sem luctus odio vestibulum laoreet. Curabitur dapibus tellus elit, ac consectetur felis volutpat eget.</p>
                </Col>
            </Row>
        </Container>
      </main>
    );
  }

 