import { Form, Input } from "antd";
import { Button, Card, Row, Col } from "react-bootstrap";
import "antd/dist/antd.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ChangeVideo } from "./Action";

function App() {
    const dispatch = useDispatch();
    const { videos } = useSelector((state) => state);
    const changeVideoID = (videoID) => {
        const srcLink = "https://www.youtube.com/embed/" + videoID;

        return srcLink;
    };

    const handleSubmit = (value) => {
        dispatch(
            ChangeVideo({
                video: value.videoCode,
            })
        );
    };

    return (
        <>
            <Row>
                <Col md={9}>
                    <Card className="aspect-ratio">
                        <Card.Body>
                            <iframe
                                width="1280"
                                height="800"
                                src={changeVideoID(videos?.video)}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen="true"
                            ></iframe>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Form onFinish={(value) => handleSubmit(value)}>
                        <Row>
                            <Col lg={12}>
                                <Form.Item
                                    name="videoCode"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please insert the video code.",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Video ID" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <br />

                        <Row>
                            <Col lg={12}>
                                <Button type="submit">Change</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            {/* <Form>
                    <Form.Group class="mb-3">
                        <Form.Label>Video ID</Form.Label>
                        <Form.Control
                            name="videoID"
                            type="text"
                            placeholder="Enter Video ID"
                        />
                    </Form.Group>

                    <Button type="submit">Change</Button>
                </Form> */}
        </>
    );
}

export default App;
