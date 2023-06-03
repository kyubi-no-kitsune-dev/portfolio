import { Col, Container, Row} from "react-bootstrap";
import iconVuejs from '../assets/img/vuejs-icon.svg';
import iconCss from '../assets/img/css-icon.svg';
import iconHtml from '../assets/img/html-icon.svg';
import iconJs from '../assets/img/js-icon.svg';
import iconPython from '../assets/img/python-icon.svg';
import iconReact from '../assets/img/reactjs-icon.svg';
import iconMysql from '../assets/img/mysql-icon.svg';
import iconMsftNet from '../assets/img/net-icon.svg';
import iconTechnic from '../assets/img/technic-concept-icon.svg';
import iconGit from '../assets/img/Git-icon.svg';
import iconEnglish from '../assets/img/english-icon.svg';
import iconDebug from '../assets/img/debug-icon.svg';

export const Skills = () => {

    return (
        <section className="Skills" id="skills">
            <Container className="h-75 d-flex flex-column justify-content-between">
                <h1 className="text-end">Skills<span>.</span></h1>
                <div className="d-flex justify-content-end">
                    <div className="skills-border-top"> </div>
                </div>
                <Row className=" pt-5 justify-content-between">
                     <Col xs={12} md={3} xl={2}>
                        <img src={iconHtml} alt="html" ></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconCss} alt="css3" ></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconJs} alt="javascript"></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconMsftNet} alt=".net"></img>
                    </Col>
                </Row>
                <Row className="pt-5 justify-content-between">
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconVuejs} alt="vuejs"></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconMysql} alt="mysql"></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconReact} alt="reactjs"></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconPython} alt="python"></img>
                    </Col>
                </Row>
                <Row className="pt-5 justify-content-between">
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconTechnic} alt="technic"></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconGit} alt="git"></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconDebug} alt="debug"></img>
                    </Col>
                    <Col xs={12} md={3} xl={2}>
                        <img src={iconEnglish} alt="english"></img>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}