import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="bg-dark text-light border-top">
            <Container>
                <Row className="d-flex justify-content-end">
                    <Col className="d-flex justify-content-end p-1 gap-3">
                        <box-icon name='instagram-alt' type='logo' color='#df6f16'></box-icon>
                        <box-icon name='facebook' type='logo' color='#df6f16' ></box-icon>
                        <box-icon type='logo' name='telegram' color='#df6f16'></box-icon>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-2 bg-secondary">
                © {new Date().getFullYear()} Davide Suzzarellu Project
            </div>
        </footer>
    )
}