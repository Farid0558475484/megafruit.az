import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";







function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Container fluid className={s.headerTop}>
        <Row>
          <Col>
           <div className="d-flex justify-content-between">

            <p className={s.brand}>{t('headertext')}</p>
        

            <p className={s.langButoon}>
            <button className={s.langbtnheader} onClick={() => changeLanguage("en")}>en</button>
                <button className={s.langbtnheader} onClick={() => changeLanguage("az")}>az</button>
                <button className={s.langbtnheader} onClick={() => changeLanguage("ru")}>ru</button>

            </p>
           </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
