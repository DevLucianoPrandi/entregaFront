import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iso from "../../assets/img/iso.png";
import './footer.css'

import { Link } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function Footer() {
    return (
        <div>
            <Navbar className="footer" variant='dark'>
                <Container>
                    <Row>
                        <Col xs="12" md="6" lg="3">
                            <Navbar.Brand href="#home"><img src={Iso} className='isologo' alt='Logo Interlingua' /></Navbar.Brand>
                        </Col>
                        <Col xs="12" md="6" lg="4">
                        <div className="address text-secondary " style={{ marginBottom: '1em'}}> <h6>Encontranos en:</h6><br />
                        Dirección: Av. Siempreviva 37 <br /> C1431CIF - CABA, Argentina <br/>
                        E-Mail: Consultas@interlingua.edu.ar<br/>
                        Teléfono: +54 9 11 6375.5662
                        </div>
                        </Col>
                        <Col xs="12" md="12" lg="5">
                            <Row className='mt-1'>
                                <Navbar.Text className="reservar">
                                    <Nav.Link style={{color:'darkmagenta'}} as={Link} to="./reserva">¡Reservá horas!</Nav.Link>
                                </Navbar.Text>
                            </Row>
                            <Row>
                                <div style={{width: '18em'}}>
                                    <NavbarCollapse  className="mt-3 bg-white pt-1 rounded-3 justify-content-center d-flex" >
                                        <Nav>
                                            <Nav.Item>
                                                <Nav.Link href="http://www.instagram.com" target="_blank"><box-icon name='instagram' type='logo' color="grey"></box-icon></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="http://www.facebook.com" target="_blank"><box-icon name='facebook-square' type='logo' color="grey"></box-icon></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="http://www.youtube.com" target="_blank"><box-icon name='youtube' type='logo' color="grey"></box-icon></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="http://www.linkedin.com" target="_blank"><box-icon name='linkedin-square' type='logo' color="grey"></box-icon></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="http://www.twitter.com" target="_blank"><box-icon name='twitter' type='logo' color="grey"></box-icon></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="http://www.twitch.com" target="_blank"><box-icon name='twitch' type='logo' color="grey"></box-icon></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </NavbarCollapse>
                                </div>
                            </Row>
                        </Col>
                        <Row>

                        <Navbar.Text>
                        <div className="enlaces">
                                    <div className='text-primary'><h5>Contenido</h5></div>
                                    <Nav.Link className='text-primary pt-1' as={Link} to="./home"><h6>Home</h6></Nav.Link>
                                    <Nav.Link className='text-primary pt-1' as={Link} to="./servicios"><h6> Servicios</h6></Nav.Link>
                                    <Nav.Link className='text-primary pt-1' as={Link} to="./idiomas"><h6> Idiomas</h6></Nav.Link>
                                    <Nav.Link className='text-primary pt-1' as={Link} to="./niveles"><h6> Niveles</h6></Nav.Link>
                                    <Nav.Link className='text-primary pt-1' as={Link} to="./calendario"><h6> Calendario</h6></Nav.Link>
                                    <Nav.Link className='text-primary pt-1' as={Link} to="./contacto"><h6> Contacto</h6></Nav.Link>
                                    </div>
                                </Navbar.Text>

                        </Row>
                    </Row>
                </Container>
            </Navbar>
                <Navbar fixed='buttom' bg="dark" variant='dark'>
                    <Container className="justify-content-end" style={{ width: "100%" }}>
                        <Row>
                            <Navbar.Collapse>
                                <Navbar.Text>
                                    Powered by:
                                </Navbar.Text>
                                <box-icon type='logo' name='react' color="white"></box-icon>
                                <box-icon name='bootstrap' type='logo' color="white"></box-icon>
                                <box-icon name='javascript' type='logo' color="white"></box-icon>
                                <box-icon name='html5' type='logo' color="white"></box-icon>
                                <box-icon name='css3' type='logo' color="white"></box-icon>
                            </Navbar.Collapse>
                        </Row>
                    </Container>
                </Navbar>
        </div>
    );
}

export default Footer;