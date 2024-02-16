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

export const Subregion = () => {
    const { store, actions } = useContext(Context)
    const { subregion } = useParams()
    const navigate = useNavigate()

    const handleClickFilter = (subregion) => {
        actions.getStateBySubregion(subregion.toLowerCase())
        navigate(`/region/${subregion.toLowerCase()}`)
    }


    return (
        <Container fluid>
            <Row className="flex-row d-flex justify-content-center m-2 gap-2">
                {store.statesBySubregion.length === 0 ? (
                    <Spinner />
                ) : (
                    store.statesBySubregion.map((state, index) => (
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
    )
}