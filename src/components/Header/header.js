import React, { Component } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Img from "gatsby-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default class Header extends Component {
  render() {
    const { siteMetadata } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg" variant="bg-1" id="home">
        <Container>
          <Navbar.Brand as={AnchorLink} to={`/`}>
            <span>{siteMetadata.title}</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <i className="fa fa-lg fa-bars" aria-hidden="true"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>

              <Nav.Link as={AnchorLink} key="Course" to={`/`} >
                Link1
              </Nav.Link>

              <Nav.Link as={AnchorLink} key="Faculties" to={`/#faculties`} className="ml-lg-3" >
                Link 2
              </Nav.Link>

              <Nav.Link as={AnchorLink} key="Register" to={`/#products`} className="btn btn-primary ml-lg-4" >
                Link 3
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
