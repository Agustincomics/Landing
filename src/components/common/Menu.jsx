import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/fenix2.png";

const Menu = () => {
    return (
    <>
      <Navbar className="navbar-cristal py-0" variant="dark" expand="lg" bg='dark'>
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Logo Bon dia" className="logoJSON" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-gourmet" />
          <Navbar.Collapse id="navbar-gourmet">
            <Nav className="ms-auto">
              <NavLink className="nav-item nav-link">
                Inicio
              </NavLink>
              <NavLink className="nav-item nav-link" to={"/AcercaDe"}>
                Nosotros
              </NavLink>
              
                <>
                  
                </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <a href="#" className="btn-floating" id="boton-arriba">
        <FaArrowUp />
      </a>
    </>
    );
};

export default Menu;