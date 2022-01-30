import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Support() {
    return (
      <main className="py-3">
        <Container>
          <h2 className="border-bottom pb-1 text-md-start text-center">Support</h2>
          <Row>
            <Col>
              <Card className="p-2">
                  Email: _david's email but obfuscated_
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }