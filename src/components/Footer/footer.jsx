import React from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import s from "./Footer.module.scss";
import img from "./../../img/a1.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone, faLocationDot, faEnvelope);


// import { Navlink } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6} className="mt-5">
            <div className={s.left}>
              <h1 className="mb-5">{t("contacts")}</h1>
              <p className={s.p}>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
                {t("location")}
              </p>
              <a className={s.p} href="tel:+994515712493">
                <FontAwesomeIcon icon="fa-solid fa-phone" /> + 994 51 571 24 93
              </a>

              {/* <button className={s.call}>
             <a href="tel:+994515712493">Pozvanit</a>
              </button> */}

              <p className={s.p}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
                beslogistik_megafruitaz@mail.ru
              </p>
            </div>
          </Col>

          <Col md={6}>
        <iframe width="100%" height="319" id="gmap_canvas" src="https://maps.google.com/maps?q=GAZAX RAYONU,YUXARI SALAHLI&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></Col>

          <Col md={12}>
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
