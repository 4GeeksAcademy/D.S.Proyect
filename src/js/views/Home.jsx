import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../styles/home.css";
import { Container } from "react-bootstrap";

export const Home = () => (
  <Container fluid  className="vh-100 d-flex justify-content-center align-items-center bg-dark  mb-3">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
        src="https://www.shutterstock.com/image-photo/kazan-russia-oct-02-2021-260nw-2050982984.jpg"
        alt="First slide"
        className="img-fluid"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img 
        src="https://www.shutterstock.com/image-photo/kazan-russia-oct-02-2021-260nw-2050982984.jpg"
        alt="First slide"
        className="img-fluid"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        src="https://www.shutterstock.com/image-photo/kazan-russia-oct-02-2021-260nw-2050982984.jpg"
        alt="First slide"
        className="img-fluid"   />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
);
