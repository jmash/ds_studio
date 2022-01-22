import { Container, Row, Col, Stack } from 'react-bootstrap';

export default function Main() {
    return (
      <main className="py-3">
        <Container className="">
            <h2>Software Offerings:</h2>
            <Stack gap={4}>
                <Row className="align-items-center">
                    <Col className="col-1 col-md-2"></Col>
                    <Col>
                        <h3>Window Inverter</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                    <Col className="col-1 col-md-2"></Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="col-1 col-md-2"></Col>
                    <Col>
                        <h3>Echidna Salivation Dessicator</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                    <Col className="col-1 col-md-2"></Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="col-1 col-md-2"></Col>
                    <Col>
                        <h3>Chicken Chow Mein Prognositicator</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                    <Col className="col-1 col-md-2"></Col>
                </Row>
                <Row className="align-items-center">
                    <Col className="col-1 col-md-2"></Col>
                    <Col>
                        <h3>Snickers Dick Vein Sclerotherapy Lazer</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                    <Col className="col-1 col-md-2"></Col>
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

 