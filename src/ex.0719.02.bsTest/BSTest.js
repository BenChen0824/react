import { Container, Row, Col, Button } from 'react-bootstrap';

function BSTest(props) {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h1>React Bootstrap</h1>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Success</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default BSTest;