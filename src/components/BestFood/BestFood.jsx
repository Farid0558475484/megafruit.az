import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./BestFood.module.scss";
import img2 from "./../../img/6.2.webp";
import img3 from "./../../img/6.3.webp";
import img4 from "./../../img/6.4.webp";
import img5 from "./../../img/6.5.webp";
import img6 from "./../../img/6.6.webp";

function BestFood() {
  return (
    <div className={s.img}>
      <Container>
        <Row>
          <div className={s.top}>
            <h3 className={s.title}>We Grow Best Food</h3>
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor
              incididunt
            </p>
          </div>

          <Col md={4}>
            <div className={s.content}>
              <div className={s.imgh1}>
        
                <img src={img3} alt="1234" className="img-fluid" />
                <h1 className={s.titleh1}>01.</h1>
              </div>

              <p className={s.titletext}>Always Fresh</p>
              <p>
                Maximus, purus quis tincidunt semper, felis tellus mole stie
                nulla, in finibus erat magna et tortor phasellus a magna
                lobortis
              </p>
            </div>

            <div className={s.content}>
              <div className={s.imgh1}>
        
                <img src={img4} alt="1234" className="img-fluid" />
                <h1 className={s.titleh1}>02.</h1>
              </div>

              <p className={s.titletext}>Always Fresh</p>
              <p>
                Maximus, purus quis tincidunt semper, felis tellus mole stie
                nulla, in finibus erat magna et tortor phasellus a magna
                lobortis
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <img src={img2} alt="asd" className="img-fluid" />
            </div>
          </Col>
          <Col md={4}>
          <div className={s.content}>
              <div className={s.imgh1}>
        
                <img src={img5} alt="1234" className="img-fluid" />
                <h1 className={s.titleh1}>03.</h1>
              </div>

              <p className={s.titletext}>Always Fresh</p>
              <p>
                Maximus, purus quis tincidunt semper, felis tellus mole stie
                nulla, in finibus erat magna et tortor phasellus a magna
                lobortis
              </p>
            </div>

            <div className={s.content}>
              <div className={s.imgh1}>
        
                <img src={img6} alt="1234" className="img-fluid" />
                <h1 className={s.titleh1}>04.</h1>
              </div>

              <p className={s.titletext}>Always Fresh</p>
              <p>
                Maximus, purus quis tincidunt semper, felis tellus mole stie
                nulla, in finibus erat magna et tortor phasellus a magna
                lobortis
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BestFood;
