import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./Header.module.scss";
// import logo from "../../img/logo.png";
// import logo from "../../img/logo111.png";
// import { library } from "@fortawesome/fontawesome-svg-core";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faTelegram } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

// library.add(faPhone, faInstagram, faTelegram, faFacebook, faTwitter, faSquareInstagram);

function Header() {
  return (
    <div>
      <Container fluid className={s.headerTop}>
        <Row>
          <Col>
           <div className="d-flex justify-content-between">
           <p >
              {" "}
              Special Offers! – <span className={s.headerTopSpan}>
                Get 30%
              </span>{" "}
              Off On Vegetables{" "}
            </p>

            <p className={s.langButoon}>
              en ru az
            </p>
           </div>
          </Col>
        </Row>
      </Container>

      
      {/* <Container>
        <Row className="d-flex align-items-center">
          <Col xs={4} className="d-flex  justify-content-start">
            <div className={s.headerLeft}>
              <FontAwesomeIcon icon="fa-solid fa-phone" />

              <span className={s.headerLeftNumber}> +994 51 571 24 93</span>
            </div>
          </Col>

          <Col xs={4} className="d-flex  justify-content-center">
            <img src={logo} alt="logo" className={s.logo} />
          </Col>

          <Col xs={4} className={s.headerRight} >
          
            <FontAwesomeIcon icon="fa-brands fa-square-instagram" size="lg" color="green"/>
            <FontAwesomeIcon icon="fa-brands fa-telegram"size="lg" color="green"/>
            <FontAwesomeIcon icon="fa-brands fa-facebook" size="lg"color="green"/>
            <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg" color="green"/>
          </Col>
  
        </Row>
      </Container> */}
    </div>
  );
}

export default Header;
