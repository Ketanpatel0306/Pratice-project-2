import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/Whatourclinets.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Whatourclinets = () => {
  var settings = {
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={Style.Whatourclinets}>
      <Container>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Row className={Style.WhatourclinetsRow}>
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={Style.WhatourclinetsCol1}
            >
              <h2 className={Style.WhatourclinetsColH2}>
                What our clients say about us
              </h2>
              <p className={Style.WhatourclinetsP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <h4 className={Style.WhatourclinetsCol2H4}>
                "The best agency we’ve worked with so far. They understand our
                product and are able to add new features with a great focus."
              </h4>
              <Slider {...settings}>
                <div className={Style.WhatourclinetsCol2Div}>
                  <Image src="./Images/Mask Group.svg" />
                  <div className={Style.WhatourclinetsCol2Div2}>
                    <h5 className={Style.WhatourclinetsCol2DivH5}>
                      Jenny Wilson
                    </h5>
                    <h6 className={Style.WhatourclinetsCol2DivH6}>
                      Vice President
                    </h6>
                  </div>
                </div>
                <div className={Style.WhatourclinetsCol2Div}>
                  <Image src="./Images/Mask Group.svg" />
                  <div className={Style.WhatourclinetsCol2Div2}>
                    <h5 className={Style.WhatourclinetsCol2DivH5}>
                      Jenny Wilson
                    </h5>
                    <h6 className={Style.WhatourclinetsCol2DivH6}>
                      Vice President
                    </h6>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </AnimationOnScroll>
      </Container>
    </div>
  );
};
