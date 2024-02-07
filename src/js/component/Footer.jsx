import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Footer = () => (
	<Container fluid className="footer mt-auto py-3 text-center bg-dark ">
		<Row>
		 	<Col className="text-white">
				Project page
		 	</Col  >
			<Col className="d-flex flex-row gap-3 justify-content-center">
				<i class="display-6 text-white fa-brands fa-instagram"></i>	
				<i class="display-6 text-white fa-brands fa-telegram"></i>	
				<i class="display-6 text-white fa-brands fa-facebook"></i>
				<i class="display-6 text-white fa-brands fa-instagram"></i>	
		 	</Col>
		</Row>
	</Container>
);
