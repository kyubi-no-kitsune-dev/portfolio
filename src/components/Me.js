import { Col, Container, Row } from "react-bootstrap";

export const Me = () => {
    return (
        <section className="Me" id="me">
            <Container className="h-75 d-flex flex-column justify-content-between align-items-start">
                    <h1>About Me<span>.</span></h1>
                    <Row className="align-items-center justify-content-end">
                        <Col xs={12} md={6} xl={3}>
                            <p className="me-border-top pt-7">As a first-year Master's student in Computer Engineering, I have gained experience in software development and algorithm design. I am proficient in creating software and providing IT services as a freelancer and apprentice.<br/><br/> My educational background includes studies at CESI engineering school in Rouen, where I deepened my knowledge in mathematics, software architecture, information systems security and management, and software engineering.<br/><br/>  I have also obtained a degree as a Web Project Manager from EPITECH computer</p>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <p className="me-border-top pt-7">school in Montpellier, where I developed skills in programming languages such as Python, PHP, HTML5, CSS3, and JavaScript.<br/><br/> My experience as an apprentice IT Referent at GAULT INDUSTRIES has allowed me to apply my skills by writing and deploying algorithms to correct shipping notice errors, selecting banking management software to optimize accounting processes, and mapping and referencing the company's network and computers.<br/><br/> As a self-employed web developer at WEEGLE, I have created customized programs to assist clients in their tasks,</p>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <p className="me-border-top pt-7"> developed tailor-made websites to enhance their businesses, and designed impactful email campaigns and advertisements.<br/> Additionally, during my time as an apprentice web developer at PUBCOMNET, I created a showcase website for a hotel to increase their booking rate, managed customer databases to prevent data corruption, and developed a backend interface using Symfony to provide email services and registration forms. <br/><br/> Outside of my professional career, I am actively engaged as a member of the Rouxmesnil Basketball Club and the Normandy basketball arbitration committee.</p>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}
