import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { Spinner } from "@chakra-ui/react";
import { Row } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

export const Country = () => {
    const { store, actions } = useContext(Context)
    const { statesByCountries } = store
    const { country } = useParams()
    const navigate = useNavigate()

    const handleClickFilter = (subregion) => {
        actions.getStateBySubregion(subregion.toLowerCase())
        navigate(`/region/${subregion.toLowerCase()}`)
    }


    return (
        <Container fluid>
            <Navbar expand="md" className=" border bg-dark" data-bs-theme="dark">
                <span className="m-2 text-white">Filtred by:</span>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Subregion:
                    </Dropdown.Toggle>
                    {store.subregions.length == 0 ? (
                        <Dropdown.Menu className="mt-2">
                            <Dropdown.Item>No Subregion avaiable!</Dropdown.Item>
                        </Dropdown.Menu>
                    ) : (
                        <Dropdown.Menu className="mt-2">
                            {store.subregions.map((subregion, index) => (
                                <Dropdown.Item onClick={() => handleClickFilter(subregion)} key={index}>{subregion}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    )}
                </Dropdown>
            </Navbar>
            <Row className="flex-row d-flex justify-content-center m-2 gap-2">
                {statesByCountries.length === 0 ? (
                    <Spinner />
                ) : (
                    statesByCountries.map((state, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img src={state.flags.png} className="p-2" variant="top" style={{ width: '100%', height: '200px', objectFit: 'contain' }} alt={state.flags.alt} />
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <Button size="lg" className="btn btn-outline-success d-flex align-items-center">
                                    {state.name.common}
                                </Button>
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
    )
}