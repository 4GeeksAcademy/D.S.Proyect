import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from "react-bootstrap";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Dropdown from 'react-bootstrap/Dropdown';

export const States = () => {
    const { store, actions } = useContext(Context);
    const { states } = store;
    const navigate = useNavigate()

    const handleClickFilter = (country) => {
        actions.getStateByCountries(country)
        actions.getSubregions(country)
        navigate(`/countries/${country}`)
    }

    const handleClickState = (state) => {
        navigate(`/states/${state.toLowerCase()}`)
        actions.getStateDetails(state.toLowerCase())
        console.log(store.stateDetails)
        actions.getStateByCountries(state.toLowerCase())
    }

    return (
        <Container fluid>
            <Navbar expand="md" className=" border bg-dark" data-bs-theme="dark">
                <span className="m-2 text-white">Filtred by:</span>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Country:
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {store.countries.map((country, index) => (
                            <Dropdown.Item onClick={() => handleClickFilter(country.region)} key={index}>{country.region}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
            <Row className="flex-row d-flex justify-content-center m-2 gap-2">
                {states.length === 0 ? (
                    <Spinner />
                ) : (
                    states.map((state, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img rounded className="p-2" variant="top" src={state.flags.png} style={{ width: '100%', height: '200px', objectFit: 'contain' }} alt={state.flags.alt} />
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-center align-items-center">
                                    <Button onClick={() => handleClickState(state.name.common)} size="lg" className="btn btn-outline-success d-flex align-items-center">
                                        {state.name.common}
                                    </Button>
                                </Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Capital: {state.capital}</ListGroup.Item>
                                <ListGroup.Item>Country: {state.region}</ListGroup.Item>
                                <ListGroup.Item>Language:  {state.languages ? (
                                    <ul>
                                        {Object.entries(state.languages).map(([clave, valor]) => (
                                            <li key={clave}>
                                                {valor}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No language information available</p>
                                )}</ListGroup.Item>
                                <ListGroup.Item>Country: {state.region}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body rounded className=" d-flex justify-content-between align-items-center">
                                <Card.Link className="d-flex align-items-center gap-3">
                                    <box-icon type="btn" name='map-alt' color='#eab010'></box-icon>
                                    <box-icon type="btn" name='street-view' color='#eab010' ></box-icon>
                                </Card.Link>
                                <Card.Link className="d-flex align-items-center">
                                    <box-icon size="lg" type="btn" name='heart-circle' color='#eab010'></box-icon>
                                </Card.Link>
                            </Card.Body>
                        </Card>

                    ))
                )
                }
            </Row>
        </Container>
    );
};
