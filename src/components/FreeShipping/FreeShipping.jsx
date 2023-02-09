import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import s from "./FreeShipping.module.scss";
import img71 from "./../../img/7.11.jpg";

function FreeShipping() {
  const { t } = useTranslation();
  return (
    <div className={s.free}>
      <Container>
        <Row>
          <Col>
            <div className={s.icon}>
              <img src={img71} alt="" className={s.imglogo} />
              <div>
                <p className={s.title}>{t("Imported")}</p>
                <p className={s.text}>
                  <p>{t("Russian")}</p>
                  <p>{t("United Arab Emirates")}</p>
             
                </p>
              </div>
            </div>

          </Col>
          <Col>
            <div className={s.icon}>
              <img src={img71} alt="" className={s.imglogo} />
              <div>
                <p className={s.title}>{t("Export")}</p>
                <p className={s.text}>
                  <p>{t("Chinese")}</p>
                  <p>{t("Turkey")}</p>
                </p>
              </div>
            </div>

          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default FreeShipping;
