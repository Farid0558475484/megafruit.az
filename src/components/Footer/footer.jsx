import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./Footer.module.scss";
import img from "./../../img/viplogo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone, faLocationDot, faEnvelope);

function Footer() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6} className="mt-5" >
            <div className={s.left}>
              <h1 className="mb-5">CONTACTS</h1>
              <p className={s.p}> <FontAwesomeIcon icon="fa-solid fa-location-dot" />  AZ3532,Gazax rayonu,Yuxari Salahli</p>
              <p className={s.p}>  <FontAwesomeIcon icon="fa-solid fa-phone" /> + 994 51 571 24 93</p>
              <p className={s.p}><FontAwesomeIcon icon="fa-solid fa-envelope" />  beslogistik_megafruitaz@mail.ru</p>
            </div>
          </Col>

          <Col md={6}>
            <div className={s.left}>
              <img src={img} alt="" className={s.logo} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
