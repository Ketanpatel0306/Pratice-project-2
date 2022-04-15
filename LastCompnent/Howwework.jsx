import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/Howwework.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Howwework = () => {
  return (
    <div className={Style.Howwework}>
      <Container>
        <Row>
          
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
              <h2 className={Style.HowweworkH2}>How we work</h2>
              <p className={Style.HowweworkP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <h5 className={Style.HowweworkH5}>
                Get in touch with us{" "}
                <Image
                  src="./Images/Arrow 2.svg"
                  className={Style.HowweworkImg}
                />
              </h5>
              </AnimationOnScroll>
            </Col>
          
         
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
              <Row className={Style.HowweworkSecoundRowCol2Row}>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className={Style.HowweworkSecoundRowCol1}>
                    <Image
                      src="./Images/pointer 1 (3).svg"
                      className={Style.HowweworkSecoundRowCol1Img}
                    />
                    <h3 className={Style.HowweworkSecoundRowCol1H3}>
                      Strategy
                    </h3>
                    <p className={Style.HowweworkSecoundRowCol1P}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className={Style.HowweworkSecoundRowCol1}>
                    <Image
                      src="./Images/pointer 1 (2).svg"
                      className={Style.HowweworkSecoundRowCol1Img}
                    />
                    <h3 className={Style.HowweworkSecoundRowCol1H3}>
                      Wireframing
                    </h3>
                    <p className={Style.HowweworkSecoundRowCol1P}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className={Style.HowweworkSecoundRowCol1}>
                    <Image
                      src="./Images/pointer 1 (1).svg"
                      className={Style.HowweworkSecoundRowCol1Img}
                    />
                    <h3 className={Style.HowweworkSecoundRowCol1H3}>Design</h3>
                    <p className={Style.HowweworkSecoundRowCol1P}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <div className={Style.HowweworkSecoundRowCol1}>
                    <Image
                      src="./Images/pointer 1.svg"
                      className={Style.HowweworkSecoundRowCol1Img}
                    />
                    <h3 className={Style.HowweworkSecoundRowCol1H3}>
                      Development
                    </h3>
                    <p className={Style.HowweworkSecoundRowCol1P}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
              </Row>
              </AnimationOnScroll>
            </Col>
         
        </Row>
      </Container>
    </div>
  );
};
