import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./../../img/13.1.jpeg";
import s from "./SweetFruit.module.scss";
import img2  from './../../img/13.2.jpeg'
import img3  from './../../img/13.3.jpeg'

function SweetFruit() {
  return (
    <div className={s.top}>
      <Container fluid>
        <Row>
          <Col className={s.col}>
            <div className={s.position}>
              <img src={img1} alt=""  className="img-fluid"/>
              
                <h2 className={s.absolute}>SWEET GRAPE</h2>
             
            </div>
          </Col>

          <Col className={s.col}>
            <div className={s.position}>
              <img src={img2} alt=""  className="img-fluid"/>
              
                <h2 className={s.absolute}>JUICY
CHERRY</h2>
             
            </div>
          </Col>


          <Col className={s.col}>
            <div className={s.position}>
              <img src={img3} alt=""  className="img-fluid"/>
              
                <h2 className={s.absolute}>BEAUTIFUL
STRAWBERRY</h2>
             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SweetFruit;
