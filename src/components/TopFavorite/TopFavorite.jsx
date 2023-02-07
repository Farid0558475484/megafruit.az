import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./TopFavorite.module.scss";

import img1 from "./../../img/2.1.avif";
import img2 from "./../../img/2.2.avif";
import img3 from "./../../img/2.3.avif";
import img4 from "./../../img/2.4.avif";
import img5 from "./../../img/2.5.avif";
import img6 from "./../../img/2.6.avif";

function TopFavorite() {
  return (
    <div className={s.top}>
      <Container>
        <Row>
          <h1 className={s.title}>Top Favorite Fruits</h1>
          <p className={s.text}>
            {" "}
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
          <div className="d-flex justify-content-around">
            <div>
              <img src={img1} alt="" className="img-fluid "/>
              <p className={s.fruittext}>orange</p>
            </div>
            <div>
              <img src={img2} alt="" className="img-fluid "/>
              <p className={s.fruittext}>orange</p>
            </div>
            <div>
              <img src={img3} alt="" className="img-fluid "/>
              <p className={s.fruittext}>orange</p>
            </div>
            <div>
              <img src={img4} alt="" className="img-fluid "/>
              <p className={s.fruittext}>orange</p>
            </div>
            <div>
              <img src={img5} alt=""className="img-fluid " />
              <p className={s.fruittext}>orange</p>
            </div>
            <div>
              <img src={img6} alt="" className="img-fluid "/>
              <p className={s.fruittext}>orange</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default TopFavorite;
