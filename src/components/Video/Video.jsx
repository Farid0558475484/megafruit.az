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
              src="https://www.youtube.com/embed/0TP4pvyHT4c"
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
              src="https://www.youtube.com/embed/o7Ufvtj_Mzc"
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
