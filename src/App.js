import { Form, Input } from "antd";
import { Container, Button, Card, Row, Col, Ratio } from "react-bootstrap";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ChangeVideo } from "./Action";

function App() {
    const dispatch = useDispatch();
    const { videos } = useSelector((state) => state);
    const changeVideoID = (videoID) => {
        let srcLink = null;
        if (videoID != null) {
            srcLink = "https://www.youtube.com/embed/" + videoID;
        } else {
            srcLink = "https://www.youtube.com/embed/r4_JbG7TSgQ";
        }

        return srcLink;
    };

    const handleSubmit = (value) => {
        dispatch(
            ChangeVideo({
                video: value.videoCode,
            })
        );
    };

    const removeIconColor = () => {
        let thumb_up_icon = document.getElementById("thumb-up-icon");
        let thumb_down_icon = document.getElementById("thumb-down-icon");

        thumb_down_icon.classList.remove("thumb-down-color");
        thumb_up_icon.classList.remove("thumb-up-color");
    };

    const Like = () => {
        let thumb_up_animation = document.getElementById("thumb-up-animation");
        let thumb_down_animation = document.getElementById(
            "thumb-down-animation"
        );

        let thumb_up_icon = document.getElementById("thumb-up-icon");
        let thumb_down_icon = document.getElementById("thumb-down-icon");

        if (window.innerWidth > 768) {
            thumb_up_animation.classList.remove("thumb-up-display-none");
            thumb_down_animation.classList.remove("thumb-down");

            thumb_down_icon.classList.remove("thumb-down-color");

            if (thumb_up_icon.classList.contains("thumb-up-color")) {
                thumb_up_icon.classList.toggle("thumb-up-color");
                thumb_up_animation.classList.toggle("thumb-up");
                thumb_up_animation.classList.toggle("thumb-up-display-none");
            } else {
                thumb_up_icon.classList.add("thumb-up-color");
                thumb_up_animation.classList.add("thumb-up");
                thumb_down_animation.classList.add("thumb-down-display-none");
            }
        } else {
            thumb_down_icon.classList.remove("thumb-down-color");

            if (thumb_up_icon.classList.contains("thumb-up-color")) {
                thumb_up_icon.classList.toggle("thumb-up-color");
            } else {
                thumb_up_icon.classList.add("thumb-up-color");
                thumb_down_animation.classList.add("thumb-down-display-none");
            }
        }
    };

    const Dislike = () => {
        let thumb_down_animation = document.getElementById(
            "thumb-down-animation"
        );
        let thumb_up_animation = document.getElementById("thumb-up-animation");

        let thumb_up_icon = document.getElementById("thumb-up-icon");
        let thumb_down_icon = document.getElementById("thumb-down-icon");

        if (window.innerWidth > 768) {
            thumb_down_animation.classList.remove("thumb-down-display-none");
            thumb_up_animation.classList.remove("thumb-up");

            thumb_up_icon.classList.remove("thumb-up-color");

            if (thumb_down_icon.classList.contains("thumb-down-color")) {
                thumb_down_icon.classList.toggle("thumb-down-color");
                thumb_down_animation.classList.toggle("thumb-down");
                thumb_down_animation.classList.toggle(
                    "thumb-down-display-none"
                );
            } else {
                thumb_down_icon.classList.add("thumb-down-color");
                thumb_down_animation.classList.add("thumb-down");
                thumb_up_animation.classList.add("thumb-up-display-none");
            }
        } else {
            thumb_up_icon.classList.remove("thumb-up-color");

            if (thumb_down_icon.classList.contains("thumb-down-color")) {
                thumb_down_icon.classList.toggle("thumb-down-color");
            } else {
                thumb_down_icon.classList.add("thumb-down-color");
                thumb_up_animation.classList.add("thumb-up-display-none");
            }
        }
    };

    return (
        <>
            <Row>
                <Col md={9}>
                    <Card className="aspect-ratio">
                        <Card.Body>
                            <Ratio aspectRatio={10 / 16}>
                                <div>
                                    <iframe
                                        src={changeVideoID(videos?.video)}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen={true}
                                    ></iframe>
                                </div>
                            </Ratio>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Container className="video-form-container">
                        <div className="video-form-div">
                            <Row>
                                <Col sm={5} className="text-center thumb-size">
                                    <i
                                        className="fa-solid fa-thumbs-up thumb-up-display-none"
                                        id="thumb-up-animation"
                                    ></i>
                                </Col>

                                <Col sm={5} className="text-center thumb-size">
                                    <i
                                        className="fa-solid fa-thumbs-down thumb-down-display-none"
                                        id="thumb-down-animation"
                                    ></i>
                                </Col>
                            </Row>

                            <Row className="text-center mb-3">
                                <Col sm={5} className="text-center">
                                    <Button
                                        className="thumb-size"
                                        id="thumb-up-button"
                                        onClick={Like}
                                    >
                                        <i
                                            className="fa-solid fa-thumbs-up"
                                            id="thumb-up-icon"
                                        ></i>
                                    </Button>
                                </Col>

                                <Col sm={5} className="text-center">
                                    <Button
                                        className="thumb-size"
                                        id="thumb-down-button"
                                        onClick={Dislike}
                                    >
                                        <i
                                            className="fa-solid fa-thumbs-down"
                                            id="thumb-down-icon"
                                        ></i>
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={10}>
                                    <Form
                                        onFinish={(value) =>
                                            handleSubmit(value)
                                        }
                                        className="text-bottom"
                                    >
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
                                                    <Input
                                                        placeholder="Video ID"
                                                        className="font-20"
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <br />

                                        <Row>
                                            <Col lg={12}>
                                                <Button
                                                    type="submit"
                                                    className="font-20"
                                                    onClick={removeIconColor}
                                                >
                                                    Change
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Col>
            </Row>
        </>
    );
}

export default App;
