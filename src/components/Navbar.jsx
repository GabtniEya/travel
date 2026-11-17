import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPlane } from 'react-icons/fa';

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="site-navbar" sticky="top">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" className="brand">
          <FaPlane aria-hidden="true" />
          <span>Travel<span className="brand-accent">Destinations</span></span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="main-navigation" />
        <BootstrapNavbar.Collapse id="main-navigation">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/destinations">
              Destinations
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              À propos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
