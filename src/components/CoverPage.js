import React from 'react';
// import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logoCoverPage from '../assets/img/logo-coverpage.svg';
import { Container } from "react-bootstrap";

export const CoverPage = () => {

    return (
        <section id="coverPage" className="bg-coverpage d-flex justify-content-center align-items-center">
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center my-auto">
                    <img src={logoCoverPage} className="w-50" title="logocoverpage" alt="logocoverpage" />
                    <h1>We are super-duper awesome design studio</h1>
                </div>
            </Container>
        </section>
    );
}


