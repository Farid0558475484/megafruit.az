import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Video2() {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col md={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/PreJaUEyvNY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
          <Col md={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5foaz6jHRHc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
          <Col md={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bEDzegiC1DM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>

          <Col md={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/DejrykQp-GI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Video2;
