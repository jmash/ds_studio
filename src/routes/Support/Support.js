import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Support() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <Container>
          <h2 className="text-md-start text-center">Support</h2>
          <Row>
            <Col>
              <Card>
                  Email: _david's email but obfuscated_
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }