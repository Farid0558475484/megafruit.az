import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./TopFavorite.module.scss";
import { useTranslation } from "react-i18next";

import img1 from "./../../img/2.1.avif";
import img2 from "./../../img/2.2.avif";
// import img3 from "./../../img/2.3.avif";
import img4 from "./../../img/2.4.avif";
import img5 from "./../../img/2.5.avif";
// import img6 from "./../../img/2.6.avif";

function TopFavorite() {

  const { t } = useTranslation();
  
  return (
    <div className={s.top}>
      <Container>
        <Row>
          <h1 className={s.title}>{t("Top Favorite Fruits")}</h1>
          <p className={s.text}>{t("text111")}
          </p>
          <div className="d-flex justify-content-around mt-4">
            <div>
              <img src={img1} alt="" className="img-fluid "/>
              <p className={s.fruittext}>{t("Orange")}</p>
            </div>
            <div>
              <img src={img2} alt="" className="img-fluid "/>
              <p className={s.fruittext}>{t("Grapes")}</p>
            </div>
            {/* <div>
              <img src={img3} alt="" className="img-fluid "/>
              <p className={s.fruittext}>orange</p>
            </div> */}
            <div>
              <img src={img4} alt="" className="img-fluid "/>
              <p className={s.fruittext}>{t("Ananas")}</p>
            </div>
            <div>
              <img src={img5} alt=""className="img-fluid " />
              <p className={s.fruittext}>{t("Apple")}</p>
            </div>
   
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default TopFavorite;
