import { Col, Container, Row } from "react-bootstrap";

export const Experience = () => {
    return (
        <section className="Experience" id="experience">
            <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={7} xl={7} className="bg-col-expe d-flex flex-column align-items-center justify-content-between pt-7">
                            <h1>Clean, Up-to-date & Modern Design</h1>
                            <Row className="align-items-center w-100 pb-7">
                                <Col xs={12} md={4} xl={4} className="d-flex flex-column align-items-center pt-4">
                                    <p style={{fontSize: '50px', fontWeight: '500'}}>9</p>
                                    <p>Years on the Market</p>
                                </Col>
                                <Col xs={12} md={4} xl={4} className="d-flex flex-column align-items-center me-border-top pt-4">
                                    <p style={{fontSize: '50px', fontWeight: '500'}}>4k</p>
                                    <p>Happy Customers</p>
                                </Col>
                                <Col xs={12} md={4} xl={4} className="d-flex flex-column align-items-center pt-4">
                                    <p style={{fontSize: '50px', fontWeight: '500'}}>5</p>
                                    <p>Star Support</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={5} xl={5} className="bg-black d-flex flex-column justify-content-between align-items-center">
                            <div>
                                <p className="pt-7 px-5 pb-3" style={{fontSize: '20px'}}>The Scroller theme is recognized thanks to the clean, readable and well-organized design and layout since 2013!</p>
                                <div className="me-border-top ms-5"> </div>
                            </div>
                            <h1 className="pb-7 px-5">Modular Pages & Responsive Layout</h1>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}