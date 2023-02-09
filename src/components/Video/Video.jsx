import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Video() {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col md={6}>
            <iframe
                 width="100%"
              height="315"
              src="https://www.youtube.com/embed/r6ElgaxlcR8"
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
              src="https://www.youtube.com/embed/7Ol8KlPoGWY"
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
              src="https://www.youtube.com/embed/g19A9Cx5UrM"
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
              src="https://www.youtube.com/embed/Dg27UULkRyo"
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

export default Video;
