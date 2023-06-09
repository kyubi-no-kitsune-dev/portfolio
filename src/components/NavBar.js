import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" id="coverpage" style={{ position: scrolled ? 'sticky' : 'relative' }}>
            <a href="#nav-main" className="arrow"></a>
            <Navbar.Toggle aria-controls="nav-main" />
            <Navbar.Collapse id="nav-main">
                <Container className="d-flex p-0">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                        <Nav>
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#me" className={activeLink === 'me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('me')}>About Me</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}