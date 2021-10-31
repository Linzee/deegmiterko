import React, { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="site-footer bg-secondary" id="footer">
        <Container>
          <Row>
            <Col md={12}>
              <div className="float-right">
                Right
              </div>
              <p className="pt-3 pb-3">
                © Left
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
