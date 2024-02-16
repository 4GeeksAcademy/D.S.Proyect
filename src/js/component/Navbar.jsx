import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MyModal } from './Modal.jsx';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext.js';
import { useNavigate } from 'react-router-dom';



export const MyNavbar = () => {
    const [showModal, setShowModal] = useState(false);
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const [input, setInput] = useState("")
    const [isValid, setIsValid] = useState(null)


    const handleSearch = () => {
        actions.getStates();
        const matchingState = store.states.find((state) => state.name.common.toLowerCase() === input.toLowerCase() || state.name.official.toLowerCase() === input.toLowerCase())
        if (matchingState && matchingState.name && matchingState.name.common) {
            setIsValid(matchingState !== undefined && matchingState !== null);
            actions.getStateDetails(matchingState.name.common)
            navigate(`/states/${matchingState.name.common}`);
            setInput("")
        }
    };

    const handleChange = (event) => {
        setInput(event.target.value)
        setIsValid(false);
    }

    const handleStates = () => {
        navigate("/states")
        actions.getStates()
        actions.getCountries()
        console.log(store.countries)
    }

    const handleCountries = () => {
        navigate("/countries/")
        actions.getCountries()
    }

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <Navbar expand="md" className="p-2 bg-primary border" data-bs-theme="dark">
            <Container fluid>
                <Nav className='d-flex justify-content-between'>
                    <Navbar.Brand href="#">
                        <Link to={"/"}>Title</Link>
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            id="input"
                            type="text"
                            placeholder="Search State..."
                            className={`me-2 form-control ${isValid ? 'is-valid' : 'is-invalid'}`}
                            aria-label="Search"
                            value={input}
                            onChange={handleChange}
                        />
                        <Button onClick={(e) => { e.preventDefault(); handleSearch(); }} type='submit' variant="outline-success">Search</Button>
                    </Form>
                </Nav>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            <Link to={"/"}>To Compra</Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 gap-3">
                            <Nav.Link href="#action1">
                                <Button onClick={handleStates}>States</Button>
                            </Nav.Link>
                            <Nav.Link href="#action1">
                                <Button onClick={handleCountries}>Country</Button>
                            </Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 gap-3">
                            <Nav.Link onClick={() => setShowModal(true)} className='d-flex justify-content-center align-items-center'>
                                <box-icon type='solid' name='user-circle'></box-icon>
                            </Nav.Link>
                            <Nav.Link className='d-flex justify-content-center align-items-center'>
                                <box-icon type='solid' name='cart'></box-icon>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <MyModal showModal={showModal} close={handleModalClose} />
            </Container>
        </Navbar>
    )
}