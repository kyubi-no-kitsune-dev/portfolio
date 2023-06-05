import { Col, Container, Row } from "react-bootstrap";
import reseauxImg from "../assets/img/reseaux.png";
import programmationImg from "../assets/img/programmation.png";
import bigdataImg from "../assets/img/bigdata.png";

export const Projects = () => {
    return (
        <section className="Projects" id="projects">
            <Container className="pt-7">
                    <h1 className="text-center pb-3">Latest Works<span>.</span></h1>
                    <div className="d-flex justify-content-center pb-4">
                        <div className="projects-border-top"> </div>
                    </div>
                    <p className="text-center">Here are some examples of my latest programming projects that showcase my ability to innovate and demonstrate my skills.<br></br>Let them inspire you!</p>
                    <Row className="mt-100 mb-150">
                        <Col xs={12} md={6} xl={4}>
                            <img src={reseauxImg} alt="reseaux"></img>
                            <p className="pt-4" style={{fontWeight: '500'}}>Networking  <span> • </span>  Security</p>
                            <h5>Animus Exendus project</h5>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <img src={programmationImg} alt="programmation"></img>
                            <p className="pt-4" style={{fontWeight: '500'}}>Coding  <span> • </span>  UML <span> • </span> C#</p>
                            <h5>EasySave project</h5>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <img src={bigdataImg} alt="big data"></img>
                            <p className="pt-4" style={{fontWeight: '500'}}>Big Data <span> • </span>  PostgreSQL</p>
                            <h5>Cloud Healthcare Unit Project</h5>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}
