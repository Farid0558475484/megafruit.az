import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Fruits.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./../../img/8.1.webp";
import img2 from "./../../img/8.2.webp";
import img3 from "./../../img/8.3.webp";
import img4 from "./../../img/8.4.webp";
import img5 from "./../../img/8.5.jpg";
import img6 from "./../../img/8.6.webp";
import img7 from "./../../img/8.7.jpg";
import img8 from "./../../img/8.8.webp";
import img9 from "./../../img/9.1.webp";
import img10 from "./../../img/9.2.webp";
import img11 from "./../../img/9.3.webp";
import img12 from "./../../img/9.4.webp";

import img13 from "./../../img/10.1.webp";
import img14 from "./../../img/10.2.webp";
import img15 from "./../../img/10.3.webp";
import img16 from "./../../img/10.4.webp";

import img17 from "./../../img/12.1.webp";
import img18 from "./../../img/12.2.jpg";
import img19 from "./../../img/12.3.webp";
import img20 from "./../../img/12.4.webp";

import { Card } from "react-bootstrap";

function Fruits() {

  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <Row>
          <h1 className={s.fruits}>{t("Fruits")}</h1>

          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img1} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Strawberry")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img2} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Grapes")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img3} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Pear")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img4} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Lemon")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img5} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Kiwi")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img6} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Cherry")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img7} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Grapefruit")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img8} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Dragon Fruit")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img17} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Blueberry")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img18} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Avocado")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img19} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Durian Thailand")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img20} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Mango Fresh")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h1 className={s.fruits}>{t("Vegetables")}</h1>

          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img9} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Cabbage")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img10} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Fresh Tomato")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img11} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Eggplant")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img12} className="img-fluid" />
              <Card.Body>
                <Card.Title>{t("Red Capsicum")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h1 className={s.fruits}>{t("Dried Fruit")}</h1>

          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img13} className="img-fluid" />
              <Card.Body>
                <Card.Title> {t("Almonds")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img14} className="img-fluid" />
              <Card.Body>
                <Card.Title> {t("Pistachios")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img15} className="img-fluid" />
              <Card.Body>
                <Card.Title> {t("Dates")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} sm={6} xs={6}>
            <Card className={s.card}>
              <Card.Img src={img16} className="img-fluid" />
              <Card.Body>
                <Card.Title> {t("Walnuts")}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fruits;
