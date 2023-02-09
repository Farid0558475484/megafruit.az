import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
// import img1 from './../../img/headerslider1.webp'
// import img2 from './../../img/headerslider2.webp'
 import img2 from './../../img/1.png'
// import img3 from "./../../img/headerslider3.jpeg"
import img3 from "./../../img/2.webp"
import img11 from "./../../img/1.1.webp"
import img12 from "./../../img/1.2.webp"
import img13 from "./../../img/1.3.webp"
import img14 from "./../../img/1.4.webp"
import s from "./HeaderSlider.module.scss"
import FreeShipping from '../FreeShipping/FreeShipping'
import img111 from './../../img/slider111.png'

function HeaderSlider() {
  return (
<div>
<Container fluid className={s.fluider}>
<Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        src={img111}
        alt="First slide"
       
      />
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
      <Carousel.Caption>
 
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
      <Carousel.Caption>

      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
</Container>
<FreeShipping />

<Container className={s.headerslidermain}>
<Row>
    <Col md={4}>
    <img src={img11} alt="img11" className="img-fluid"/>
    </Col>
    <Col md={4}>
    <img src={img12} alt="img11" className="img-fluid "/>
    <img src={img13} alt="img11" className="img-fluid pt-4"/>
    </Col>
    <Col md={4}>
    <img src={img14} alt="img11" className="img-fluid"/>
    </Col>
</Row>
</Container>
</div>

  )
}

export default HeaderSlider