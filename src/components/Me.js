import { Col, Container, Row } from "react-bootstrap";
import kitsuneImg from "../assets/img/kitsune.png";

export const Me = () => {
    return (
        <section className="Me" id="me">
            <Container className="h-75 d-flex flex-column justify-content-between align-items-start">
                    <h1>About Me<span>.</span></h1>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={3}>
                            <img src={kitsuneImg} alt="kitsune"></img>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <p className="me-border-top pt-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <p className="me-border-top pt-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <p className="me-border-top pt-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}
