import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Header = () => {
     const activeStyle= {
          fontWeight : "bold",
          color : "darkcyan",
          
      }
     
     return (
          <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand  href="#home"><img alt=""
            src="https://icon2.cleanpng.com/20180516/w/kisspng-electric-light-copyright-free-incandescent-light-b-5afbadc7aee409.3907345415264434637164.jpg"
            width= "45"
            height="40"
            
            
            className="d-inline-block align-top"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link className="link"  activeStyle={activeStyle} to="/home">Home</Nav.Link>
              <Nav.Link className="link" activeStyle={activeStyle} to="/about">About</Nav.Link>
              <Nav.Link className="link" activeStyle={activeStyle} to="/services">Services</Nav.Link>
              <Nav.Link className="link"  activeStyle={activeStyle} to="/admission">Admission</Nav.Link>
                <NavDropdown title="Others" id="collasible-nav-dropdown">
                  <NavDropdown.Item to="/email">Email</NavDropdown.Item>
                  <NavDropdown.Item to="/number">Number</NavDropdown.Item>
                  <NavDropdown.Item to="/extra-care">Extra Care</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          </div>
     );
};

export default Header;