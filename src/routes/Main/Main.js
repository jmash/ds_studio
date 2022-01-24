import { Container, Row, Col, Stack } from 'react-bootstrap';

export default function Main() {
    return (
      <main className="py-3">
        <Container className="">
            <h2 className="border-bottom pb-1">Software Offerings</h2>
            <Stack className="mx-auto alt-shade-rows w-75 pb-2" gap={4}>
                <Row className="rounded py-2 border-bottom align-items-center">
                    <Col>
                        <h3>Window Inverter</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                </Row>
                <Row className="rounded py-2 border-bottom align-items-center">
                    <Col>
                        <h3>Echidna Salivation Dessicator</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                </Row>
                <Row className="rounded py-2 border-bottom align-items-center">
                    <Col>
                        <h3>Chicken Chow Mein Prognositicator</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                </Row>
                <Row className="rounded py-2 border-bottom align-items-center">
                    <Col>
                        <h3>Snickers Dick Vein Sclerotherapy Lazer</h3>
                    </Col>
                    <Col className="text-end">
                        <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                    </Col>
                </Row>
            </Stack>
            <Row className="border-top pt-2">
                <Col>
                    <h2>Who We Are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar justo. Nam et lobortis augue, vel imperdiet orci. Cras gravida gravida metus fringilla pellentesque. Nunc est neque, pretium in eros dictum, suscipit auctor diam. Morbi at erat ullamcorper, commodo nunc ac, blandit nisi. Duis ullamcorper ante porta commodo tristique. Vestibulum pellentesque lorem sed vestibulum consectetur. Integer vel odio ut lectus laoreet tincidunt. Nam auctor sem luctus odio vestibulum laoreet. Curabitur dapibus tellus elit, ac consectetur felis volutpat eget.</p>
                </Col>
            </Row>
        </Container>
      </main>
    );
  }

 