import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";
import { Container, Row, Col, Accordion, Image } from "react-bootstrap";
import { Spinner } from "@chakra-ui/react";

export const StateDetails = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { stateDetails } = store;
    const { stateName } = useParams();

    return (
        <Container className="h-100 mb-2">
            <Row className="flex-row d-flex justify-content-center m-2 gap-2">
                {stateDetails.length === 0 ? (
                    <Spinner />
                ) : (
                    stateDetails.map((state, index) => (
                        <section key={index} className="d-flex flex-row align-items-center justify-content-center">
                            <Col lg={4}>
                                <Image src={state.flags.png} alt={state.flags.alt} />
                            </Col>
                            <Col lg={4} className="d-flex flex-column">
                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Name:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            <div>
                                                <strong>Common:</strong> {state.name.common}
                                            </div>
                                            <div>
                                                <strong>Official:</strong> {state.name.official}
                                            </div>
                                            <div>
                                                <strong>Native name:</strong>
                                                <ul>
                                                    {Object.entries(state.name.nativeName).map(([language, names]) => (
                                                        <li key={language}>
                                                            <strong>{language}:</strong> {names.common} ({names.official})
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Population:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.population.toLocaleString()}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Capital:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.capital}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Capital Info:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="d-flex flex-column">
                                                <span><strong>Latitude: </strong>{state.capitalInfo.latlng[0]}</span>
                                                <span><strong>Longitude: </strong>{state.capitalInfo.latlng[1]}</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Region:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.region}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Sub Region:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.subregion}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Languages:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {Object.entries(state.languages).map(([name, language]) => (
                                                <div>
                                                    <strong>{name}: </strong> <span>{language}</span>
                                                </div>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Currencies:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {Object.entries(state.currencies).map(([currencyCode, currency]) => (
                                                <div className="d-flex flex-row" key={currencyCode}>
                                                    <strong>{currencyCode}: </strong> <span> {currency.name} ({currency.symbol})</span>
                                                </div>
                                            ))}

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Time Zones:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.timezones.toString()}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Alternative Spellings:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.altSpellings.map((spelling) => (
                                                <div className="d-flex flex-row">
                                                    {spelling}
                                                </div>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Latitude, Longitude:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="d-flex flex-column">
                                                <span><strong>Latitude: </strong>{state.latlng[0]}</span>
                                                <span><strong>Longitude: </strong>{state.latlng[1]}</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    {state.borders && state.borders.length > 0 && (
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header><strong>Borders:</strong></Accordion.Header>
                                            <Accordion.Body>
                                                {state.borders.map((nation, nationIndex) => (
                                                    <div key={nationIndex} className="d-flex flex-column">
                                                        <span>{nation}</span>
                                                    </div>
                                                ))}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )}
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Area:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.area.toLocaleString()} km²
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Car:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="d-flex flex-column">
                                                <span>Signs: {state.car.signs.toString()}</span>
                                                <span>Side guide: {state.car.side}</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Independent:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.independent.toString()}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>Landlocked:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.landlocked.toString()}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><strong>United Nations member:</strong></Accordion.Header>
                                        <Accordion.Body>
                                            {state.unMember.toString()}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </Col>
                        </section>
                    ))
                )}
            </Row>
        </Container>
    );
};

