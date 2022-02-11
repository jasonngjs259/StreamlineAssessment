import { Row, Col, Container, Button, Form } from "react-bootstrap";
import "./App.css";

function App() {
    const changeVideoID = (videoID) => {
        const srcLink = "https://www.youtube.com/embed/" + videoID;

        return srcLink;
    };

    const handleSubmit = (value) => {};

    return (
        <>
            <Container>
                <Row>
                    <Col lg={9}>
                        <iframe
                            width="1280"
                            height="693"
                            src={changeVideoID("gAwQ7cCYsZ0")}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"
                        ></iframe>
                    </Col>

                    <Col lg={3}>
                        <Form>
                            <Form.Group class="mb-3">
                                <Form.Label>Video ID</Form.Label>
                                <Form.Control
                                    name="videoID"
                                    type="text"
                                    placeholder="Enter Video ID"
                                />
                            </Form.Group>

                            <Button type="submit">Change</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
