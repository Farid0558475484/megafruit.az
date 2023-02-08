import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./FreeShipping.module.scss";
import img71 from "./../../img/7.11.jpg";

function FreeShipping() {
  return (
    <div className={s.free}>
      <Container>
        <Row>
          <Col>
            <div className={s.icon}>
              <img src={img71} alt="" className={s.imglogo} />
              <div>
                <p className={s.title}>cash on delivery</p>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Aliquam sit amet tellus mauris</p>
              </div>
            </div>

          </Col>
          <Col>
            <div className={s.icon}>
              <img src={img71} alt="" className={s.imglogo} />
              <div>
                <p className={s.title}>cash on delivery</p>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Aliquam sit amet tellus mauris</p>
              </div>
            </div>

          </Col>
          <Col>
            <div className={s.icon}>
              <img src={img71} alt="" className={s.imglogo} />
              <div>
                <p className={s.title}>cash on delivery</p>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Aliquam sit amet tellus mauris</p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FreeShipping;
