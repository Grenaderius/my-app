import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
    return (
        <Navbar className="myNavbar">
            <Container>
                <Navbar.Brand className="myNavbarText" href="#login">
                    <img src="/images/Nr31FKR_logo.jpg" alt="Logo" width="50" height="50" />
                    My page!
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="myNavbarText">
                        Created by: <a href="#login">Generadier</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;