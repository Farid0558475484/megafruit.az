import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./../../img/4.1.jpeg";
import img2 from "./../../img/4.2.jpeg";
import img3 from "./../../img/4.3.jpeg";
import s from "./Garden.module.scss";
import img51 from "./../../img/5.1.svg";
import img52 from "./../../img/5.2.svg";
import img53 from "./../../img/5.3.svg";
import img54 from "./../../img/5.4.svg";
import img55 from "./../../img/5.5.svg";
import img56 from "./../../img/5.6.svg";

function Garden() {
  return (
    <div className={s.top}>

<Container>
    <Row>
        <div >
            <Col md={12} className="d-flex justify-content-around">
        <img src={img51} alt="img11" className={s.img5} />
        <img src={img52} alt="img11" className={s.img5} />
        <img src={img53} alt="img11"  className={s.img5}/>
        <img src={img54} alt="img11"  className={s.img5}/>
        <img src={img55} alt="img11"  className={s.img5}/>
        <img src={img56} alt="img11" className={s.img5}/>
        </Col>
        </div>
    </Row>
</Container>

      <Container className={s.top} >
        <Row>
          <Col >
            <img src={img1} alt="img11" className={s.img} />
          </Col>
          <Col >
            <img src={img3} alt="img11" className={s.img}/>
          </Col>
          <Col >
            <img src={img2} alt="img11" className={s.img} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Garden;
