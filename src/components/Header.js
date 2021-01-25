//publics
import "../index.css";
//images
import logo from "../images/logo.png";
import { BANNER_1, BANNER_2, BANNER_3, BANNER_4 } from "../images/banner";
//library
import React from "react";
import Slider from "react-slick";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar , Nav, Button, Form , Row, Col, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="header">
        <img src={logo} className="logo" />
        <Router>         
        <Navbar className="toolbar">
          
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faHome} />Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-info">Search</Button>
          </Form>
         

        </Navbar>              
        </Router>
        
      <Row>
            <Col sm={9}>
                <Slider {...settings} className="slide_header">
                  <div>
                    <img src={BANNER_1} />
                  </div>

                  <div>
                    <img src={BANNER_2} />
                  </div>

                  <div>
                    <img src={BANNER_3} />
                  </div>

                  <div>
                    <img src={BANNER_4} />
                  </div>
                </Slider>
            </Col>
            <Col sm={3}>
              <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </Col>
              
      </Row>
        
      </div>
    );
  }
}
export default Header;