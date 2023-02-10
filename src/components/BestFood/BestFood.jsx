import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import s from "./BestFood.module.scss";
import img2 from "./../../img/6.2.webp";
import img3 from "./../../img/6.3.webp";
import img4 from "./../../img/6.4.webp";
import img5 from "./../../img/6.5.webp";
import img6 from "./../../img/6.6.webp";

function BestFood() {
  const { t } = useTranslation();
  return (
    <div className={s.img}>
      <Container>
        <Row>
          <div className={s.top}>
            <h3 className={s.title}>{t("bestfood")}</h3>
          </div>

          <Col md={4}>
            <div className={s.content}>
              <div className={s.imgh1}>
                <img src={img3} alt="1234" className="img-fluid" />
                {/* <h1 className={s.titleh1}>01.</h1> */}
              </div>

              <p className={s.titletext}>{t("Always Fresh")}</p>
              <p>
             {t("best1")}
              </p>
            </div>

            <div className={s.content}>
              <div className={s.imgh1}>
                <img src={img4} alt="1234" className="img-fluid" />
                {/* <h1 className={s.titleh1}>02.</h1> */}
              </div>

              <p className={s.titletext}> 100% {t("Organic")}</p>
              <p>
              {t("best2")}
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
                {/* <h1 className={s.titleh1}>03.</h1> */}
              </div>

              <p className={s.titletext}> {t("Family healthy")}</p>
              <p>
        {t("best3")}
              </p>
            </div>

            <div className={s.content}>
              <div className={s.imgh1}>
                <img src={img6} alt="1234" className="img-fluid" />
                {/* <h1 className={s.titleh1}>04.</h1> */}
              </div>

              <p className={s.titletext}>{t("The best")}</p>
              <p>
          {t("best4")}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BestFood;
