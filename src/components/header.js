import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class HeaderComponent extends Component {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false,};
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
<header className='header'>
    <Container>
        <Row>
        <Col>
            <Navbar light toggleable className='social-media'>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <a href="https://github.com/FernandoBoza" target='_blank' className='pl-0 nav-link' rel="noopener noreferrer">
                <i className="fa fa-github"></i></a>
            </NavItem>
            <NavItem>
                <a href="https://twitter.com/FernandoTechy" target='_blank' className='nav-link' rel="noopener noreferrer">
                <i className="fa fa-twitter"></i></a>
            </NavItem>
            <NavItem>
                <a href="https://www.behance.net/fernandoboza" target='_blank' className='nav-link' rel="noopener noreferrer">
                <i className="fa fa-behance"></i></a>
            </NavItem>
            <NavItem>
                <a href="https://linkedin.com/in/fboza" target='_blank' className='nav-link' rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i></a>
            </NavItem>
            </Nav>
            </Navbar>
        </Col>
        </Row>
    </Container>

    <Container>
        <Navbar light toggleable className='pl-0'>
            <NavbarBrand href="/"><h1 className='thin'>Fernando Boza</h1></NavbarBrand>
            <NavbarToggler right onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto pageLinks" navbar>
            <NavItem>
                <NavLink exact to="/" className='nav-link'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/portfolio" className='nav-link'>Portfolio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/tutorial" className='nav-link'>Tutorial</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="https://drive.google.com/open?id=0B0cXXFBUeItLZlR5MGtvRlY0RUk" target='_blank' className='nav-link'>CV</NavLink>
            </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </Container>
</header>
    );
  }
}

export default HeaderComponent;