import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default class service extends Component {
  render() {
    const { links } = this.props;
    return (
      <div className="linktree">
        <Container>
          {links.map(item => (
            <Row>
              <Col md={12} className="p-3">
                {
                  item.link.startsWith("http") ? (
                    <OutboundLink href={item.link}>
                      {item.title}
                    </OutboundLink>
                  ) : (
                    <AnchorLink to={item.link}>
                      {item.title}
                    </AnchorLink>
                  )
                }
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}
