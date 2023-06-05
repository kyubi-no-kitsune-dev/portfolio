import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import kitsuneImg from "../assets/img/kitsune.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["web Developer", "Web Designer", "UI/UX designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1 className="pt-4">{`Hi I'm `}<span className="wrap">{text}</span></h1>
                        <p>I am delighted to present my professional journey and technical skills in the field of computer science. As a passionate engineer, I have gained extensive experience and expertise in various areas such as software development, system architecture, and application deployment.<br/>

Over the years, I have worked on a multitude of challenging projects that have allowed me to push my limits and explore new technologies. I have developed a deep understanding of programming languages, frameworks, and modern development tools, enabling me to design and implement efficient and scalable software solutions.<br/><br/>

In my portfolio, you will discover a selection of projects I have completed, showcasing my technical skills, creativity, and ability to work in a team. I invite you to explore my work and discover how I can contribute to your next project or company.<br/><br/>

Feel free to contact me to discuss your needs or to learn more about my skills. Thank you for visiting, and I hope to have the opportunity to collaborate with you soon.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={kitsuneImg} alt="kitsune"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
