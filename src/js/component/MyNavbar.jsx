import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const MyNavbar = () => {
  return (
    <>
        <Navbar expand="md" className="bg-warning mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Find Price</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Find Price
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 gap-2 pe-3">
                  <Nav.Link href="#action1">Seller</Nav.Link>
                  <Nav.Link href="#action2">Category</Nav.Link>
				          <Nav.Link href="#action3">Brands</Nav.Link>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Nav>
                <Nav className="justify-content-end gap-2 me-3">
                  <Nav.Link href="#action4">
                    <i className="fa-solid fa-heart"></i>
                  </Nav.Link>
                  <Nav.Link href="#action5">
                    <i class="fa-solid fa-user"></i>
                  </Nav.Link>
                  <Nav.Link href="#action">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}
