import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './NavbarMenu.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarMenu = () => {
    return (
        <Navbar expand="lg" className="myNav">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src="/images/Nr31FKR_logo.jpg"
                        alt="Логотип"
                        className="logo-img"
                    />
                    <span className="site-title ms-2">Nr31FKR Official</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to="/">Головна</Nav.Link>
                        <Nav.Link as={Link} to="/about">Про нас</Nav.Link>


                        <NavDropdown title="Більше" id="basic-nav-dropdown">

                            <NavDropdown.Item as={Link} to="/join">Приєднатися</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1kkzzUGL1VGYnH3OrzGC8TsalzWd42ZNYfP6yhvxPi7U/edit?usp=sharing" target="_blank">
                                Полковий реєстр</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.fsegames.eu/forum/index.php?topic=49585.0" target="_blank">
                                Форумна сторінка</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/support">Підтримати</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavbarMenu;